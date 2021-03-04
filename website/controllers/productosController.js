const Products = require("../models/Products")
const productosController = {

    index: (req,res)=>{ /*productList*/
        let products=Products.findAll();
        return res.render("./products/productsList", {products:products})
    },
    
    shoppingCart: (req,res)=>{
        return res.render("./products/ShoppingCart")
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

    detail: (req, res) => {
		let productFound=Products.findByPk(req.params.id);
		return res.render("./products/producto", {productFound:productFound});
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
	}
}

module.exports=productosController;