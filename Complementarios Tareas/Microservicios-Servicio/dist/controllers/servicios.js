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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.borraServicios = exports.actServicios = exports.nuevoServicio = exports.obtenerServicio = exports.MostrarServicios = void 0;
const servicios_1 = require("../models/servicios");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Funciona con Postman
const MostrarServicios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };
    const [total, servicios] = yield Promise.all([
        servicios_1.ServiciosAdi.countDocuments(query),
        servicios_1.ServiciosAdi.find(query),
    ]);
    res.json({
        total,
        servicios,
    });
});
exports.MostrarServicios = MostrarServicios;
const obtenerServicio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const servicio = yield servicios_1.ServiciosAdi.findById(id);
    res.json(servicio);
});
exports.obtenerServicio = obtenerServicio;
const nuevoServicio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _a = req.body, { estado } = _a, body = __rest(_a, ["estado"]);
    const serActual = yield servicios_1.ServiciosAdi.findOne({
        nombre_servicio: body.nombre_servicio,
    });
    if (serActual) {
        res.status(400).json({
            message: `El servicio con ese nombre ya existe ${serActual.nombre_servicio}`,
        });
    }
    const serid = new servicios_1.ServiciosAdi(body);
    const serNuevo = yield serid.save();
    res.status(201).json(serNuevo);
});
exports.nuevoServicio = nuevoServicio;
const actServicios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const _b = req.body, { estado } = _b, data = __rest(_b, ["estado"]);
    const serModificado = yield servicios_1.ServiciosAdi.findByIdAndUpdate(id, data, {
        new: true,
    });
    res.json(serModificado);
});
exports.actServicios = actServicios;
const borraServicios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const serBorrado = yield servicios_1.ServiciosAdi.findByIdAndUpdate(id, { estado: false }, { new: true });
    res.json(serBorrado);
});
exports.borraServicios = borraServicios;
