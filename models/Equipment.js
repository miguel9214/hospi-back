// models/Equipment.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Equipment = sequelize.define('Equipment', {
  // Define los campos de tu tabla Equipment aquí
  dependencia: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nombre_equipo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  so: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  paquete_ofimatica: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  modelo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  marca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpu: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hdd: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ram: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ip: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mac: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  serial: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  n_activo_fijo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  anydesk: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  impresora: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  impresora_n_activo_fijo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  escaner: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  escaner_n_activo_fijo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Equipment;
