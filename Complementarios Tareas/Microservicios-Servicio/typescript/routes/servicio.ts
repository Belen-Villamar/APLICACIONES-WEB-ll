// Se requiere de las librerías de express y express-validator
import { Router } from "express"
import { check } from "express-validator";
//Se importa lod métodos
import {
  MostrarServicios,
  obtenerServicio,
  nuevoServicio,
  actServicios,
  borraServicios,
} from "../controllers/servicios";

import { validacion } from "../middlewares";

const router = Router();

router.get("/", MostrarServicios);

router.get(
  "/:id",
  [check("id", "El id no es valido o no existe").isMongoId(), validacion],
  obtenerServicio
);

router.post(
  "/",
  [
    check("nombre_servicio", "el nombre_servicio es obligatorio")
      .not()
      .isEmpty(),
    validacion,
  ],
  nuevoServicio
);

router.put(
  "/:id",
  [check("id", "El id no es valido").isMongoId(), validacion],
  actServicios
);

router.delete(
  "/:id",
  [check("id", "El id es incorrecto").isMongoId(), validacion],
  borraServicios
);
// Se exporta la ruta utilizada
export {
  router as rutaservicio
};

