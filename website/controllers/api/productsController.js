const db = require('../../database/models');
const Product = db.Product;

const productApiController = {

    'list' : async (req,res) =>{
        try{
            let products = await Product.findAll({
                include:["images","category"]
            })
            let response ={
                    meta: {
                        satus:200,
                        total: products.length,
                        url: 'api/products'
                    },
                    data: products
                }
            res.json(response);
        }catch(error){
            console.log(error);
        }
    },

    'detail': async (req,res)=>{
        try{
            let product = await Product.findByPk(req.params.id,{
                include: ["category", "sizes", "images"]
            })
            console.log(product)
            let response ={
                    meta: {
                        satus:200,
                        url: 'api/products/:id'
                    },
                    data:product
                }
                res.json(response);    
        }catch(error){
            console.log(error);
        }
    }
}

module.exports=productApiController;