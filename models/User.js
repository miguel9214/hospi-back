const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Ajusta la ruta si es necesario

class User extends Model {}

User.init({
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Roles', // Nombre de la tabla de roles
      key: 'id'
    }
  }
}, {
  sequelize,
  modelName: 'User'
});

module.exports = User;
