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
const userRouter = require("./routes/userRoutes")
const productsRouter = require("./routes/productRoutes")
const apiProductsRouter = require("./routes/api/productRoutes")
const apiUsersRouter = require("./routes/api/userRoutes")

app.use("/", indexRouter);
app.use("/users", userRouter);
app.use("/products", productsRouter);
app.use("/api/products", apiProductsRouter);
app.use("/api/users", apiUsersRouter);

app.use("/products", function(req, res, next) { //Error 404, se muestra cuando no se encuentra un recurso que se solicita
    res.status(404).render("./products/error404");
})
 





