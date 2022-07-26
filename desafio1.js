let pets = ['Lula', 'Gati', 'Minina'];
let nuevaMascota = 'Mr. Gatito';


let nombresLibros = [];
const nuevoLibro = {
    nombreLibro: 'Martín Fierro',
    autorLibro: 'José Hernandez',
    anioLibro: 1872
}

let books = [{
    nombreLibro: 'Count Dracula',
    autorLibro: 'Bram Stoker',
    anioLibro: 1897
}, {
    nombreLibro: 'Romeo and Juliet',
    autorLibro: 'William Shakespeare',
    anioLibro: 1597
}, {
    nombreLibro: 'A tale of two cities',
    autorLibro: 'Charles Dickens',
    anioLibro: 1859
}, {
    nombreLibro: 'The Last of the Mohicans',
    autorLibro: 'James Fenimore Cooper',
    anioLibro: 1826
}];

class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }
}

const usuario1 = new Usuario ('Joaquin', 'Gonzalez del Solar', books, pets);


getFullName = () => {
    console.log('Nombre de usuario: ', usuario1.nombre)
}

countMascotas = () => {
    console.log('cantidad de mascotas:  ', usuario1.mascotas.length)
}

getBookNames = () => {
    let i;
    for (i=0 ; i <usuario1.libros.length; i++) {
        //console.log(`Autor N ${i}: `, usuario1.libros[i].autorLibro)
        nombresLibros.push(usuario1.libros[i].autorLibro)
    }
    console.log('Libros del usuario', nombresLibros);
}

addMascotas = (animal) => {
    usuario1.mascotas.push(animal)
    console.log('Mascotas (incluye mascota nueva)', usuario1.mascotas)
}

addBook = (newBook) => {
    console.log('El nuevo libro de la biblioteca es: ', newBook)
    usuario1.libros.push(newBook);
}

getFullName();
countMascotas();
addBook(nuevoLibro);
getBookNames();
addMascotas(nuevaMascota);

