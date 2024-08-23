const express = require('express');
const equipmentRoutes = require('./routes/equipmentRoutes');
const userRoutes = require('./routes/userRoutes'); // Importa las rutas de usuario

const app = express();

app.use(express.json());

// Usa las rutas de equipos
app.use('/api/equipments', equipmentRoutes);

// Usa las rutas de usuarios
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
