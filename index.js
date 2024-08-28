const express = require('express');
const cors = require('cors');  // Importa CORS
const app = express();
const { sequelize } = require('./models');

// Configura CORS para permitir solicitudes desde el frontend
app.use(cors({
    origin: 'http://localhost:3000'  // Reemplaza con el origen de tu frontend
}));

const equipmentRoutes = require('./routes/equipmentRoutes');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(express.json());

app.use('/api/equipments', equipmentRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3040;

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});
