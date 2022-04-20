var express = require("express")
var router=express.Router()

router.get('/', (req,res,next)=> {
    res.send("Dashboard of Admin")
})

//*GET METHODS
router.get('/classes', (req,res,next)=> {
    res.send("list of classes")
})

router.get('/teachers', (req,res,next)=> {
    res.send("list of teachers")
})

router.get('/students', (req,res,next)=> {
    res.send("list of students")
})

router.get('/classes/:cid', (req,res,next)=> {
    res.send("Info. about specific class")
})

router.get('/teachers/:tid', (req,res,next)=> {
    res.send("Info. about specific teacher")
})

router.get('/students/:sid', (req,res,next)=> {
    res.send("Info. about specific student")
})

//*POST METHODS

router.post('/addclass', (req,res,next)=> {
    res.send("Add Class")
})

router.post('/addteacher', (req,res,next)=> {
    res.send("add teachers")
})

router.post('/addstudent', (req,res,next)=> {
    res.send("add Students")
})

//*PUT METHODS

router.put('/classes/:cid', (req,res,next)=> {
    res.send("Editing class")
})

router.put('/teachers/:tid', (req,res,next)=> {
    res.send("Editing teacher")
})

router.put('/students/:sid', (req,res,next)=> {
    res.send("Editing student")
})

router.put('/assignteacher/:cid/"tid', (req,res,next)=> {
    res.send("Assigning teacher to a Class")
})

router.put('/assignteacher/:cid/"sid', (req,res,next)=> {
    res.send("Assigning student a Class")
})

//*DELETES METHODS

router.delete('/delclass/:cid', (req,res,next)=> {
    res.send("Delete class")
})
router.delete('/delteacher/:tid', (req,res,next)=> {
    res.send("Delete Teacher")
})
router.delete('/delstudent/:sid', (req,res,next)=> {
    res.send("Delete Student")
})

module.exports=router;