const Products = require("../models/Products")
const productosController = {

    index: (req,res)=>{ /*productList*/
        let products=Products.findAll();
        res.render("./products/productsList", {products:products})
    },

    product: (req,res)=>{
        let products=Products.findByPk(id); /*revisar*/
        res.render("./products/producto", {products:products})
    },
    
    shoppingCart: (req,res)=>{
        res.render("./products/ShoppingCart")
    },

    productFormNew: (req,res)=>{
        res.render("./products/productFormNew")
    },

    productFormEdit: (req,res)=>{
        res.render("./products/productFormEdit")
    },
}

module.exports=productosController;