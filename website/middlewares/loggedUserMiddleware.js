let db = require("../database/models")
let User=db.User;
//MIDDLEWARE (LLAMADO EN EL ENTRY POINT) QUE VALIDA SI HAY UN USUARIO EN LA COOKIE Y LO GUARDA EN SESION
async function userLoggedMiddleware(req, res, next) {
    res.locals.userLogged= false;
    if (req.cookies.userEmail){
        let emailCookie = req.cookies.userEmail;
        let userCookie = await User.findOne({ 
            where: { 
                    email: emailCookie
                }
            });
            if(userCookie){
                req.session.userLogged=userCookie;
            }
        }
    if(req.session.userLogged){
        res.locals.userLogged = req.session.userLogged;
    }
    next();
}

module.exports=userLoggedMiddleware;