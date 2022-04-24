//Crear una funcion que reciba N como parametro y genere la tabla de multiplicar por consola de este parametro
function TABLA(number){
   let multiplicar=0
   for(let b=0; b< number; b=b+1){
   for (let num=0; num<=10; num=num+1){
   multiplicar=b* num;
   console.log( b+ "* " + num+ "=" + multiplicar);
}
 }
  }
TABLA(5);
