import {Request,Response,NextFunction} from 'express'
import {validationResult ,check} from 'express-validator'


const validarCampo=(req:Request ,res:Response,next:NextFunction)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors)
    }
    next()
}
const validacionNombre = [


    check('nombre_servicio')
        .not()
        .notEmpty().withMessage('El nombre del servicio no puede estar vacía'),
        
        
    (req:Request ,res:Response,next:NextFunction) => {

        validarCampo(req, res, next)

    }

]
const validarprecio = [


    check('precio')
        .not()
        .notEmpty().withMessage('La precio no puede estar vacía'),
        
        
    (req:Request ,res:Response,next:NextFunction) => {

        validarCampo(req, res, next)

    }

]

export{validarCampo,
    validacionNombre,
    validarprecio}