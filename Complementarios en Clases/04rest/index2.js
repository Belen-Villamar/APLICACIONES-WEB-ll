const express = require('express');
const cors= require('cors');

//Se instala una aplicación EXPRESS
const app = express();
//El puerto que se va a utilizar en la conexión
const PUERTO=2500;

//Para comprender y manejar archivos en formato Json 
//Use, permite agregar a la apllicación 
app.use(cors()).use(express.json());


//Se establece la ruta estática 
//Req, es de solicitud 
//Res, lo que se devuelve
//next, siguiente proceso/callback 
app.get('/prueba', (req,res,next)=>{
    next();
}, (req,res, next)=>{
    //Se usa estado de la respuesta y el otro el tiempo
    //Devolvemos error 200, devuelve la información
    //Se ingresa en el navegador a http://localhost:2500/Prueba para comprobar si esta correcto 
    res.status(200).send({ mensaje:"Hola prueba" });
})


app.use('/prueba',(req,res,next)=>{
    req.body.nombre = req.body.nombre.toUpperCase();
    next();
})

app.post('/prueba',(req,res,next)=>{
    res.status(201).send(req,body);
})

app.use('/prueba', (req,res,next)=>{
    console.log(`Después de Middleware`);
   // res.status(201).send(req,body);
})








//Se muestra que el puerto esta haciendo su trabajo en relación con el servidor 
app.listen(PUERTO, ()=>{
    console.log(`Servidor ejecutándose en puerto ${PUERTO}`)
})