const express = require('express');
const { User, Role } = require('../models');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Middleware de autenticación (se asegura de que el usuario esté autenticado)
router.use(authMiddleware);

// Ruta para obtener todos los usuarios
router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll({
      include: {
        model: Role,
        attributes: ['name']
      }
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
});

// Ruta para obtener un usuario por ID
router.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: {
        model: Role,
        attributes: ['name']
      }
    });
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el usuario' });
  }
});

// Ruta para actualizar un usuario por ID
router.put('/users/:id', async (req, res) => {
  try {
    const { username, email, role_id } = req.body;
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Actualizar la información del usuario
    user.username = username || user.username;
    user.email = email || user.email;
    user.role_id = role_id || user.role_id;

    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el usuario' });
  }
});

// Ruta para eliminar un usuario por ID
router.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    await user.destroy();
    res.json({ message: 'Usuario eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
});

module.exports = router;
