/////// Examen Primer Parcial ///////
/*
    Nombre: Belén Villamar
    Curso: Sexto "A" 
 */

//librerias
const express = require('express');


//variable express
const prueba = express();

prueba.use(express.json());

const evaluacion = async(req,res)=>{
    const {num}=req.body;
    if(num==="v1"){
        return res.status(400).send({message:'Ruta1'})
    }
    if(num==="v2"){
        return res.status(400).send({message:'Ruta2'})
    }
    
    }
prueba.get(
    '/prueba',evaluacion)
//el puerto es
prueba.listen(3001,()=>console.log('Funcionando'))
