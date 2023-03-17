const userSchema = require('../models/userSchema');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

module.exports = {
    

    login: (async(req, res) => {
        try{
            const { email, password } = req.body
            const user =await  userSchema.find({ email: email })
            if (user){
               await userSchema.find({password:{$eq:password}})
                token = jwt.sign(
                    { userId: user._id, email:user.email },
                    process.env.JWT_key,
                    { expiresIn: "1h" }
                  );
                 
                  user.jwt=token
                  console.log(user);
                  res.send(user)
            }
              
          
        }catch(error){
            console.log(error);
            // res.send('error')
        }
        
    })
}