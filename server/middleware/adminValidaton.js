const userSchema = require("../models/userSchema");


   const  adminValidation=((req,res,next)=>{
    console.log('reached');
     let credentilas={name:'admin',password:"123",email:"admin@gmail.com",role:'123'}
       const{email,password}=req.body;
       if(credentilas.email==email && credentilas.password==password){
        const admin=userSchema.find({email:email});
        res.send({admin})
       }
       next()
    
    })

module.exports=adminValidation


