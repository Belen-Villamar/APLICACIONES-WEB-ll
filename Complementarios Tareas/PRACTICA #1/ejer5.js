/** Crear una funcion flecha que reciba un arreglo de comidas 
* y lo devuelva en mayusculas y mejoras en su formato de presentacion */
Array.prototype.toUpperCase = function(){
    return this.map(word => word.toUpperCase())
};
const Comidas = ['lasaña', 'encebollado'].toUpperCase();
for (const comida of Comidas) {
console.log(comida);
}