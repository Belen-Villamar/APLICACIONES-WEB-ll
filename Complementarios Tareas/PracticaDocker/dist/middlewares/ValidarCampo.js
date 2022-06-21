"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarprecio = exports.validacionNombre = exports.validarCampo = void 0;
const express_validator_1 = require("express-validator");
const validarCampo = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }
    next();
};
exports.validarCampo = validarCampo;
const validacionNombre = [
    (0, express_validator_1.check)('nombre_servicio')
        .not()
        .notEmpty().withMessage('El nombre del servicio no puede estar vacía'),
    (req, res, next) => {
        validarCampo(req, res, next);
    }
];
exports.validacionNombre = validacionNombre;
const validarprecio = [
    (0, express_validator_1.check)('precio')
        .not()
        .notEmpty().withMessage('La precio no puede estar vacía'),
    (req, res, next) => {
        validarCampo(req, res, next);
    }
];
exports.validarprecio = validarprecio;
