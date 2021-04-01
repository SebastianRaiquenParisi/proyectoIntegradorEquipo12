//MIDDLEWARE QUE VALIDA SI EL USUARIO NO ESTA LOGEADO
function invitedMiddleware(req, res, next) {
    if(!req.session.userLogged){
        return res.redirect("/users/login"); //SI EL USUARIO NO ESTA LOGEADO, LO REDIRIGE A LA PAGINA LOGIN
    }
    next();
}

module.exports=invitedMiddleware;