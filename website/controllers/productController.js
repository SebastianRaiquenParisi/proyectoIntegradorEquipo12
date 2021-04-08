let db = require("../database/models");
const product_size = require("../database/models/product_size");
let Products=db.Product;
let Sizes=db.Size;
let Product_sizes=db.Product_size;
let Category_products=db.Category_product;
const {validationResult} = require ("express-validator");

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
			return res.render("error404");
		}
    },

    //METODO PARA MOSTRAR EL CARRO DE PRODUCTOS SELECCIONADOS
    shoppingCart: async function (req,res){
		try {
			let products= await Products.findAll();
			return res.render("./products/cart", {products:products})
		}catch (error){
			console.log(error);
			return res.render("error404");
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
			return res.render("error404");
		}		
	},

	//METODO QUE RENDERIZA LA VISTA DEL FORMULARIO DE CREACION DE PRODUCTOS
    create:async (req,res)=>{
		try{
			let talles = await Sizes.findAll();
			return res.render("./products/create",{talles} );

		}catch (error){
			console.log(error);																			//INCLUYAN LO QUE FUE ENVIADO EN LA QUERY
			return res.render("error404");
		}
    },

	//METODO QUE ALMACENA EN LA BD EL PRODUCTO CREADO EN EL FORMULARIO, LOS DATOS SE RECIBEN A TRAVES DEL REQ.BODY
    storage: async function (req,res){
		//return res.send(req.body)
		try{  
			//VALIDACIONES DEL FORMULARIO AL CREAR UN PRODUCTO
			let errors = validationResult(req);		

		
       /*   	if(!errors.isEmpty()){		//VERIFICO SI HAY ERRORES A TRAVES DEL MIDDLEWARE DE VALIDACIONES PERSISTIENDO DATOS
				let talles = await Sizes.findAll();
            	return res.render("./products/create",{talles}, {
                	errors: errors.mapped(),
                	oldData: req.body //revisar si el formulario devuelve los datos
            	});
			}  */
			

			let newarray= req.files.map((file)=>new Object({image_url:file.filename}))

			let newproduct = await Products.create({
				...req.body,
				images: newarray
			},{
				include: ["images"]
			});
			await Product_sizes.bulkCreate(req.body.size.map((size,index)=>new Object({size_id:size,product_id:newproduct.id, quantity:req.body.quantity[index]})));
			return res.redirect("/");
		}catch (error){
			console.log(error);
			return res.render("./products/error404");
		}
    },

	//METODO QUE BUSCA UN PRODUCTO EN LA BD POR SU ID, EL CUAL SE RECIBE EN LA QUERY A TRAVES DE LA RUTA PARAMETRIZADA CON LA VARIBLE REQ.PARAMS.ID
    detail: async function (req, res){ 
		try{

			//VALIDACIONES DEL FORMULARIO AL EDITAR UN PRODUCTO
		/* 	let errors = validationResult(req);		 */

   /*      	if(!errors.isEmpty()){		//VERIFICO SI HAY ERRORES A TRAVES DEL MIDDLEWARE DE VALIDACIONES PERSISTIENDO DATOS
            	return res.render("./products/edit", {
                	errors: errors.mapped(),
                	oldData: req.body //revisar si el formulario devuelve los datos
            	});
			} */

			let sizes = await Product_sizes.findAll({
				where:{
					product_id:req.params.id
				}
			})
			
			let productFound = await Products.findByPk(req.params.id,{include:["images","sizes"]});
			let products= await Products.findAll({include:"images"});
			productFound.sizes = productFound.sizes.map(talle => new Object({talle_id:talle.id, talle_name:talle.size_name, talle_quantity:sizes.find(size=> size.size_id==talle.product_sizes.size_id).quantity}))
			//console.log(productFound.sizes)
			return res.render("./products/detail", {productFound:productFound, products:products, talles:productFound.sizes});
		}catch (error){
			console.log(error);
			return res.render("error404");
		}	
	},

	//METODO QUE MUESTA EL FORMULARIO DE EDICION DE PRODUCTO, CON EL PRODUCTO CORRESPONDIENTE A LA QUERY, LA CUAL RE RECIBE POR REQ.PARAMS.ID
	edit: async function (req, res){
		try{
			let productToEdit=await Products.findByPk(req.params.id);
			return res.render("./products/edit", {productToEdit:productToEdit});
		}catch(error){
			console.log(error);
			return res.render("error404");
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
			return res.render("error404");
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
			return res.render("error404");
		}
	},

	//METODOQUE MUESTRA EL MENSAJE DE ERROR 404 SI SE PRODUCE UN ERROR INESPERADO

	error404: (req,res)=>{ 
        
        return res.render("./products/error404")
    }
}

module.exports=productosController;