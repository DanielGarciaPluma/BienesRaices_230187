//Ejemplo de activacion de HOT RELOAD
//console.log("Hola desde NodeJS esto esta en hot reload")

//const express = require('express');

//Importar la libreria para crear un servidor web
//Instanciar nuestra aplicacion web
import express from "express";
const app = express()

const port = 3000
app.listen(port,()=>{
    console.log(`La aplicacion se ha iniciado en el puerto ${port}`)
})

//Routing - Enrutamiento para peticiones
app.get("/",function(req,res){
    res.send("Hola desde la Web , en NodeJS")
})

app.get("/quienEres",function(req,res){
    res.json(
        {
            "nombre": "Carlos Daniel Garcia Pluma",
            "carrera": "TiDSM",
            "grado": "4",
            "grupo": "A"
        })
})