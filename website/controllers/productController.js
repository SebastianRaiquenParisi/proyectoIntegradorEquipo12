let db = require("../database/models")
let Products=db.Product;
let Sizes=db.Size;
let Images=db.Image;

//METODO PARA CAPITALIZAR LA PRIMERA LETRA DE UN STRING
function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
  }

const productosController = {

	//METODO PARA LISTAR TODOS LOS PRODUCTOS DE LA BASE DE DATOS
    list: async function (req,res){
		try {
			let products= await Products.findAll({include:"images"}); //FUNCION QUE PERMITE BUSCAR TODOS LOS PRODUCTOS CON EL METODO DE SEQUELIZE
			return res.render("./products/list", {products:products, stylesheet: "/css/styles-index.css"})
		}catch (error){
			console.log(error);
			return res.send("404 error");
		}
    },

    //METODO PARA MOSTRAR EL CARRO DE PRODUCTOS SELECCIONADOS
    shoppingCart: async function (req,res){
		try {
			let products= await Products.findAll();
			return res.render("./products/cart", {products:products})
		}catch (error){
			console.log(error);
			return res.send("404 error");
		}
    },

	//METODO PARA BUSCAR POR EL CAMPO "NOMBRE" DE LOS PRODUCTOS EN LA BD
	search: async function (req,res){
		try{
			let products= await Products.findAll({include:"images"}); 
			let searchResults = products.filter(product=>product.name.toLowerCase().includes(req.query.keywords.toLowerCase()));
			return res.render("./products/search", {searchResults, keywords:req.query.keywords})  //UTILIZA EL METODO FILTER PARA GUARDAR EN LA VARIABLE
		}catch (error){																					//"searchResults" LOS PRODUCTOS QUE EN SU CAMPO NOMBRE
			console.log(error);																			//INCLUYAN LO QUE FUE ENVIADO EN LA QUERY
			return res.send("404 error");
		}		
	},

	//METODO QUE RENDERIZA LA VISTA DEL FORMULARIO DE CREACION DE PRODUCTOS
    create: (req,res)=>{
		return res.render("./products/create");
    },

	//METODO QUE ALMACENA EN LA BD EL PRODUCTO CREADO EN EL FORMULARIO, LOS DATOS SE RECIBEN A TRAVES DEL REQ.BODY
    storage: async function (req,res){
		try{                             
			let size =  await Sizes.findOne({  
				where: { 
						size_name: req.body.size
					}
				});
			/* 	let newarray= req.files.map((file)=>file.filename)
				console.log(req.files)           
				console.log(newarray)*/
				/* for (var i = 0; i < newarray.length; i++) {
					Images.create({
						image_url : req.files.filename
					});
				} */          
			Products.create({
				...req.body,
				images: [{image_url:req.file.filename}]
			 },{
				include: ["images"]
			 });
			return res.redirect("/");
		}catch (error){
			console.log(error);
			return res.send("404 error");
		}
    },

	//METODO QUE BUSCA UN PRODUCTO EN LA BD POR SU ID, EL CUAL SE RECIBE EN LA QUERY A TRAVES DE LA RUTA PARAMETRIZADA CON LA VARIBLE REQ.PARAMS.ID
    detail: async function (req, res){ 
		try{
			let productFound = await Products.findByPk(req.params.id,{include:"images"});
			let products= await Products.findAll({include:"images"});
			return res.render("./products/detail", {productFound:productFound, products:products});
		}catch (error){
			console.log(error);
			return res.send("404 error");
		}	
	},

	//METODO QUE MUESTA EL FORMULARIO DE EDICION DE PRODUCTO, CON EL PRODUCTO CORRESPONDIENTE A LA QUERY, LA CUAL RE RECIBE POR REQ.PARAMS.ID
	edit: async function (req, res){
		try{
			let productToEdit=await Products.findByPk(req.params.id);
			return res.render("./products/edit", {productToEdit:productToEdit});
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