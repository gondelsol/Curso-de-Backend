const {    error } = require('console');
const fs = require('fs');
const id = 8;
const indeseado = 3;
const ruta = './bazar.json'
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

// obj = [1, 2, 3, 4, 5]



class Contenedor {
    constructor(ruta) {
        this.ruta=ruta
        console.log(ruta)

    }
    async leer () {

        try {

            const data1 = await fs.promises.readFile(ruta, 'utf-8');
//            console.log(data1);
            const listaJSON = JSON.parse(data1);
            console.log('La lista de productos es: ', listaJSON);
            return listaJSON;

        } catch (error) {
            console.log('Error al leer el archivo json');
            console.log(error);
            return error; 
        }

    }
    async save(product) {

        const listaProductos = await this.leer();
        let newId;

        if (listaProductos.length == 0) {
            newId = 1;
        } else {
            newId = listaProductos[listaProductos.length -1].id +1;
        }
        console.log("El nuevo id es: ", newId)

        const newProduct = { id: newId, ...product}
        listaProductos.push(newProduct);

        await fs.promises.writeFile(this.ruta, JSON.stringify(listaProductos, null, 2))

        await this.leer();

    }

    async actalizar (id, product) {
        try {
            const listaProductos = await this.leer();
            const indexProduct = listaProductos.findIndex((o) => o.id == id);
            if (indexProduct == -1 ) {
                console.log('Objeto no encontrado')
                return 'Busqueda erronea'
            } else {
                listaProductos[indexProduct] = {id, ...product}; //Acá está el problema
                listaProductos.push(listaProductos[indexProduct]); //Acá está el problema
                await fs.promises.writeFile(this.ruta, JSON.stringify(listaProductos, null, 2)); //Acá está el problema
            }
            return {id, ...listaProductos}
        } catch (error) {
            console.log('Error en actualización')
        }

    }

    async getById(id) {
        const productoEncontrado = obj.find(element => element == id)
        if (productoEncontrado) {
            console.log('Producto encontrado: ', productoEncontrado)
        } else {
            console.log('El producto buscado no se encontró...')
        }
    }
    async deletById(indeseado) {
        const productoIndeseado = obj.find(element => element == indeseado)
        if (productoIndeseado) {
            console.log('Producto Indeseado: ', productoIndeseado)
            obj.splice(indeseado, 1)
            console.log('Nuevo array', obj)

        } else {
            console.log('El producto que se desea eliminar no se encontró...')
        }
    }
    async deleteAll() {
        obj.splice(0, obj.length)
        console.log('Array vacío: ', obj)
    }
}



async function main () {

const usuario = new Contenedor(ruta);

usuario.leer();
usuario.save(product5);
usuario.actalizar(2, product2);
//usuario.getById(id);
//usuario.deletById(indeseado);
//usuario.deleteAll();

}

main();