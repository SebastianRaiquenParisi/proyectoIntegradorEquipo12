const db =require("../database/models")
let User = db.User;

//REVISAR MIDDLEWARE
function userLoggedMiddleware(req, res, next) {
    res.locals.userLogged= false;
    let emailCookie = req.cookies.userEmail;
    let userCookie = User.findOne({ 
        where: { 
            email: emailCookie
        }
    });
    
    if(userCookie){
        req.session.userLogged=userCookie;
    }

    if(req.session && req.session.userLogged){
        res.locals.userLogged= true;
        res.locals.userLogged = req.session.userLogged;
    }

    next();
}

module.exports=userLoggedMiddleware;