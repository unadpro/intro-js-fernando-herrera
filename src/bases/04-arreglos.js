//arreglos en JS

//const arreglo = new Array(); //no se recomienda hacerlo de esta manera. solo cuando quieras hacer un arreglo con posiciones fijas o definidas
const arreglo =[1,2,3,4];

// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

//no es recomendable utilizar el push, porque modifica el objeto principal o inicial.

//let arreglo2 = arreglo;

let arreglo2 =[...arreglo,5]

const arreglo3 = arreglo2.map(function(numero){
return numero;

});



//arreglo2.push(5);


console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);