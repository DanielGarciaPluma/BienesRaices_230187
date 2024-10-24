//Ejemplo de activacion de HOT RELOAD
//console.log("Hola desde NodeJS esto esta en hot reload")

//const express = require('express');

//Importar la libreria para crear un servidor web
//Instanciar nuestra aplicacion web
import express from "express";

import generalRoutes from "./routes/generalRoutes.js"
import userRoutes from "./routes/userRoutes.js"

const app = express()

const port = 3000
app.listen(port,()=>{
    console.log(`La aplicacion se ha iniciado en el puerto ${port}`)
})

//Routing - Enroutamiento para peticiones
app.use('/', generalRoutes);
app.use('/usuario/', userRoutes);
