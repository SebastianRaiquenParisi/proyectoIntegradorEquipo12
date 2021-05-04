const db = require('../../database/models');
const Product = db.Product;

const productApiController = {

    'list' : async (req,res) =>{
        try{
            let products = await Product.findAll({
            /* include: ["images","category", "sizes", "condition"] */
               include:[{
                    model: db.Category,
                    as: 'category',
                    attributes: {
                       exclude: ["createdAt","updatedAt"]
                    }
                },
                {
                    model: db.Condition,
                    as: 'condition',
                    attributes: {
                    exclude: ["createdAt","updatedAt"]
                    }
                },
                {
                    model: db.Image,
                    as: 'images',
                    attributes: {
                    exclude: ["createdAt","updatedAt"]
                    }
                },
                {
                    model: db.Size,
                    as: 'sizes',
                    attributes: {
                    exclude: ["createdAt","updatedAt"]
                    }
                }],
                attributes: {
                    exclude: ["category_id","condition_id","createdAt","updatedAt"]
                }
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
                include: ["images","category", "sizes", "condition"]
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