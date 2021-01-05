//const {static} = require("express");
const express = require ("express");
const app = express ();
const path = require ("path"); //resuelve rutas
const publicPath = path.resolve(__dirname, "./public"); //para que pueda resolver siempre la ruta a public

app.use (express.static(publicPath)); //para poder usar los  recursos estaticos de la carpeta public

app.listen (3000, () =>
console.log ("Servidor corriendo")
);


/*app.get ("/", (req, res) => {
    res.send ("Servidor corriendo con Express en el puerto 3000");
});*/

//enviando archivos con SendFile

app.get ("/", (req, res) => {
   res.sendFile (path.resolve(__dirname, "./views/index.html")); //resolvemos la ruta para enviar home.html como primer archivo
});

app.get ("/listadoProductos", (req, res) => {
    res.sendFile (path.resolve(__dirname, "./views/listadoProductos.html")); 
});

app.get ("/ShoppingCart", (req, res) => {
    res.sendFile (path.resolve(__dirname, "./views/ShoppingCart.html")); 
});

app.get ("/login", (req, res) => {
    res.sendFile (path.resolve(__dirname, "./views/login.html")); 
});

app.get ("/producto", (req, res) => {
    res.sendFile (path.resolve(__dirname, "./views/producto.html")); 
});

app.get ("/register", (req, res) => {
    res.sendFile (path.resolve(__dirname, "./views/register.html")); 
});