//Objetos


const persona = {
    nombre: 'Juan',
    profesion: 'Desarrollador web',
    edad: {
        anios: 30,
        meses: 5
    }
}


const {nombre} = persona;
const {edad: {anios}} = persona;

console.log(nombre);