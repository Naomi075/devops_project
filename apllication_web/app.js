
// Importe le module Express
const express = require('express');
const redis = require('redis'); // Importe le module Redis
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json()); // Middleware pour analyser les données POST

// Configuration de la connexion à Redis
const redisClient = redis.createClient({
  host: 'localhost', // Remplace par l'adresse de ton serveur Redis si nécessaire
  port: 6379,       // Port par défaut de Redis
});

// Vérifie l'état de la connexion à Redis
redisClient.on('connect', () => {
  console.log('Connected to Redis');
});

redisClient.on('error', (err) => {
  console.error('Redis connection error:', err);
});

// Configuration du port sur lequel l'application écoutera
const port = process.env.PORT || 3000;

// Route pour stocker des données utilisateur dans Redis
app.post('/store-user', (req, res) => {
  const { userId, username, email } = req.body;

  // Stocke les données de l'utilisateur dans Redis avec une clé basée sur l'ID de l'utilisateur
  redisClient.hset('users', userId, JSON.stringify({ username, email }), (err) => {
    if (err) {
      console.error('Erreur lors du stockage des données de l\'utilisateur :', err);
      res.status(500).json({ error: 'Erreur lors du stockage des données de l\'utilisateur' });
    } else {
      res.status(201).json({ message: 'Données de l\'utilisateur stockées avec succès' });
    }
  });
});

// Route pour récupérer des données utilisateur depuis Redis
app.get('/get-user/:userId', (req, res) => {
  const userId = req.params.userId;

  // Récupère les données de l'utilisateur à partir de Redis en utilisant l'ID de l'utilisateur comme clé
  redisClient.hget('users', userId, (err, userData) => {
    if (err) {
      console.error('Erreur lors de la récupération des données de l\'utilisateur :', err);
      res.status(500).json({ error: 'Erreur lors de la récupération des données de l\'utilisateur' });
    } else if (userData) {
      const user = JSON.parse(userData);
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'Utilisateur non trouvé' });
    }
  });
});

// Gestion de la racine de l'application
app.get('/', (req, res) => {
  res.send('Bonjour, ceci est une application Express avec Redis.');
});

// Démarrage du serveur Express pour écouter les requêtes entrantes
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});



