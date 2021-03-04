const Products = require("../models/Products")
const mainController = {
    
    index: (req,res)=>{
        let products=Products.findAll();
        res.render("./products/index", {products:products, stylesheet: "/css/styles-index.css"})
    }
}

module.exports=mainController;