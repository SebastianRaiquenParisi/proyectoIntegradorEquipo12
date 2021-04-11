const db = require("../database/models");
let Products=db.Product;

const mainController = {
    
    index: async function(req,res){
        try{
            let products=await Products.findAll({include:["images", "category","condition"]});
            return res.render("./products/index", {products, stylesheet: "/css/styles-index.css"})

        }catch(error){
            console.log(error);
			return res.render("./products/error404");
        }
    }
}

module.exports=mainController;