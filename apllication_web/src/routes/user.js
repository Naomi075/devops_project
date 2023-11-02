// lab/src/routes/user.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

// Route pour récupérer un utilisateur par nom d'utilisateur
router.get('/:username', userController.getUserByUsername);

module.exports = router;
