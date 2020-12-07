//template strings

const nombre = 'Victor';
const apellido = 'Campusano';
//const nombreCompleto = nombre + '-' + apellido;

const nombreTS = `Hola mi nombre es ${nombre} ${apellido} `;
console.log(nombreTS);

function getSaludo(nombre) {
    return 'Hola soy ' + nombre;
}

console.log(`Probando... ${getSaludo(nombre)}`);