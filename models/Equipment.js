module.exports = (sequelize, DataTypes) => {
  const Equipment = sequelize.define('Equipment', {
    dependencia: DataTypes.STRING,
    nombre_de_equipo: DataTypes.STRING,
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
    numero_activo_fijo: DataTypes.STRING,
    anydesk: DataTypes.STRING,
    impresora: DataTypes.STRING,
    numero_activo_fijo_impresora: DataTypes.STRING,
    escaner: DataTypes.STRING,
    numero_activo_fijo_escaner: DataTypes.STRING,
  });

  return Equipment;
};
