//Desestructuracion de objetos...

const persona = { 
    nombre: 'Rafael',
    edad: 53,
    clave: 'yeah'
}

const {nombre} = persona; //asignacion del objeto persona, de una parte del mismo o de todas sus partes a una variable entre llaves

console.log(nombre); //

console.log(persona.nombre);

const obtenerPersona = (usuario) =>{
    const {nombre,edad} = usuario;
    console.log(nombre,edad);
}

obtenerPersona(persona);

const persona2 = {...persona}

persona2.nombre = 'Miguel';
persona2.edad = 62;

const obtenerPersona2 = ({nombre,edad,rango = 'Soldado'}) =>{  //desestructuracion en los parametros de la funcion
    
    console.log(nombre,edad,rango);
}

obtenerPersona2(persona2);


const usarContexto = ({clave,nombre,edad,rango = 'Soldado'}) =>{  //desestructuracion en los parametros de la funcion
    
    return {
        nombreClave : clave,
        anios: edad
    }
    //console.log(nombre,edad,rango);
}


const usarContexto2 = ({clave,nombre,edad,latlng}) =>{  
    
    return {
        nombreClave : clave,
        anios: edad,
        latlng:{
            lat: 14.523689,
            lng: -5.145230
        }
    }
    //console.log(nombre,edad,rango);
}

const {nombreClave,anios,latlng:{lat,lng}} = usarContexto2(persona2); //desestructuracion con objetos

console.log(nombreClave,anios,lat,lng);
