const { error } = require('console');
const fs = require('fs');
const id = 8;
const indeseado = 3;
const ruta = './bazar.txt'
const productList = [];
const product1 = {
    //id: 1,
    nombre: 'taza',
    precio: 3
};
const product2 = {
    //id: 2,
    nombre: 'jarra',
    precio: 32
};
const product3 = {
    //id: 3,
    nombre: 'botella',
    precio: 5
};
const product4 = {
    //id: 4,
    nombre: 'cuchillo',
    precio: 5
};
const product5 = {
    //id: 5,
    nombre: 'tenedor',
    precio: 5
};
const product6 = {
    //id: 6,
    nombre: 'taza',
    precio: 36
}

obj = [1, 2, 3, 4, 5]



class Contenedor {
    constructor(ruta) {
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
    save () {

        try {
         const data1 = await fs.promises.readFile(ruta, 'utf-8');
         console.log(data1);
 
         await fs.promises.writeFile(ruta, 'Se sobre escribe Alogo nuevo')
 
         const data2 = await fs.promises.readFile(ruta, 'utf-8');
         console.log(data2)
          
     } catch (error) {
         console.log(error)
     }


 console.log('La lista de productos es ... \n', productList)

}

    getById(id) {
        const productoEncontrado = obj.find(element => element == id)
        if (productoEncontrado) {
            console.log('Producto encontrado: ', productoEncontrado)
        } else {
            console.log('El producto buscado no se encontró...')
        }
    }
    deletById(indeseado) {
        const productoIndeseado = obj.find(element => element == indeseado)
        if (productoIndeseado) {
            console.log('Producto Indeseado: ', productoIndeseado)
            obj.splice(indeseado, 1)
            console.log('Nuevo array', obj)

        } else {
            console.log('El producto que se desea eliminar no se encontró...')
        }
    }
    deleteAll() {
        obj.splice(0, obj.length)
        console.log('Array vacío: ', obj)
    }
}



const usuario = new Contenedor(ruta);

//save();
//usuario.getById(id);
//usuario.deletById(indeseado);
//usuario.deleteAll();