let db = require("../database/models")
let Products=db.Product;

const productosController = {
	//METODO PARA LISTAR TODOS LOS PRODUCTOS DE LA BASE DE DATOS
    list: async function (req,res){
		try {
			let products= await Products.findAll(); //FUNCION QUE PERMITE BUSCAR TODOS LOS PRODUCTOS CON EL METODO DE SEQUELIZE
			return res.render("./products/productsList", {products:products, stylesheet: "/css/styles-index.css"})
		}catch (error){
			console.log(error);
			return res.send("404 error");
		}
    },
    //METODO PARA MOSTRAR EL CARRO DE PRODUCTOS SELECCIONADOS
    shoppingCart: async function (req,res){
		try {
			let products= await Products.findAll();
			return res.render("./products/ShoppingCart", {products:products})
		}catch (error){
			console.log(error);
			return res.send("404 error");
		}
    },
	//METODO PARA BUSCAR POR EL CAMPO "NOMBRE" DE LOS PRODUCTOS EN LA BD
	search: async function (req,res){
		try{
			let products= await Products.findAll(); 
			let searchResults = await products.filter(product=>product.name.includes(req.query.keywords));//UTILIZA EL METODO FILTER PARA GUARDAR EN LA VARIABLE
			return res.render("./products/searchResults", {searchResults, keywords:req.query.keywords})  //"searchResults" LOS PRODUCTOS QUE EN SU CAMPO NOMBRE
		}catch (error){																					//INCLUYAN LO QUE FUE ENVIADO EN LA QUERY
			console.log(error);
			return res.send("404 error");
		}		
	},
	//METODO QUE RENDERIZA LA VISTA DEL FORMULARIO DE CREACION DE PRODUCTOS
    create: (req,res)=>{
		return res.render("./products/productCreateForm");
    },
	//METODO QUE ALMACENA EN LA BD EL PRODUCTO CREADO EN EL FORMULARIO, LOS DATOS SE RECIBEN A TRAVES DEL REQ.BODY
    storage: async function (req,res){
		try{
			await Products.create(req.body);
			return res.redirect("./products/productsList");
		}catch (error){
			console.log(error);
			return res.send("404 error");
		}
    },
	//METODO QUE BUSCA UN PRODUCTO EN LA BD POR SU ID, EL CUAL SE RECIBE EN LA QUERY A TRAVES DE LA RUTA PARAMETRIZADA CON LA VARIBLE REQ.PARAMS.ID
    detail: async function (req, res){ 
		try{
			let productFound = await Products.findByPk(req.params.id);
			let products= await Products.findAll();
			return res.render("./products/producto", {productFound:productFound, products:products});
		}catch (error){
			console.log(error);
			return res.send("404 error");
		}	
	},
	//METODO QUE MUESTA EL FORMULARIO DE EDICION DE PRODUCTO, CON EL PRODUCTO CORRESPONDIENTE A LA QUERY, LA CUAL RE RECIBE POR REQ.PARAMS.ID
	edit: async function (req, res){
		try{
			let productToEdit=Products.findByPk(req.params.id);
			return res.render("./products/productEditForm", {productToEdit:productToEdit});
		}catch(error){
			console.log(error);
			return res.send("404 error");
		}
	},
	//METODO QUE ACTUALIZA LA INFORMACION DEL PRODUCTO EN LA BD
	update: async function(req, res){ 
		try{
			await Products.update(req.body,{ //SE RECIBEN LOS DATOS A ACTUALIZAR POR EL FORMULARIO A TRAVES DEL REQ.BODY
				where: {id: req.params.id}  //INDICAMOS EN QUE PRODUCTO SE VA A ACUALIZAR DICHA INFORMACION, SELECCIONANDOLO POR SU ID
			});							   //EL CUAL SE RECIBE POR UNA RUTA PARAMETRIZADA A TRAVES DEL REQ.PARAMS.ID
			return res.redirect("/");
		}catch(error){
			console.log(error);
			return res.send("404 error");
		}
	},
	//METODO QUE ELIMINA UN PRODUCTO DE LA BD
	destroy:async function (req,res){
		try{
			await Products.destroy({
				where:{
					id: req.params.id	//INDICAMOS EN QUE PRODUCTO SE VA A ELIMINAR SELECCIONANDOLO POR SU ID
				}					    //EL CUAL SE RECIBE POR UNA RUTA PARAMETRIZADA A TRAVES DEL REQ.PARAMS.ID
			});
			return res.redirect("/");
		}catch (error){
			console.log(error);
			return res.send("404 error");
		}
	}
}

module.exports=productosController;