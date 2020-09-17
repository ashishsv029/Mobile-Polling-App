const mongoose=require('mongoose');
const employeeschema=new mongoose.Schema({
    empid:{
        type:String,
        required:true
    },
    empname:{
        type:String,
        required:true
    },
    empmail:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    vote:{
        type:String,
        required:true
    }
});
const Employee=mongoose.model('Employee',employeeschema);
module.exports=Employee
