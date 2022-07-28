const fs = require('fs');
const id = 8;
const indeseado = 3;
const ruta = './bazar.txt'

obj = [1,2,3,4,5]



class Contenedor {
    constructor() {
        fs.promises.readFile(ruta, 'utf-8')
        .then(contenidoArchivoTXT => {
            console.log(contenidoArchivoTXT)
        })
        .catch(err => {
            console.log('Error al leer el archivo .txt', err)
        })
        //console.log(name)
        //console.log(obj)

    }
    save(){console.log('Hello world')}
    getById(id){
        const productoEncontrado = obj.find(element=>element==id)
        if (productoEncontrado) {
            console.log('Producto encontrado: ', productoEncontrado)
        } else{
            console.log('El producto buscado no se encontró...')
        }
    }
    deletById(indeseado){
        const productoIndeseado = obj.find(element=>element==indeseado)
        if (productoIndeseado) {
            console.log('Producto Indeseado: ', productoIndeseado)
            obj.splice(indeseado, 1)
            console.log('Nuevo array', obj)

        } else{
            console.log('El producto que se desea eliminar no se encontró...')
        }
    }
    deleteAll(){
        obj.splice(0, obj.length)
        console.log('Array vacío: ', obj)
    }
}

const usuario = new Contenedor (ruta);
usuario.save();
//usuario.getById(id);
//usuario.deletById(indeseado);
usuario.deleteAll();