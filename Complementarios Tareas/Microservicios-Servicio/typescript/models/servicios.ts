import mongoose from "mongoose";
const { Schema, model } = mongoose;
import {IServicios } from "../interfaces/IServicios"

const ServiciosSchema: mongoose.Schema = new Schema <IServicios>(
    {
      nombre_servicio: {
        type: String,
        unique: true,
      },
      precio: {
        type: Number,
      },
    },
    {
      timestamps: true,
      versionKey: false,
    }
  );

const ServiciosAdi = model <IServicios> ("Servicios", ServiciosSchema);
export {ServiciosAdi}

