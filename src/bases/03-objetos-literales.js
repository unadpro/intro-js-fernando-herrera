const persona = {
    nombre : 'Victor',
    apellido: 'Campusano',
    edad: 45,
    direccion : {
        ciudad: 'NY',
        zipcode: 5487,
        lat: 14.325689,
        lon: -6.254698
    }
}

console.log({person:persona});
//console.table(persona);

const persona2 = persona; //no hacerlo nunca
persona2.nombre = 'Raymond';

const persona3 = {...persona}
console.log(persona3);
