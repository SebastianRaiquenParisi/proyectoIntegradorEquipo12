const Products = require("../models/Products")
const mainController = {
    
    index: (req,res)=>{
        let products=Products.findByField("novedad","Si");
        res.render("./products/index", {products:products})
    }
}

module.exports=mainController;