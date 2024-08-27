// middlewares/adminMiddleware.js

const jwt = require('jsonwebtoken');
const { User, Role } = require('../models');

const adminMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findByPk(decoded.id, { include: Role });
    if (user && user.Role.name === 'Admin') {
      req.user = user;
      next();
    } else {
      return res.status(403).json({ error: 'Acceso denegado: No eres administrador' });
    }
  } catch (error) {
    return res.status(401).json({ error: 'Autenticación fallida' });
  }
};

module.exports = adminMiddleware;
