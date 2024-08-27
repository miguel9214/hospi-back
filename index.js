require('dotenv').config(); // Carga las variables de entorno desde .env
const express = require('express');
const app = express();
const { sequelize } = require('./models'); // Asegúrate de que la ruta sea correcta

const equipmentRoutes = require('./routes/equipmentRoutes');
const authRoutes = require('./routes/authRoutes'); // Rutas para autenticación
const userRoutes = require('./routes/userRoutes'); // Rutas CRUD para usuarios

app.use(express.json());

app.use('/api/equipments', equipmentRoutes);
app.use('/api/auth', authRoutes); // Prefijo para rutas de autenticación
app.use('/api/users', userRoutes); // Prefijo para rutas CRUD de usuarios

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
