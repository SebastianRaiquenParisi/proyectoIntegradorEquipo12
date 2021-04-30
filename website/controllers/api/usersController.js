const db = require('../../database/models');
const User = db.User;

const productApiController = {

    'list' : async (req,res) =>{
        try{
            let users = await User.findAll({
                include:[{
                    model: db.Address,
                    as: 'address',
                    attributes: {
                        exclude: ["createdAt","updatedAt","user_id"]
                    } 
                }],
                attributes: {
                    exclude: ["password","createdAt","updatedAt"]
                }
            })
            let response ={
                    meta: {
                        satus:200,
                        total: users.length,
                        url: '/api/users'
                    },
                    data: users
                }
            res.json(response);
        }catch(error){
            console.log(error);
        }
    },

    'detail': async (req,res)=>{
        try{
            let user = await User.findByPk(req.params.id,{
                include: [{
                    model: db.Address,
                    as: 'address',
                    attributes: {
                        exclude: ["createdAt","updatedAt","user_id"]
                    } 
                }],
                attributes: {
                    exclude: ["password","createdAt","updatedAt"]
                }
            })
            let response ={
                    meta: {
                        satus:200,
                        url: 'api/user/:id'
                    },
                    data:user
                }
                res.json(response);    
        }catch(error){
            console.log(error);
        }
    }
}

module.exports=productApiController;