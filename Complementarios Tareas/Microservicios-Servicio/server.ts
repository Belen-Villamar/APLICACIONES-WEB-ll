// Se importa las librerías  y modulos a utilizar
import express from "express";
import cors from "cors";
import { Conexion } from "./typescript/database/config";
import {rutaservicio} from "./typescript/routes/servicio"
// Se asigna un clase para el servidor

class Server {
  app: express.Router; router: express.Router;
  port: Number; paths:{ [key: string]: string };
  private _express: express.Express; 
  // Se define método
  constructor() {
    this.app = express.Router();
    this.router = express.Router();
    //puerto utilizado que se encuentra en el archivo .env
    this.port = Number(3000) ;
    //ruta usada
    this.paths = {
      servicios: "/proyecto/servicios",
    };
    this.conectarBD();
    this.middlewares();
    this.routes();
    
    //localhost:3000/v1/prueba/proyecto/servicios

    this.router.use("/v1/prueba", this.app);
    this._express = express().use(this.router);
  }
  //esperando la conexion con la base de datos
  private async conectarBD() {
    await Conexion();
  }
  private middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }
  private routes() {
   
    this.app.use(this.paths.servicios, rutaservicio);
   }

  listen() {
    this._express.listen(this.port, () => {
      console.log(`Servidor corriendo en puerto ${this.port}/v1/prueba/proyecto/servicios`);
    });
  }
}
// Se exporta e servidor
export{
  Server 
} 

