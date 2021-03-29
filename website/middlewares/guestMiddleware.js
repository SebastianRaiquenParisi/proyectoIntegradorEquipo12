//MIDDLEWARE QUE VALIDA SI EL USUARIO ESTA LOGEADO
function guestMiddleware(req, res, next) {
    if(req.session.userLogged){
        return res.redirect("/users/profile"); //SI EL USUARIO ESTA LOGEADO, LO REDIRIGE A SU PERFIL
    }
    next();
}

module.exports=guestMiddleware;