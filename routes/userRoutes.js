const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User, Role } = require('../models'); // Asegúrate de que la importación del modelo sea correcta

const router = express.Router();

// Crear un nuevo usuario (POST /api/users)
router.post('/', async (req, res) => {
    try {
        const { username, email, password, role_id } = req.body;

        // Hash del password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Verifica si el rol existe
        const role = await Role.findByPk(role_id);
        if (!role) {
            return res.status(400).json({ error: 'Rol no encontrado' });
        }

        // Crear usuario
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
            role_id
        });

        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
});

// Obtener todos los usuarios (GET /api/users)
router.get('/', async (req, res) => {
    try {
        const users = await User.findAll({ include: Role });
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
});

// Obtener un usuario por ID (GET /api/users/:id)
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id, { include: Role });
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'Usuario no encontrado' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
});

// Actualizar un usuario por ID (PUT /api/users/:id)
router.put('/:id', async (req, res) => {
    try {
        const { username, email, password, role_id } = req.body;

        // Hash del password si se proporciona
        const hashedPassword = password ? await bcrypt.hash(password, 10) : undefined;

        // Verifica si el rol existe
        const role = await Role.findByPk(role_id);
        if (!role) {
            return res.status(400).json({ error: 'Rol no encontrado' });
        }

        // Actualizar usuario
        const [updated] = await User.update(
            {
                username,
                email,
                password: hashedPassword,
                role_id
            },
            {
                where: { id: req.params.id }
            }
        );

        if (updated) {
            const updatedUser = await User.findByPk(req.params.id, { include: Role });
            res.json(updatedUser);
        } else {
            res.status(404).json({ error: 'Usuario no encontrado' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
});

// Eliminar un usuario por ID (DELETE /api/users/:id)
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await User.destroy({
            where: { id: req.params.id }
        });

        if (deleted) {
            res.json({ message: 'Usuario eliminado exitosamente' });
        } else {
            res.status(404).json({ error: 'Usuario no encontrado' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
});

module.exports = router;
