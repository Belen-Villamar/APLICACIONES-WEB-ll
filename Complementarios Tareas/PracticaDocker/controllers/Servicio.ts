import{Servicio} from '../models'
import {IServicios} from '../interfaces'
import{Request,Response}from 'express'


export{
  Crear_servicios,
}

const Crear_servicios=async(req:Request,res:Response)=>{
  const servicio1=req.body as IServicios 
  const servicio2=new Servicio(servicio1)

  if(!servicio2){
      return res.status(400).json({
          message:`No se puede guardar servicio`
      });
  }
  res.status(201).json("Se guardó el servicio");//Enviamos un mensaje para la consola
}