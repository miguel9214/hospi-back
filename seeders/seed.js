// seed.js

const sequelize = require('../config/database');
const Role = require('../models/index.js');
const User = require('../models/index.js');
const Permission = require('../models/Permission');
const Equipment = require('../models/index,js'); 
const RolePermission = require('../models/RolePermission');
const bcrypt = require('bcryptjs');

// Función principal para ejecutar las semillas
async function seedDatabase() {
  try {
    // Sincronizar la base de datos (opcional, asegúrate de que esté sincronizada)
    await sequelize.sync({ force: true });
    console.log('Base de datos sincronizada.');

    // Crear Roles
    const adminRole = await Role.create({ name: 'Admin', description: 'Administrador del sistema' });
    const userRole = await Role.create({ name: 'User', description: 'Usuario estándar' });

    console.log('Roles creados.');

    // Crear Permisos
    const viewEquipmentPermission = await Permission.create({ name: 'view_equipment', description: 'Ver información de equipos' });
    const editEquipmentPermission = await Permission.create({ name: 'edit_equipment', description: 'Editar información de equipos' });

    console.log('Permisos creados.');

    // Asignar permisos al rol de Admin
    await adminRole.setPermissions([viewEquipmentPermission, editEquipmentPermission]);
    console.log('Permisos asignados al rol Admin.');

    // Crear Usuario Administrador
    const hashedPassword = await bcrypt.hash('adminpassword', 10); // Cambia 'adminpassword' por la contraseña deseada
    await User.create({
      username: 'admin',
      email: 'admin@example.com',
      password: hashedPassword,
      role_id: adminRole.id,
    });

    console.log('Usuario administrador creado.');

    // Opcional: Crear equipos de prueba
    await Equipment.create({
      dependencia: 'IT Department',
      nombre_equipo: 'Laptop-01',
      so: 'Windows 10',
      paquete_ofimatica: 'Microsoft Office 2019',
      modelo: 'XPS 13',
      marca: 'Dell',
      cpu: 'Intel i7',
      hdd: 512,
      ram: 16,
      ip: '192.168.1.10',
      mac: '00:0a:95:9d:68:16',
      serial: 'SN123456789',
      n_activo_fijo: 'AF-001',
      anydesk: '123456789',
      impresora: true,
      impresora_n_activo_fijo: 'IMP-001',
      escaner: true,
      escaner_n_activo_fijo: 'ESC-001',
    });

    console.log('Datos de equipos creados.');
    
    console.log('Base de datos poblada con datos semilla.');

  } catch (err) {
    console.error('Error al poblar la base de datos:', err);
  } finally {
    sequelize.close(); // Cierra la conexión con la base de datos
  }
}

// Ejecuta la función de semillas
seedDatabase();
