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
exports.Conexion = void 0;
//const mongoose = require("mongoose");
const mongoose_1 = __importDefault(require("mongoose"));
//Se establece la conexión de con la base de datos de Mongo
const Conexion = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(process.env.MONGODB_CNN || 'mongodb+srv://ejmpl01:Mariajo1131@ejemplo01.30qzr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
        //Muestra que la base de datos está funcionando adecuadamente
        console.log(`Base de datos conectada...`);
    }
    catch (error) {
        console.log(`No se pudo conectar a base de datos`);
        throw new Error(`Error al conectarse a la base de datos`);
    }
});
exports.Conexion = Conexion;
