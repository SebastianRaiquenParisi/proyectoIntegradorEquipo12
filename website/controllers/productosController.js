const Products = require("../models/Products");
const { search } = require("../routes/productsRoutes");
const productosController = {

    index: (req,res)=>{ /*productList*/
        let products=Products.findAll();
        return res.render("./products/productsList", {products:products, stylesheet: "/css/styles-index.css"})
    },
    
    shoppingCart: (req,res)=>{
        return res.render("./products/ShoppingCart")
    },

	search: (req, res) => {
		
		let products=Products.findAll();
		
		let searchResults =products.filter(product=>product.name.includes(req.query.keywords));
		
		return res.render("./products/searchResults", {searchResults, keywords:req.query.keywords})
	},

    create: (req,res)=>{
		return res.render("./products/productCreateForm")
    },

    storage: (req,res)=>{
		let newProduct={
			...req.body,
			image:  req.files.filename
		}
		console.log(req.files);
		
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