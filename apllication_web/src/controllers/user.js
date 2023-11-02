// lab/src/controllers/user.js

// lab/src/routes/user.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

// Route pour récupérer un utilisateur par nom d'utilisateur
router.get('/get-user/:username', userController.getUserByUsername);

// Autre route pour collecter le nom d'utilisateur
router.get('/collect-username/:username', async (req, res) => {
  const { username } = req.params;

  try {
    const user = await User.findOne({ username });

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'Utilisateur non trouvé' });
    }
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'utilisateur :', error);
    res.status(500).json({ error: 'Erreur lors de la récupération de l\'utilisateur' });
  }
});

module.exports = router;
