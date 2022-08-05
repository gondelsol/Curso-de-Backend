const { request, response } = require('express');
const express = require('express');
const app = express();
const { error } = require('console');
const fs = require('fs');
const ruta = './bazar.txt'

const PORT = 7254;

const product1 = {
    //id: 1,
    nombre: 'taza',
    precio: 3
};

const product2 = {
    //id: 2,
    nombre: 'jarra',
    precio: 40
};

const product3 = {
    //id: 3,
    nombre: 'botella',
    precio: 50
};

const product4 = {
    //id: 4,
    nombre: 'cuchillo',
    precio: 65
};

const product5 = {
    //id: 5,
    nombre: 'tenedor',
    precio: 895
};

const product6 = {
    //id: 6,
    nombre: 'taza',
    precio: 36
}



class Contenedor {

    constructor(ruta) {
        this.ruta = ruta
    }

    //El método ok funciona ok

    async leer() {

            try {
            const data1 = await fs.promises.readFile(ruta, 'utf-8');
            const listaJSON = JSON.parse(data1);
            console.log(listaJSON);
            return listaJSON;
        } catch (error) {

            console.log('Error al leer el archivo json');
            console.log(error);
            return 'La lista de productos es: ' + error;
        }


    }
    //El metodo save fuciona ok

    async save(product) {
        const listaProductos = await this.leer();
        let newId;
        if (listaProductos.length == 0) {
            newId = 1;
        } else {
            newId = listaProductos[listaProductos.length - 1].id + 1;
        }
        console.log('El nuevo id es: ', newId)
        const newProduct = { id: newId, ...product }
        listaProductos.push(newProduct);
        await fs.promises.writeFile(this.ruta, JSON.stringify(listaProductos, null, 2))
        await this.leer();
    }

    //El metodo actualizar funciona ok

    async actalizar(id, product) {

        console.log('Actualizar elementos', id, product)

        try {
            const listaProductos = await this.leer();
            const indexProduct = listaProductos.findIndex((o) => o.id == id);

            if (indexProduct == -1) {
                console.log('producto no encontrado')
                return 'Busqueda erronea'
            } else {
                listaProductos[indexProduct] = { id, ...product };
                await fs.promises.writeFile(this.ruta, JSON.stringify(listaProductos, null, 2));
            }
            console.log('lista actualizada')
            return { id, ...listaProductos }

        } catch (error) {
            console.log('Error en actualización')
        }
    }

    //El metodo getbyId funciona ok

    async getById(id) {

        console.log('buscar producto por id')

        try {
            const listaProductos = await this.leer();
            const indexProduct = listaProductos.findIndex((o) => o.id == id);

            if (indexProduct == -1) {
                console.log('producto no encontrado')
                return 'Busqueda erronea'
            } else {
                const busqueda = listaProductos[indexProduct];
                console.log('El producto buscado es', busqueda)
            }
            return 'La busqueda terminó';

        } catch (error) {
            console.log('Error en busqueda')
        }
    }

    async deletById(id) {

        console.log('eliminar archivo por id')

        try {
            const listaProductos = await this.leer();
            const indexIndeseado = await listaProductos.findIndex((element) => element.id == id)

            if (indexIndeseado == -1 ) {
                console.log('El producto indeseado que busca no está en la lista')
                return 'EL ELEMENTO QUE DESEA ELIMINAR NO SE ENCONTRÓ'
            } else {
                const newList = listaProductos.filter(item => item.id != id);
                await fs.promises.writeFile(this.ruta, JSON.stringify(newList, null, 2));
            }
        } catch (error) {
            return 'no se pudo eliminar nada'
        }
    }

    async deleteAll() {

        console.log ('Se ejecuta la función borrar todo')

        try {
            await fs.promises.writeFile(this.ruta, '[]') //guardo la nueva lista en el archivo
            await this.leer();
        } catch (error) {
            return 'no se pudo eliminar nada'
        }
    }
}

const server = app.listen(PORT, ()=>{
    console.log(`Servidor http escuchando en http://localhost:${PORT}/`)
});


async function main() {



    const usuario = new Contenedor(ruta);
    //await usuario.leer();
    //await usuario.save(product3);
    //await usuario.save(product1);
    //await usuario.save(product5);
    //await usuario.save(product3);
    //await usuario.leer();
    //await usuario.leer();
    //await usuario.actalizar(4, product4);
    //await console.log('producto buscado por id');
    //await usuario.getById(1);
    //await usuario.deletById(4);
    //await usuario.deleteAll();

    const products = await usuario.leer();
    console.log('Lectura final de productos')
    console.log(products)


    app.get('/', (request, response)=>{
        response.send('Desafio entregable 3');
    });
    
    app.get('/productos', (request, response)=>{
        response.send(products);
    });
    
    app.get('/productRandom', (request, response)=>{
        const random = Math.floor(Math.round(Math.random()*products.length));
        response.send(products[random]);
    });
    
    app.get('*', (request, response)=>{
        response.send('<h1>Problema al mostrar ruta</h1> 404 - Page not found');
    });
}

main();
