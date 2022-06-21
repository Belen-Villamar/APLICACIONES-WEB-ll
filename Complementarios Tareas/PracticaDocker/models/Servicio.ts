import mongoose from "mongoose";
import {Schema, model} from "mongoose";
import{IServicios} from '../interfaces'

const ServicioSchema: mongoose.Schema= new Schema({
        nombre_servicio: {
          type: String,
          required: [true, `El nombre del servicio es obligatorio`],
          unique: true,
        },
        precio: {
          type: Number,
          default: 0,
        },
      },
      {
        timestamps: true,
        versionKey: false,
})

 const Servicio:mongoose.Model<IServicios>= model<IServicios>('ServiciosAdi',ServicioSchema);
 export{
    Servicio
 }