//MIDDLEWARE QUE VALIDA SI EL USUARIO ESTA LOGEADO Y ES ADMINISTRADOR
function adminMiddleware(req, res, next) {
    if(!req.session.userLogged){
        return res.redirect("/"); 
    }else{
        if(req.session.userLogged && !req.session.userLogged.is_admin){
            return res.redirect("/");
        }
    }
    next();
}

module.exports=adminMiddleware;