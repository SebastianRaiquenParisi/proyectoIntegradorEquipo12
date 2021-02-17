const fs = require("fs");

const Users = {
    fileName: "./database/users.json",

    getData: function (){
        return JSON.parse(fs.readFileSync(this.fileName, "utf-8"))
    },

    findAll: function(){
        return this.getData();

    },

    generateId: function(){
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if(lastUser){
            return lastUser.id+1;
        }
        return 1;

    },

    findByPk: function(id){
        let allUsers = this.findAll();
        let userFound = allUsers.find(user => user.id==id);
        return userFound;

    },

    findByField: function(field,text){
        let allUsers = this.findAll();
        let userFoundByField = allUsers.map(user => user[field]==text);
        return userFoundByField;

    },

    create: function(users){
        let allUsers = this.findAll();
        let newUser ={
            id:this.generateId(),
            ...users
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers,null,2));
        return newUser;
    },
    
    delete: function(id){
        let allUsers = this.findAll();
        allUsers=allUsers.filter(user => user.id!=id)
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers,null,2));
        return true;

    }
}

module.exports= Users;