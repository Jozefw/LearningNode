var express = require('express');
var myApp = express();
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/Jozefdb");

var schema = new mongoose.Schema({
name: { type:String}
});

var Product = mongoose.model("Product",schema);
var product = new Product({name:"pickles"});

product.save(function(err){
    if (err){
        console.log("failed attempt");
    }
    else{
        console.log("success");
    }

});

myApp.get("/", function(req, res){
  Product.find(function(err, products){
        res.send(products);
      })
});

myApp.listen(3002);