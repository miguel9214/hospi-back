const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = require('./user');
const Equipment = require('./equipment');
const Role = require('./role');
const Permission = require('./permission');
const RolePermission = require('./rolePermission');

// Configura las relaciones entre modelos
User.belongsTo(Role, { foreignKey: 'role_id' });
Role.hasMany(User, { foreignKey: 'role_id' });

Role.belongsToMany(Permission, { through: RolePermission });
Permission.belongsToMany(Role, { through: RolePermission });

module.exports = {
  sequelize,
  User,
  Equipment,
  Role,
  Permission,
  RolePermission,
};
