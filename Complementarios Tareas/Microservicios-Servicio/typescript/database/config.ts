//const mongoose = require("mongoose");
import mongoose  from "mongoose";
//Se establece la conexión de con la base de datos de Mongo
const Conexion = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN || 'mongodb+srv://ejmpl01:Mariajo1131@ejemplo01.30qzr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'); 
//Muestra que la base de datos está funcionando adecuadamente
    console.log(`Base de datos conectada...`);
  } catch (error) {
    console.log(`No se pudo conectar a base de datos`);
    throw new Error(`Error al conectarse a la base de datos`);
  }
};

//Se exporta la conexión
export {Conexion}