"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Se requiere de dotenv para cargar variables de entorno 
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
// Permite agregar la ruta del servidor
const server_1 = require("./server");
// Se atiende al servidor 
const server = new server_1.Server();
server.listen();
