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

## Instala las Dependencias

2. **Asegúrate de estar en el directorio raíz del proyecto y luego ejecuta:**

  ```bash
  npm install

Esto instalará todas las dependencias necesarias para el proyecto.

## Crea un archivo .env en la raíz del proyecto para almacenar las variables de entorno. Añade las siguientes variables:

   ```bash
  DB_HOST=localhost
  DB_USER=usuario
  DB_PASSWORD=contraseña
  DB_NAME=nombre_base_de_datos

Ejecuta la Semilla de la Base de Datos

## Para poblar la base de datos con datos iniciales, ejecuta el script de semillas:

  ```bash
  node seed.js

## Inicia el Servidor

 4. **Puedes iniciar el servidor de desarrollo con nodemon para recargar automáticamente los cambios:**

  ```bash
  npm run dev
  node index.js
