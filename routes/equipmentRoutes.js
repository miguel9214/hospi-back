const express = require('express');
const { Equipment } = require('../models'); // Asegúrate de que la importación del modelo sea correcta

const router = express.Router();

// Obtener todos los equipos (GET /api/equipments)
router.get('/', async (req, res) => {
    try {
        const equipments = await Equipment.findAll();
        res.json(equipments);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener los equipos' });
    }
});

// Obtener un equipo por ID (GET /api/equipments/:id)
router.get('/:id', async (req, res) => {
    try {
        const equipment = await Equipment.findByPk(req.params.id);
        if (equipment) {
            res.json(equipment);
        } else {
            res.status(404).json({ error: 'Equipo no encontrado' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener el equipo' });
    }
});

// Crear un nuevo equipo (POST /api/equipments)
router.post('/', async (req, res) => {
    try {
        const newEquipment = await Equipment.create(req.body);
        res.status(201).json(newEquipment);
    } catch (err) {
        res.status(500).json({ error: 'Error al crear el equipo' });
    }
});

// Actualizar un equipo por ID (PUT /api/equipments/:id)
router.put('/:id', async (req, res) => {
    try {
        const updated = await Equipment.update(req.body, {
            where: { id: req.params.id }
        });

        if (updated[0] === 1) { // [0] es la cantidad de registros actualizados
            const updatedEquipment = await Equipment.findByPk(req.params.id);
            res.json(updatedEquipment);
        } else {
            res.status(404).json({ error: 'Equipo no encontrado' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Error al actualizar el equipo' });
    }
});

// Eliminar un equipo por ID (DELETE /api/equipments/:id)
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Equipment.destroy({
            where: { id: req.params.id }
        });

        if (deleted) {
            res.json({ message: 'Equipo eliminado exitosamente' });
        } else {
            res.status(404).json({ error: 'Equipo no encontrado' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar el equipo' });
    }
});

module.exports = router;
