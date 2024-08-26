# Proyecto de Gestión de Equipos de Cómputo

Este proyecto es una aplicación para gestionar información sobre equipos de cómputo en una empresa. Utiliza Node.js, Express y Sequelize con una base de datos relacional.

## Requisitos

Antes de comenzar, asegúrate de tener instalados los siguientes programas en tu sistema:

- [Node.js](https://nodejs.org/) (v14 o superior)
- [npm](https://www.npmjs.com/) (se instala automáticamente con Node.js)
- [MySQL](https://www.mysql.com/) o [PostgreSQL](https://www.postgresql.org/) (según la base de datos que elijas)

## Configuración del Proyecto

1. **Clona el Repositorio**

   Clona este repositorio en tu máquina local usando Git:

   ```bash
   git clone https://github.com/tu_usuario/tu_repositorio.git
   cd tu_repositorio

Instala las Dependencias

Asegúrate de estar en el directorio raíz del proyecto y luego ejecuta:

bash
Copiar código
npm install
Esto instalará todas las dependencias necesarias para el proyecto.

Configura la Base de Datos

Crea un archivo de configuración para la base de datos. Crea un archivo llamado config/database.js y configura la conexión a tu base de datos:

javascript
Copiar código
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nombre_base_de_datos', 'usuario', 'contraseña', {
  host: 'localhost',
  dialect: 'mysql', // Cambia a 'postgres' si usas PostgreSQL
});

module.exports = sequelize;
Configura las Variables de Entorno

Crea un archivo .env en la raíz del proyecto para almacenar las variables de entorno. Añade las siguientes variables:

makefile
Copiar código
DB_HOST=localhost
DB_USER=usuario
DB_PASSWORD=contraseña
DB_NAME=nombre_base_de_datos
Ejecuta la Semilla de la Base de Datos

Para poblar la base de datos con datos iniciales, ejecuta el script de semillas:

bash
Copiar código
node seed.js
Inicia el Servidor

Puedes iniciar el servidor de desarrollo con nodemon para recargar automáticamente los cambios:

bash
Copiar código
npm run dev
O con node:

bash
Copiar código
node index.js
