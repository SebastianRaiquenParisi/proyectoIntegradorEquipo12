const { findByEmail } = require("../models/Users");
const Users = require("../models/Users");
const User = require("../models/Users");


function userLoggedMiddleware(req, res, next) {
    res.locals.userLogged= false;
    let emailCookie = req.cookies.userEmail;
    let userCookie = User.findByEmail(emailCookie);
    
    if(userCookie){
        req.session.userLogged=userCookie;
    }

    if(req.session && req.session.userLogged){
        res.locals.userLogged= true;
    }


    next();
}

module.exports=userLoggedMiddleware;