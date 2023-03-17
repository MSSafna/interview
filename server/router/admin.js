const adminController = require('../controller/adminController');
const adminValidation=require('../middleware/adminValidaton')

const router=require('express').Router();

router.post('/login',adminController.login)
router.post('/register',adminController.signup)
router.post('/createInstance',adminValidation,adminController.createInstance)

module.exports=router