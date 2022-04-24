//Recorrer el arreglo definido en la opcion anterior y mostrarlo aplicando 4 estructuras de repeticion
const Comidas=[
    {
        nombre:"Lasaña",
        tipo: "Plato fuerte",
        ingredientes: "Carne, Fideo,Pasta de tomate,Crema de leche,Vino tinto,Cebolla blanca,Sal,Pimienta,Oregano",
    },
    
    {
    nombre:"Encebollado",
        tipo: "Plato fuerte",
        ingredientes: "Pescado, Cebolla, Yuca, Pimienta, Limon"
    }
    ]
    
function estruc1(datos) { 
console.log("Usando forEach");
datos.forEach(comida => {
    console.log("nombre: %s, tipo: %s, ingredientes: %s", comida.nombre,comida.tipo,comida.ingredientes);
}
);
}
estruc1(Comidas);

let x =Comidas.length;

function estruc2(info,valor) { 
console.log("Usando for");
for (i = 0; i < valor; i++){
    console.log(info[i])
}
}
estruc2(Comidas, x);

function estruc3(info, valor){
    console.log("Usando while");
    let i = 0;
    while (i < valor) {
        console.log(info[i])
        i++;
    }
    }
    estruc3(Comidas, x);


function estruc4(info, valor){
    console.log("Usando do while");
    let i = 0;
    do { 
        console.log(info[i])
        i++;
    } while (i < valor);
    }
    estruc4(Comidas, x);
