// Se requiere librerias de express y express-validator
import { validationResult } from "express-validator";
import { Response, Request, NextFunction} from "express"
// Se define la validación de los campos
const validacion = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json(errors);
    next();
  }
  next();
};
// Se exporta método
export {
  validacion,
};
