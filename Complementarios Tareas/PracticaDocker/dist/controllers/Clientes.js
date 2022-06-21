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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crear_servicios = void 0;
const models_1 = require("../models");
const Crear_servicios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const servicio1 = req.body;
    const servicio2 = new models_1.Servicio(servicio1);
    if (!servicio2) {
        return res.status(400).json({
            message: `No se puede guardar servicio`
        });
    }
    res.status(201).json("Se guardó el servicio"); //Enviamos un mensaje para la consola
});
exports.Crear_servicios = Crear_servicios;
