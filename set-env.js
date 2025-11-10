const fs = require('fs');
const dotenv = require('dotenv');

// Cargar variables de entorno desde .env
dotenv.config();

// Obtener variables de entorno con valores por defecto
const apiUrl = process.env['ANGULAR_API_URL'] || 'http://localhost:3000/api';
const adminWhatsapp = process.env['ANGULAR_ADMIN_WHATSAPP'] || '51996020212';

// Contenido del archivo environment.prod.ts
const envConfigFile = `export const environment = {
  production: true,
  apiUrl: '${apiUrl}',
  adminWhatsapp: '${adminWhatsapp}'
};
`;

// Escribir el archivo
const targetPath = './src/environments/environment.prod.ts';
fs.writeFileSync(targetPath, envConfigFile);

console.log(`✅ Environment file generated at ${targetPath}`);
console.log(`   API URL: ${apiUrl}`);
console.log(`   Admin WhatsApp: ${adminWhatsapp}`);
