import mongoose from "mongoose";
export interface IServicios{
  nombre_servicio: String
  precio: Number
  timestamps: true
  versionkey: false 
}