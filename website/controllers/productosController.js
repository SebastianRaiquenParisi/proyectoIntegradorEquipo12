const productosController = {

    index: (req,res)=>{
        res.render("./products/listadoProductos")
    },

    product: (req,res)=>{
        res.render("./products/producto")
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