//Ejemplo de activacion de HOT RELOAD
//console.log("Hola desde NodeJS esto esta en hot reload")

//const express = require('express');

//Importar la libreria para crear un servidor web
//Instanciar nuestra aplicacion web
import express from "express";

import generalRoutes from "./routes/generalRoutes.js"
import userRoutes from "./routes/userRoutes.js"

const app = express()

//Configurar Templeate Engine - PUG
app.set('view engine', 'pug')
app.set('views', './views')

//Definir la carpeta publica de recursos estaticos (assets)
app.use(express.static('./public'));

//Configuramos nuetsro servidor web
const port = 3000
app.listen(port,()=>{
    console.log(`La aplicacion se ha iniciado en el puerto ${port}`)
})

//Routing - Enroutamiento para peticiones
app.use('/', generalRoutes);
app.use('/usuario/', userRoutes);
