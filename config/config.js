require('dotenv').config(); // Asegúrate de tener dotenv instalado

module.exports = {
  JWT_SECRET: process.env.JWT_SECRET || 'xWs4rCPNG7Z8ZQj9UprZ', // Reemplaza por un secreto más seguro
};
