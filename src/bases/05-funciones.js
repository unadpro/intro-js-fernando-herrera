//funciones

function saludar(nombre) {
    return `Hola ${nombre}`;
}

const saludar2 = function (nombre) { //recomendado hacerlo de esta forma
    return `Hola ${nombre}`;
}

const saludar3 = (nombre) => { //funcion de flecha...
    return `Hola ${nombre}`;
}

const saludar4 = (nombre) => `Hola ${nombre}`; //funcion mas limpia

//saludar2 = 50;

console.log(saludar2('Ramon'));

console.log(saludar('Peter'));

console.log(saludar3('Reylin'));

console.log(saludar4('Miriam'));

//devuelve un objeto con return
const getUser = () =>{
    return {
        uid: 'ABC123',
        username: 'Pepito24'
    }
}

//devuelve un objeto implicito, sin usar return
const getUser2 = () =>(
     {
        uid: 'ABC123',
        username: 'Pepito24'
    }
)

console.log(getUser());

console.log(getUser2());

//Tarea 
// 1. Convertir a funcion flecha
// 2. Transformarlo a un objeto implicito

function getUsuarioActivo(nombre){
    return{
        uid: 'ABC123',
        username: nombre

    }
}

const usActivo = getUsuarioActivo('Ramon');
console.log(usActivo);


const getUsuarioActivo2 = (nombre) =>(
    {
        uid: 'ABC123',
        username: nombre

    }
)

const usActivo2 = getUsuarioActivo2('Ramon con objeto implicito');
console.log(usActivo2);


