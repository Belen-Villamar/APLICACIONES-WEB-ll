"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validacion = void 0;
// Se requiere librerias de express y express-validator
const express_validator_1 = require("express-validator");
// Se define la validación de los campos
const validacion = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.status(400).json(errors);
        next();
    }
    next();
};
exports.validacion = validacion;
