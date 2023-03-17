const instanceSchema = require("../models/instanceSchema");
const userSchema = require("../models/userSchema");

module.exports={
    signup: ((req, res) => {
        const { name, email, password, role } = req.body;
        if (!name || !email || !password) {
            res.send('fields required')
        } else {
            const user = new userSchema({ name, email, password, role })
            user.save();
            res.send('inserted')
        }
    }),

       login:((req,res)=>{
        let credientials={
             email:'admin@gmail.com',
              role:'admin'
        }
       console.log(req.body);
        try{   
            if(req.body.email==credientials.email&&req.body.password==credientials.password){
                res.send("admin")
            }
        }catch(error){
            res.send(error)
        }
    }),
  
    createInstance:((req,res)=>{
        const {instance}=req.body
        const newinstance=new instanceSchema({instance})
        newinstance.save();
        res.send({newinstance})
    })
    
}