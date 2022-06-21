"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Servicio = void 0;
const mongoose_1 = require("mongoose");
const ServicioSchema = new mongoose_1.Schema({
    nombre_servicio: {
        type: String,
        required: [true, `El nombre del servicio es obligatorio`],
        unique: true,
    },
    precio: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true,
    versionKey: false,
});
const Servicio = (0, mongoose_1.model)('ServiciosAdi', ServicioSchema);
exports.Servicio = Servicio;
