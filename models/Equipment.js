const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Equipment = sequelize.define('Equipment', {
  dependencia: DataTypes.STRING,
  nombre_equipo: DataTypes.STRING,
  so: DataTypes.STRING,
  paquete_ofimatica: DataTypes.STRING,
  modelo: DataTypes.STRING,
  marca: DataTypes.STRING,
  cpu: DataTypes.STRING,
  hdd: DataTypes.INTEGER,
  ram: DataTypes.INTEGER,
  ip: DataTypes.STRING,
  mac: DataTypes.STRING,
  serial: DataTypes.STRING,
  n_activo_fijo: DataTypes.STRING,
  anydesk: DataTypes.STRING,
  impresora: DataTypes.BOOLEAN,
  impresora_n_activo_fijo: DataTypes.STRING,
  escaner: DataTypes.BOOLEAN,
  escaner_n_activo_fijo: DataTypes.STRING,
});

module.exports = Equipment;
