const express = require ("express");
const app = express ();
const path = require ("path");
const session= require ("express-session");
const publicPath = path.resolve(__dirname, "./public"); //para que pueda resolver siempre la ruta a public
const loggedUserMiddleware = require("./middlewares/loggedUserMiddleware");
const methodOverride =  require('method-override');
const cookies = require("cookie-parser");

app.use (express.static(publicPath)); //para poder usar los  recursos estaticos de la carpeta public
app.use(session({secret:"secret", resave: false, saveUninitialized:false }))
app.use(cookies());
app.use(loggedUserMiddleware);
app.use(methodOverride('_method'));

app.listen (3000, () =>
console.log ("Servidor corriendo en puerto 3000")
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const indexRouter = require("./routes/mainRoutes")
const productsRouter = require("./routes/productsRoutes")
const userRouter = require("./routes/userRoutes")

app.use("/", indexRouter);
app.use("/products", productsRouter);
app.use("/users", userRouter);






