require('dotenv').config(); // Carga las variables de entorno desde .env
const express = require('express');
const app = express();
const { sequelize } = require('./models'); // Asegúrate de que la ruta sea correcta

const equipmentRoutes = require('./routes/equipmentRoutes');
const userRoutes = require('./routes/authRoutes');

app.use(express.json());

app.use('/api/equipments', equipmentRoutes);
app.use('/api/users', userRoutes);

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
