"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiciosAdi = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
const ServiciosSchema = new Schema({
    nombre_servicio: {
        type: String,
        unique: true,
    },
    precio: {
        type: Number,
    },
}, {
    timestamps: true,
    versionKey: false,
});
const ServiciosAdi = model("Servicios", ServiciosSchema);
exports.ServiciosAdi = ServiciosAdi;
