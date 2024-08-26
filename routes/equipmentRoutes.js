const express = require('express');
const { Equipment } = require('../models');
const router = express.Router();

// Crear un nuevo equipo
router.post('/', async (req, res) => {
  try {
    const newEquipment = await Equipment.create(req.body);
    res.status(201).json(newEquipment);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el equipo' });
  }
});

// Obtener todos los equipos
router.get('/', async (req, res) => {
  try {
    const equipments = await Equipment.findAll();
    res.json(equipments);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los equipos' });
  }
});

// Actualizar un equipo
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Equipment.update(req.body, { where: { id: req.params.id } });
    if (updated) {
      const updatedEquipment = await Equipment.findByPk(req.params.id);
      res.json(updatedEquipment);
    } else {
      res.status(404).json({ error: 'Equipo no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el equipo' });
  }
});

// Eliminar un equipo
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Equipment.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.json({ message: 'Equipo eliminado exitosamente' });
    } else {
      res.status(404).json({ error: 'Equipo no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el equipo' });
  }
});

module.exports = router;
