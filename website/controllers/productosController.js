const Products = require("../models/Products")
const productosController = {

    index: (req,res)=>{ /*productList*/
        let products=Products.findAll();
        return res.render("./products/productsList", {products:products, stylesheet: "/css/styles-index.css"})
    },
    
    shoppingCart: (req,res)=>{
		let products=Products.findAll();
        return res.render("./products/ShoppingCart", {products:products})
    },

    create: (req,res)=>{
		return res.render("./products/productCreateForm")
    },

    storage: (req,res)=>{
		let newProduct={
			...req.body,
			image: req.file.filename,
		}
		Products.create(newProduct);
        return res.redirect("/")
    },

    detail: (req, res) => { /*producto*/
		let productFound=Products.findByPk(req.params.id);
		let products=Products.findAll();
		return res.render("./products/producto", {productFound:productFound, products:products});
	},

	edit: (req, res) => {
		
		let productToEdit=Products.findByPk((req.params.id));

		return res.render("./products/productEditForm", {productToEdit:productToEdit});
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
	},

	destroy: (req,res)=>{
		Products.delete(req.params.id);
		return res.redirect("/");
	}
}

module.exports=productosController;