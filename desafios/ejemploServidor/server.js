const { request, response } = require('express');
const express = require('express');

const app = express();

app.get('/', (request, response)=>{
    response.send('Servidor iniciado con express!');
});

app.get('/coder', (request, response)=>{
    response.send('Hola coders!');
});

app.get('*', (request, response)=>{
    response.send('404 - Page not found');
});

const server = app.listen(3000, ()=>{
    console.log(`Servidor http escuchando en http://localhost:3000/`)
});
