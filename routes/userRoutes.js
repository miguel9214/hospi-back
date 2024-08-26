const express = require('express');
const { User, Role } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

// Ruta para registrar un nuevo usuario
router.post('/register', async (req, res) => {
    try {
      const { username, email, password, role_id } = req.body;
  
      // Hashear la contraseña
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Crear el usuario
      const user = await User.create({ username, email, password: hashedPassword, role_id });
  
      res.status(201).json(user);
    } catch (error) {
      console.error('Error al registrar el usuario:', error); // Imprimir el error en la consola
      res.status(500).json({ error: 'Error al registrar el usuario' });
    }
  });
  

// Ruta para iniciar sesión
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Busca el usuario por email
    const user = await User.findOne({ where: { email }, include: Role });
    if (!user) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    // Verifica la contraseña
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    // Genera el token JWT
    const token = jwt.sign({ id: user.id, role: user.Role.name }, process.env.JWT_SECRET, {
      expiresIn: '1h', // El token expira en 1 hora
    });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
});

// Ruta para obtener la información del usuario autenticado
router.get('/me', authMiddleware, async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      include: Role,
      attributes: { exclude: ['password'] },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los datos del usuario' });
  }
});

module.exports = router;
