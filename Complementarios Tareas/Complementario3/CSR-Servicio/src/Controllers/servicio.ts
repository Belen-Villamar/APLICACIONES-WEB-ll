import { IResServicio, Servicio } from "../interfaces/IServicio"; 
import { errorAxios, _http } from "../services/serviciosService";

const registrar = async (nombre:any,precio:any)=>{
    const data: Servicio = {
        nombre:nombre.value,
        precio:precio.value,
    }
    try{
        const respServicio: Servicio|any = await _http.post<Servicio>(
        `/registrar`,
        data)
        const servicio = await respServicio.data
        console.log(`El servicio ${servicio.nombre} fue registrado correctamente`);
    }catch(error: Error|any){
        errorAxios(error)
    }
} 
const editar = async (id:any,nombre:any, precio:any)=>{
    const data: Servicio | any = {
        id:id.value,
        nombre:nombre.value,
        precio:precio.value,
    }
    try{
        const respServicio: Servicio|any = await _http.put<Servicio>(
        `/editar/${id.value}`,
        data
        )
        const servicio = await respServicio.data
        console.log(`El servicio ${servicio.nombre} fue editado correctamente`);
    }catch(error: Error|any){
        errorAxios(error)
    }
} 

const limpiar = (id:any,nombre:any,precio:any)=>{
    id.value = ""
    nombre.value = ""
    precio.value = ""
}

export{
    registrar,
    editar,
    limpiar
}