//Desestructuracion de arreglos

const personajes = ['Goku','Vegeta','Trunks'];


console.log(personajes);

const [goku] = personajes;

console.log(goku);

const [p1,,p2] = personajes; //en los arreglos el espacio vacio indica que no se incluya el elemento en esa posicion

console.log(p1,p2);

const retornaArreglo = () =>{
    return ['ABC',123]
}


const [letras,num] = retornaArreglo();

console.log(letras,num);

const usarEstado = (valor) => {
        return [ valor, () => { console.log('Hola Mundo')} ];
}


const arr = usarEstado(825);

console.log(arr);


const [ nombre, setNombre] = usarEstado('Ramon');

console.log(nombre);
setNombre();

