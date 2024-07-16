const fs = require('fs');
const dotenv = require('dotenv');

// Завантаження змінних з .env файлу
dotenv.config();

console.log('Завантажені змінні оточення:');
console.log(process.env);

// Генерація environment.ts файлу
const envConfig = `export const environment = {
    URI: '${process.env.URI}',
    USERNAME: '${process.env.USERNAME}',
    PASSWORD:'${process.env.PASSWORD}',
    URI_WSS: '${process.env.URI_WSS}', 
};`;

const dir = './src/app/environments';

const prodEnvConfig = `export const environment = {
    URI: '${process.env.URI}',
    USERNAME: '${process.env.USERNAME}',
    PASSWORD:'${process.env.PASSWORD}',
    URI_WSS: '${process.env.URI_WSS}', 
  };`

fs.writeFileSync(`${dir}/environment.ts`, envConfig);
fs.writeFileSync(`${dir}/environment.prod.ts`, prodEnvConfig);