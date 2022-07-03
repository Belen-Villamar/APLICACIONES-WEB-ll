"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rutaservicio = void 0;
// Se requiere de las librerías de express y express-validator
const express_1 = require("express");
const express_validator_1 = require("express-validator");
//Se importa lod métodos
const servicios_1 = require("../controllers/servicios");
const middlewares_1 = require("../middlewares");
const router = (0, express_1.Router)();
exports.rutaservicio = router;
router.get("/", servicios_1.MostrarServicios);
router.get("/:id", [(0, express_validator_1.check)("id", "El id no es valido o no existe").isMongoId(), middlewares_1.validacion], servicios_1.obtenerServicio);
router.post("/", [
    (0, express_validator_1.check)("nombre_servicio", "el nombre_servicio es obligatorio")
        .not()
        .isEmpty(),
    middlewares_1.validacion,
], servicios_1.nuevoServicio);
router.put("/:id", [(0, express_validator_1.check)("id", "El id no es valido").isMongoId(), middlewares_1.validacion], servicios_1.actServicios);
router.delete("/:id", [(0, express_validator_1.check)("id", "El id es incorrecto").isMongoId(), middlewares_1.validacion], servicios_1.borraServicios);
