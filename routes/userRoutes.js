const express = require('express');
const { User, Role } = require('../models');
const bcrypt = require('bcryptjs');
const router = express.Router();

// Crear un nuevo usuario
router.post('/', async (req, res) => {
  try {
    const { username, email, password, role_id } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, email, password: hashedPassword, role_id });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
});

// Obtener todos los usuarios
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll({ include: Role });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
});

// Actualizar un usuario
router.put('/:id', async (req, res) => {
  try {
    const { username, email, password, role_id } = req.body;
    const hashedPassword = password ? await bcrypt.hash(password, 10) : undefined;
    const [updated] = await User.update({ username, email, password: hashedPassword, role_id }, { where: { id: req.params.id } });
    if (updated) {
      const updatedUser = await User.findByPk(req.params.id, { include: Role });
      res.json(updatedUser);
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el usuario' });
  }
});

// Eliminar un usuario
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await User.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.json({ message: 'Usuario eliminado exitosamente' });
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
});

module.exports = router;
