const fs = require("fs");

const Products = {
    fileName: "./database/Products.json",

    getData: function (){
        return JSON.parse(fs.readFileSync(this.fileName, "utf-8"))
    },

    findAll: function(){
        return this.getData();

    },

    generateId: function(){
        let allProducts = this.findAll();
        let lastProduct = allProducts.pop();
        if(lastProduct){
            return lastProduct.id+1;
        }
        return 1;
    },

    findByPk: function(id){
        let allProducts = this.findAll();
        let productFound = allProducts.find(user => user.id==id);
        return productFound;

    },

    findByField: function(field,text){
        let allProducts = this.findAll();
        let productFoundByField = allProducts.map(product => product[field]==text);
        return productFoundByField;
    },

    create: function(product){
        let allProducts = this.findAll();
        let newProduct ={
            id:this.generateId(),
            ...product
        }
        allProducts.push(newProduct);
        fs.writeFileSync(this.fileName, JSON.stringify(allProducts,null,2));
        return newProduct;
    },
    
    delete: function(id){
        let allProducts = this.findAll();
        allProducts=allProducts.filter(user => user.id!=id)
        fs.writeFileSync(this.fileName, JSON.stringify(allUsallProductsers,null,2));
        return true;
    }
}

module.exports= Products;