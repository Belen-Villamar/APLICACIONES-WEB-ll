//Conexion a MongoDb
//npm init -y
/**
 * se puede usar para configurar un paquete npm nuevo o existente. 
 * initializer en este caso es un paquete npm llamado create-<initializer> , 
 * que será instalado por npx , y luego se ejecutará su contenedor principal, 
 * presumiblemente creando o actualizando el paquete.
 */
//npm i mongoose
/**
 * Mongoose es una biblioteca de modelado de datos de objetos (ODM) para MongoDB y Node. js. 
 * Gestiona las relaciones entre los datos, proporciona validación de esquemas y se utiliza 
 * para traducir entre objetos en el código y la representación de esos objetos en MongoDB.
 */
//caso de uno a muchos
const mongoose = require('mongoose');
const conexion = "mongodb+srv://belen-villamar30:3011Villamar@cluster0.lubdg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
( async()=>{
const estadoConexion =await mongoose.connect(conexion);

/**relacion de uno a muchos no es necesario definir que un grupo tiene muchos usuarios y muchos usuarios
tienen un grupo*/
const Grupo=mongoose.model("Grupo",{nombre:String});

//para pedir permisos
//¿que pasaria si yo tengo permisos para el usuario?
const Permisos= mongoose.model("Permiso",{nombre:String});
const Usuario= mongoose.model("Usuario", 
//relacion de uno a muchos
{ 
    nombre: String,
    //definir el tipo
    idGrupo:{type:mongoose.Types.ObjectId,ref:"Grupo"},
    //relacion de muchos a muchos
    //permisos:[{type:mongoose.Types.ObjectId,ref:"Permisos"}], (forma opcional)
    /**
     * este es un modo de caso que se tengan mas atributos
     * caso contrario usar la linea de arriba
     */
        //definir un arreglo de objetos
    permisos:{
        permiso:{type:mongoose.Schema.Types.ObjectId, ref:"Permisos"},
        estado:{type:Boolean}
    }
}
);

const grupo1=new Grupo({nombre:"Administradores"});
//se necesita primero almacenar el grupo y crear una instancia
//asegurar que el grupo este en la base de datos
//para conocer el id que se genero en la base de datos
const grupoguardado=await grupo1.save();
const permiso1=new Permisos({nombre:"Grabar"});
const permisoguardado=await permiso1.save();
const permiso2=new Permisos({nombre:"Eliminar"});
const permisoguardado1=await permiso2.save();
//objeto insertado completo
const Usuario1= new Usuario(
    {
        nombre:"Prueba sexto A",
        //el objeto grupo mas todos los objetos adicionales guardados
        //el id del grupo en el usuario
        idgrupo:grupoguardado._id,
        //REVISAR VARIABLES
        permisos:[
            //arreglo de objetos cada objeto seria un permiso
            //cada objeto consta de dos atributos
            {permiso:permisoguardado._id,estado:true},
            {permiso:permisoguardado1._id,estado:true},

        ]
    }
    );
const guardado=await Usuario1.save();
//const resultado=Usuario.find();
const resultado=Usuario.find()
//estamos trayendos los permisos
.populate("idgrupo")
.populate("permisos.permisos");
console.log(resultado[1].permisos)
console.log(resultado)
})();

