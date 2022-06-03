const express= require('express');
const {pregunt1, insrperson,obtpersona}= require('../controllers/index');
const validar=require('../middlewares/index');
const route=express.Router();
//Se definieron las rutas y los controladores 

//pregunta 1:
/* 
creación de la ruta "/prueba"
*/
route.get('/prueba',pregunt1);

//pregunta 2:
/* 
creación de las rutas con metodos GET y POST
*/
route.get('/ver',obtpersona);
route.post('/insert',validar,insrperson);
module.exports=route;