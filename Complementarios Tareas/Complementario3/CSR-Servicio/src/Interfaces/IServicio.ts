export interface IResServicio {
    total: number;
    servicios: Servicio[];
}
export interface Servicio {
    _id?:string,
    nombre:string,
    precio:number,
}
