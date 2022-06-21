"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const { Crear_servicios } = controllers_1.Servicio;
const middlewares_1 = require("../middlewares");
class ClienteRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.post('/', middlewares_1.validarprecio, Crear_servicios);
    }
}
const clienteRoutes = new ClienteRoutes();
clienteRoutes.routes();
exports.default = clienteRoutes.router;
