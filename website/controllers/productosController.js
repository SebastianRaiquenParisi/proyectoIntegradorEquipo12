const productosController = {

    index: (req,res)=>{
        res.render("./products/listadoProductos")
    },

    product: (req,res)=>{
        res.render("./products/producto")
    },
    
    shoppingCart: (req,res)=>{
        res.render("./products/ShoppingCart")
    }
}

module.exports=productosController;