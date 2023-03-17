const router=require('express').Router();
const userController=require('../controller/userController')
const authMiddeware=require('../middleware/authmiddleware')





router.post('/login',userController.login);




module.exports=router
