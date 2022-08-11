let pets = ['Lula', 'Gati', 'Minina'];
let nuevaMascota = 'Mr. Gatito';


let biblioteca = [];

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

const nuevoLibro = {
    nombreLibro: 'Martín Fierro',
    autorLibro: 'José Hernandez',
    anioLibro: 1872
}


class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }
    mostrarUsuario(user) {
        console.log(user)
    }
    getFullName(user) {
        console.log('Nombre de usuario: ', user.nombre)
    }
    countMascotas(user) {
        console.log('cantidad de mascotas:  ', user.mascotas.length)
    }
    getBookNames(user) {
        let i;
        for (i = 0; i < user.libros.length; i++) {
            //console.log(`Autor N ${i}: `, user.libros[i].autorLibro)
            biblioteca.push(user.libros[i].autorLibro)
        }
        console.log('Libros del usuario', biblioteca);
    }
    addMascotas(newPet, user) {
        user.mascotas.push(newPet)
        console.log('Mascotas (incluye mascota nueva)', user.mascotas)
    }
    addBook(newBook, user) {
        console.log('El nuevo libro de la biblioteca es: ', newBook)
        user.libros.push(newBook);
        const nuevaLista = user.libros.length;
        console.log (this.libros.map((el=>el.autorLibro)));
        console.log('la nueva cantidad de libros es: ', nuevaLista);
    }

}

const usuario1 = new Usuario('Joaquin', 'Gonzalez del Solar', books, pets);

usuario1.mostrarUsuario(usuario1);
usuario1.getFullName(usuario1);
usuario1.countMascotas(usuario1);
usuario1.getBookNames(usuario1);
usuario1.addMascotas(nuevaMascota, usuario1);
usuario1.addBook(nuevoLibro, usuario1);