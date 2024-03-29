"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
// Se importa las librerías  y modulos a utilizar
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./database/config");
const servicio_1 = require("./routes/servicio");
// Se asigna un clase para el servidor
class Server {
    // Se define método
    constructor() {
        this.app = express_1.default.Router();
        this.router = express_1.default.Router();
        //puerto utilizado que se encuentra en el archivo .env
        this.port = Number(3000);
        //ruta usada
        this.paths = {
            servicios: "/proyecto/servicios",
        };
        this.conectarBD();
        this.middlewares();
        this.routes();
        //localhost:3000/v1/prueba/proyecto/servicios
        this.router.use("/v1/prueba", this.app);
        this._express = (0, express_1.default)().use(this.router);
    }
    //esperando la conexion con la base de datos
    conectarBD() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, config_1.Conexion)();
        });
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(this.paths.servicios, servicio_1.rutaservicio);
    }
    listen() {
        this._express.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}/v1/prueba/proyecto/servicios`);
        });
    }
}
exports.Server = Server;
