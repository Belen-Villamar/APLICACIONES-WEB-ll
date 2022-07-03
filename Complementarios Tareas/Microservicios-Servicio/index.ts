// Se requiere de dotenv para cargar variables de entorno 
import {config} from 'dotenv';
config()
// Permite agregar la ruta del servidor
import {Server} from './server';
// Se atiende al servidor 
const server = new Server();
server.listen();
