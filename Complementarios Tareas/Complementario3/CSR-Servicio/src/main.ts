import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Servicios Adicionales</h1>
`
const etiqueta = document.createElement("label");
etiqueta.textContent = "Id Servicios Adicionales"
const input = document.createElement("input");
input.id = "id"

etiqueta.htmlFor="id"
input.style.marginLeft = "1%"

app.appendChild(etiqueta);
app.appendChild(input);

app.innerHTML += `
<br><br><label for="nombre">Nombre</label><input id="nombres" style='margin-left:8%'></input><br><br>
  <label for="idPropietario">idPropietario</label><input id="idPropietario"style='margin-left:6%'></input><br><br>
  <label for="precio">Direccion</label><input id="precio"style='margin-left:8%'></input><br><br><br>

  <button id="registrar">Registrar Residencia</button>
  <button id="editar">Editar Residencia</button>
  <button id="consultar">Consultar Residencia</button>
  <button id="eliminar">Eliminar Residencia</button>
  <button id="limpiar">Limpiar Campos</button>
`
//Configuration buttons
const grabar = document.querySelector<HTMLButtonElement>('#registrar');
const edit = document.querySelector<HTMLButtonElement>('#editar');
const consult = document.querySelector<HTMLButtonElement>('#consultar');
const borrar = document.querySelector<HTMLButtonElement>('#eliminar');
const clean = document.querySelector<HTMLButtonElement>('#limpiar');

//Configuration fields
const id = document.querySelector<HTMLInputElement>('#id');
const nombre = document.querySelector<HTMLInputElement>('#nombre');
const precio = document.querySelector<HTMLInputElement>('#precio');

//Asignación de métodos
