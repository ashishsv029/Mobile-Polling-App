const express=require('express');
const router=express.Router();
const Employee=require('../models/Employee');
router.get('/results',(req,res)=>{
    console.log("aagaya");
    var realme;
    var redmi;
    var flag=0;
    Employee.find({vote:"Realme"})
    .then(Employee=>{
        if(Employee.length>0)
        {
            console.log(Employee);
            realme=Employee.length;
            flag=1;
        }
    })
    .catch(err=>console.log(err));
    Employee.find({vote:"Redmi"})
    .then(Employee=>{
        if(Employee.length>0)
        {
            redmi=Employee.length;
            flag=1;
            console.log("flags in redmi="+String(flag));
        }
        if(flag==1)
        {
        console.log(realme);
        console.log(redmi);
        res.render('results',{rl:realme,rd:redmi});
        }
        else{
        console.log("-1")
        res.render('results');
        }
    })
    .catch(err=>console.log(err));
    console.log("flags="+String(flag));
    
})
router.get('/',(req,res)=>res.render('store'));
router.get('/rough1',(req,res)=>{res.render('rough')});
router.post('/store',(req,res)=>{
    //all the variables names must be same in these 3 files
    //i.e in form the names must be same as the variables that u declare here to store the requestbodyvalue
    //which should be same as the names u defined in schema
    const {empid,empname,empmail,gender,salary,vote}=req.body
    const newEmployee=new Employee({
        empid,
        empname,
        empmail,
        gender,
        salary,
        vote
    });
    console.log("hai")
    console.log(newEmployee);
    newEmployee.save()
    console.log("added")
    
    res.redirect('/rough1')
    
    
    console.log(req.body);
});
module.exports=router;