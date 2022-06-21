import {Router} from 'express'
import{check}from 'express-validator'
import{Servicio} from '../controllers'
const {Crear_servicios}=Servicio
import{validarCampo,validacionNombre,validarprecio}  from '../middlewares'
class ClienteRoutes{
    router: Router;
    constructor(){
        this.router=Router();
        this.routes();
    }
    routes(){
        this.router.post('/',validarprecio,Crear_servicios);
    }

}
const clienteRoutes=new ClienteRoutes();

clienteRoutes.routes();
export default clienteRoutes.router;