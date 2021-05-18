let db = require("../database/models");
const product_size = require("../database/models/product_size");
let Products=db.Product;
let Categories=db.Category;
let Conditions=db.Condition;
let Sizes=db.Size;
let Product_sizes=db.Product_size;
const {validationResult} = require ("express-validator");
const { Op } = require("sequelize");

//METODO PARA CAPITALIZAR LA PRIMERA LETRA DE UN STRING
function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
  }

const productosController = {

	//METODO PARA LISTAR TODOS LOS PRODUCTOS DE LA BASE DE DATOS
    list: async function (req,res){
		try {
			let products= await Products.findAll({include:["images","category"]}); //FUNCION QUE PERMITE BUSCAR TODOS LOS PRODUCTOS CON EL METODO DE SEQUELIZE
			return res.render("./products/list", {products:products, stylesheet: "/css/styles-index.css"})
		}catch (error){
			console.log(error);
			return res.render("./products/error404");
		}
    },
	//METODO PARA LISTAR TODOS LOS PRODUCTOS DE LA BASE DE DATOS DE CIERTA CATEGORIA !!!!! ESTE ES CORRECTO!!!!!!!!!!!!!!!!!
	
	listCategoryShirts: async function (req,res){
		try {
			let products= await Products.findAll({include:["images","category"], where: {category_id: {[Op.eq] : 1}}}); //FUNCION QUE PERMITE BUSCAR TODOS LOS PRODUCTOS CON EL METODO DE SEQUELIZE
			return res.render("./products/list", {products:products, stylesheet: "/css/styles-index.css"})
		}catch (error){
			console.log(error);
			return res.render("./products/error404");
		}
	},

	listCategoryHoodies: async function (req,res){
		try {
			let products= await Products.findAll({include:["images","category"], where: {category_id: {[Op.eq] : 2}}}); //FUNCION QUE PERMITE BUSCAR TODOS LOS PRODUCTOS CON EL METODO DE SEQUELIZE
			return res.render("./products/list", {products:products, stylesheet: "/css/styles-index.css"})
		}catch (error){
			console.log(error);
			return res.render("./products/error404");
		}
	},

	listCategoryAccesories: async function (req,res){
		try {
			let products= await Products.findAll({include:["images","category"], where: {category_id: {[Op.eq] : 3}}}); //FUNCION QUE PERMITE BUSCAR TODOS LOS PRODUCTOS CON EL METODO DE SEQUELIZE
			return res.render("./products/list", {products:products, stylesheet: "/css/styles-index.css"})
		}catch (error){
			console.log(error);
			return res.render("./products/error404");
		}
	},

	/*listCategoryNews: async function (req,res){
		try {
			let products= await Products.findAll({include:["images","category"], where: {category_id: {[Op.eq] : 4}}}); //FUNCION QUE PERMITE BUSCAR TODOS LOS PRODUCTOS CON EL METODO DE SEQUELIZE
			return res.render("./products/list", {products:products, stylesheet: "/css/styles-index.css"})
		}catch (error){
			console.log(error);
			return res.render("./products/error404");
		}
	},*/

	
    /*listCategory: async function (req,res){
		try {
			let products= await Products.findAll({include:["images","category"], where: {category_name: req.query.categoria}}); //FUNCION QUE PERMITE BUSCAR TODOS LOS PRODUCTOS CON EL METODO DE SEQUELIZE
			return res.render("./products/list", {products:products, stylesheet: "/css/styles-index.css"})
		}catch (error){
			console.log(error);
			return res.render("./products/error404");
		}
    },

	listDescuentos: async function (req,res){
		try {
			let products= await Products.findAll({include:["images","category", ""]}); //FUNCION QUE PERMITE BUSCAR TODOS LOS PRODUCTOS CON EL METODO DE SEQUELIZE
			return res.render("./products/list", {products:products, stylesheet: "/css/styles-index.css"})
		}catch (error){
			console.log(error);
			return res.render("./products/error404");
		}
    },

	listUltimos: async function (req,res){
		try {
			let products= await Products.findAll({include:["images","category"]}); //FUNCION QUE PERMITE BUSCAR TODOS LOS PRODUCTOS CON EL METODO DE SEQUELIZE
			return res.render("./products/list", {products:products, stylesheet: "/css/styles-index.css"})
		}catch (error){
			console.log(error);
			return res.render("./products/error404");
		}
    },*/

    //METODO PARA MOSTRAR EL CARRO DE PRODUCTOS SELECCIONADOS
    shoppingCart: async function (req,res){
		try {
			let products= await Products.findAll({include:"images"});
			return res.render("./products/cart", {products:products})
		}catch (error){
			console.log(error);
			return res.render("./products/error404");
		}
    },

	//METODO PARA BUSCAR POR EL CAMPO "NOMBRE" DE LOS PRODUCTOS EN LA BD
	search: async function (req,res){
		try{
			let products= await Products.findAll({include:"images"}); 
			let searchResults = products.filter(product=>product.name.toLowerCase().includes(req.query.keywords.toLowerCase()));
			let productFound = searchResults.length;
			(searchResults.length==0)?searchResults=products: "null" //SI SEARCHRESULTS NO ENCUENTRA RESULTADOS SE LE ASIGNA A SEARCHRESULTS PRODUCTS
			
			return res.render("./products/search", {searchResults, productFound, keywords:req.query.keywords})		//UTILIZA EL METODO FILTER PARA GUARDAR EN LA VARIABLE
		}catch (error){																					//"searchResults" LOS PRODUCTOS QUE EN SU CAMPO NOMBRE
			console.log(error);																		   //INCLUYAN LO QUE FUE ENVIADO EN LA QUERY
			return res.render("./products/error404");
		}		
	},

	//METODO QUE RENDERIZA LA VISTA DEL FORMULARIO DE CREACION DE PRODUCTOS
    create:async (req,res)=>{
		try{
			let talles = await Sizes.findAll();
			let categorias= await Categories.findAll();
			let condiciones= await Conditions.findAll();
			return res.render("./products/create",{talles,categorias,condiciones});
		}catch (error){
			console.log(error);																			//INCLUYAN LO QUE FUE ENVIADO EN LA QUERY
			return res.render("./products/error404");
		}
    },

	//METODO QUE ALMACENA EN LA BD EL PRODUCTO CREADO EN EL FORMULARIO, LOS DATOS SE RECIBEN A TRAVES DEL REQ.BODY
    storage: async function (req,res){
		try{  									
			let errors = validationResult(req);				 //VALIDACIONES DEL FORMULARIO AL CREAR UN PRODUCTO
          	if(!errors.isEmpty()){							//VERIFICO SI HAY ERRORES A TRAVES DEL MIDDLEWARE DE VALIDACIONES PERSISTIENDO DATOS
				let talles = await Sizes.findAll();
				let categorias= await Categories.findAll();
				let condiciones= await Conditions.findAll();
				return res.render("./products/create", {
					talles,
					categorias,
					condiciones,
                	errors: errors.mapped(),
                	oldData: req.body 		
            	});
			}
			
			let newarray= req.files.map((file)=>new Object({image_url:file.filename}))
			let newproduct = await Products.create({
				...req.body,
				name: capitalize(req.body.name),
				description: capitalize(req.body.description),
				images: newarray
			},{
				include: ["images"]
			});
			await Product_sizes.bulkCreate(
				Array.from(req.body.size).map(
				(size,index)=>new Object({size_id:size,product_id:newproduct.id, quantity:req.body.quantity[index]})
				));
			return res.redirect("/"); //REDIRIGIR AL PRODUCTO CREADO RECIENTEMENTE
		}catch (error){
			console.log(error);
			return res.render("./products/error404");
		}
    },

	//METODO QUE BUSCA UN PRODUCTO EN LA BD POR SU ID, EL CUAL SE RECIBE EN LA QUERY A TRAVES DE LA RUTA PARAMETRIZADA CON LA VARIBLE REQ.PARAMS.ID
    detail: async function (req, res){ 
		try{
			let sizes = await Product_sizes.findAll({
				where:{
					product_id:req.params.id
				}
			})
			let productFound = await Products.findByPk(req.params.id,{include:["images","sizes"]});
			let products= await Products.findAll({include:"images"});
			productFound.sizes = productFound.sizes.map(
				talle => new Object({talle_id:talle.id, talle_name:talle.size_name, talle_quantity:sizes.find(size=>
					 size.size_id==talle.product_sizes.size_id).quantity}))

			return res.render("./products/detail", {productFound:productFound, products:products, talles:productFound.sizes});
		}catch (error){
			console.log(error);
			return res.render("./products/error404");
		}	
	},

	//METODO QUE MUESTA EL FORMULARIO DE EDICION DE PRODUCTO, CON EL PRODUCTO CORRESPONDIENTE A LA QUERY, LA CUAL RE RECIBE POR REQ.PARAMS.ID
	edit: async function (req, res){
		try{
			let talles = await Sizes.findAll();
			let categorias= await Categories.findAll();
			let condiciones= await Conditions.findAll();
			let productToEdit=await Products.findByPk(req.params.id,{include:["images","sizes","category"]});
			return res.render("./products/edit", {productToEdit,categorias,condiciones,talles});
		}catch(error){
			console.log(error);
			return res.render("./products/error404");
		}
	},

	//METODO QUE ACTUALIZA LA INFORMACION DEL PRODUCTO EN LA BD
	update: async function(req, res){ 
		try{	
		 	let errors = validationResult(req);			 //VALIDACIONES DEL FORMULARIO AL EDITAR UN PRODUCTO
			let productToEdit=await Products.findByPk(req.params.id,{include:["images","sizes"]});
			//console.log(errors)
         	/* if(!errors.isEmpty()){						//VERIFICO SI HAY ERRORES A TRAVES DEL MIDDLEWARE DE VALIDACIONES PERSISTIENDO DATOS
            	return res.render("./products/edit", {
                	errors: errors.mapped(),
                	oldData: req.body,
					productToEdit
            	});
			}  */
			await Products.update(req.body,{ //SE RECIBEN LOS DATOS A ACTUALIZAR POR EL FORMULARIO A TRAVES DEL REQ.BODY
				where: {id: req.params.id}  //INDICAMOS EN QUE PRODUCTO SE VA A ACUALIZAR DICHA INFORMACION, SELECCIONANDOLO POR SU ID
			});							   //EL CUAL SE RECIBE POR UNA RUTA PARAMETRIZADA A TRAVES DEL REQ.PARAMS.ID
			return res.redirect("/");
		}catch(error){
			console.log(error);
			return res.render("./products/error404");
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
			return res.render("./products/error404");
		}
	},

	//METODO QUE MUESTRA EL MENSAJE DE ERROR 404 SI SE PRODUCE UN ERROR INESPERADO
	error404: (req,res)=>{ 
        return res.render("./products/error404")
    },

	//NUEVOS MÉTODOS

	customerService: async function (req,res){ //ATENCIÓN AL CLIENTE
		try {
			return res.render("./products/customerService")
		}catch (error){
			console.log(error);
			return res.render("./products/error404");
		}
    },
	
	questions: async function (req,res){ //PREGUNTAS FRECUENTES
		try {
			return res.render("./products/questions")
		}catch (error){
			console.log(error);
			return res.render("./products/error404");
		}
    },
		
	returns: async function (req,res){ //RECLAMOS Y DEVOLUCIONES
		try {
			return res.render("./products/returns")
		}catch (error){
			console.log(error);
			return res.render("./products/error404");
		}
    },
		
	eShipping: async function (req,res){ //ENVÍOS Y ENTREGAS
		try {
			return res.render("./products/eShipping")
		}catch (error){
			console.log(error);
			return res.render("./products/error404");
		}
    },

	pymMethod: async function (req,res){ //FORMAS DE PAGO
		try {
			return res.render("./products/eShipping")
		}catch (error){
			console.log(error);
			return res.render("./products/error404");
		}
    },

	reactCustomize: async function (req,res){ //CUSTOMIZÁ TU DISEÑO
		try {
			return res.render("./products/reactCustomize")
		}catch (error){
			console.log(error);
			return res.render("./products/error404");
		}
    }
}

module.exports=productosController;