const express=require('express');
const route=express.Router();
const paytmOperation=require('../helpers/paytmcrud');

route.get('/paytm',(req,res)=>{
    var userobject=req.query;
    console.log(userobject);
    paytmOperation.submit(userobject,res);

});

module.exports=route;