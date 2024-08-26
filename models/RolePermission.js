// models/rolePermission.js
const Role = require('./role');
const Permission = require('./permission');
const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');

const RolePermission = sequelize.define('RolePermission', {
  // Definir los atributos de la tabla intermedia si es necesario
});

Role.belongsToMany(Permission, { through: RolePermission });
Permission.belongsToMany(Role, { through: RolePermission });

module.exports = RolePermission;
