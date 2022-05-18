const express = require('express');
const cors= require('cors');

//Se instala una aplicación EXPRESS
const app = express();

const ruta =  express.Router();
//El puerto que se va a utilizar en la conexión
const PUERTO=2500;
//Se define la persistencia 
let comidas = [];

//Para comprender y manejar archivos en formato Json 
//Use, permite agregar a la apllicación 
app.use(cors()).use(express.json());


//Se establece la ruta estática 



//RUTAS INDEPENDIENTES
//Rutas de obtener, insertar y eliminar
//Req llega al cliente(Solicitud)
ruta.get('/',(req,res)=>{
//Estado
res.status(200).send(comidas);
})
ruta.post('/',(req,res)=>{
const {body} = req;
if (comidas.filter(c=> c.codigo===body.codigo ).length>0 )
{
    return res.status(400).send({ 
        //Recomienda lo que va a devolver el body
        message:`El código ya existe`,
        response: body
    })
}
comidas.push(body);
res.status(201).send({
    //Recomienda lo que va a devolver el body
    message:`El dato se insertó correctamente`,
    response: body
})

})
ruta.put('/', (req,res)=>{
const {codigo, descripcion, tipo} =  req.body;
if ( comidas.filter(c=> c.codigo=== codigo).length==0 )
{
    return res.status(400).send({
        //Recomienda lo que va a devolver
        message:`No se encuentra la comida que desea modificar`
    })
}
let comida = comidas.filter(c=> c.codigo===codigo)[0];
comida.descripcion = descripcion;
comida.tipo= tipo;
res.status(200).send({
    //Recomienda lo que va a devolver 
    message:`Dato modificado con éxito`,
    response: comida
})
})
ruta.delete('/:codigo', (req,res)=>{
const {codigo} =  req.params;
comidas  =  comidas.filter(c=>c.codigo !== codigo);
res.status(200).send({
    //Recomienda lo que va a devolver 
    message:`Eliminado correctamente la comida`
})

})

ruta.get('/:codigo', (req,res)=>{
const {codigo} =  req.params;
comida  =  comidas.filter(c=>c.codigo === codigo);
//validaciones
if (comida.length>0)
{
    res.status(200).send({
        message:`Dato encontrado`,
        response:comida[0]
    })
}
else
{
    res.status(400).send({
        message:`Comida con ese código no existe`
    })
}

})

app.use('/comida', ruta);
//Se estructura el listen

app.listen(PUERTO, ()=>{
console.log(`Servidor ejecutándose en puerto ${PUERTO}`)
})