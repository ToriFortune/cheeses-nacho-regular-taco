var express = require("express");
var router = express.Router();
var taco = require("../models/tacos");

router.get("/", function(req,res){
    res.redirect("/tacos");
});

router.get("/tacos", function(req, res){
    taco.all(function(tacoData){
        res.render("index", {tacos: tacoData});
    })
});

module.exports = router;