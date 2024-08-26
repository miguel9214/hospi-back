const jwt = require('jsonwebtoken');
require('dotenv').config(); // Cargar variables de entorno desde el archivo .env

const JWT_SECRET = process.env.JWT_SECRET; // Obtener la clave secreta desde las variables de entorno

// Middleware para verificar el token JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Se espera que el token esté en el formato "Bearer TOKEN"

  if (token == null) return res.sendStatus(401); // Si no hay token, se devuelve un error 401

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Si el token no es válido, se devuelve un error 403

    req.user = user; // Guarda la información del usuario en `req.user`
    next(); // Pasa al siguiente middleware o ruta
  });
}

module.exports = authenticateToken;
