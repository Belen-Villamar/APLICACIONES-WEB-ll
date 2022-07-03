// Se importa las librerías
import { Response, Request} from "express"
import { ServiciosAdi } from "../models/servicios";
import {IServicios } from "../interfaces/IServicios"

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Funciona con Postman
const MostrarServicios = async (req: Request, res : Response) => {
  const { limite = 5, desde = 0 } = req.query;
  const query = { estado: true };
  const [total, servicios] = await Promise.all([
    ServiciosAdi.countDocuments(query),
    ServiciosAdi.find(query),
  ]);
  res.json({
    total,
    servicios,
  });
};

const obtenerServicio = async (req: Request, res : Response) => {
  const { id } = req.params;
  const servicio = await ServiciosAdi.findById(id);
  res.json(servicio);
};

const nuevoServicio = async (req: Request, res : Response) => {
  const { estado, ...body } = req.body;

  const serActual = await ServiciosAdi.findOne({
    nombre_servicio: body.nombre_servicio,
  });
  if (serActual) {
    res.status(400).json({
      message: `El servicio con ese nombre ya existe ${serActual.nombre_servicio}`,
    });
  }
  const serid = new ServiciosAdi(body);
  const serNuevo = await serid.save();
  res.status(201).json(serNuevo);
};

const actServicios = async (req: Request, res : Response) => {
  const { id } = req.params;
  const { estado, ...data } = req.body;
  const serModificado = await ServiciosAdi.findByIdAndUpdate(id, data, {
    new: true,
  });
  res.json(serModificado);
};

const borraServicios = async (req: Request, res : Response) => {
  const { id } = req.params;
  const serBorrado = await ServiciosAdi.findByIdAndUpdate(
    id,
    { estado: false },
    { new: true }
  );
  res.json(serBorrado);
};

export {

  //postman
  MostrarServicios,
  obtenerServicio,
  nuevoServicio,
  actServicios,
  borraServicios,
};