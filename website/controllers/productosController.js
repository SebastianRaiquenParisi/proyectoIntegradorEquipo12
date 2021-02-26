const Products = require("../models/Products")
const productosController = {

    index: (req,res)=>{ /*productList*/
        let products=Products.findAll();
        res.render("./products/productsList", {products:products})
    },

    /* product: (req,res)=>{
        res.render("./products/producto")
    }, */
    
    shoppingCart: (req,res)=>{
        res.render("./products/ShoppingCart")
    },

    productFormNew: (req,res)=>{
        res.render("./products/productFormNew")
    },

   /*  productFormEdit: (req,res)=>{
        res.render("./products/productFormEdit")
    }, */

    detail: (req, res) => {
		let productFound=Products.findByPk(req.params.id);
		res.render("./products/producto", {productFound:productFound})
	},

	edit: (req, res) => {
		
		let productToEdit=Products.findByPk((req.params.id));

		res.render("./products/productFormEdit", {productToEdit:productToEdit})
	},

	update: (req, res) => { 
        let products = Products.findAll();
		
		let productToEdit=Products.findByPk((req.params.id));

 		let newArray = products.map(product=>{

			 if(product.id==productToEdit.id){
				product.name =req.body.name;
				product.price =req.body.price;
				product.discount =req.body.discount;
				product.category =req.body.category;
				product.description =req.body.description;
			 }
			 return product;
		 })

		Products.write(newArray);
        
		return res.redirect("/");
	}
}

module.exports=productosController;