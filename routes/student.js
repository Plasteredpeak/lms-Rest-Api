var express = require("express");
var router=express.Router();
router.get('/', (req,res,next)=> {
    res.send("Dashboard of Student")
})
module.exports=router;