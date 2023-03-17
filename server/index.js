const express=require('express');
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const user=require('./router/user')
const admin=require('./router/admin')
const app=express();
dotenv.config()

mongoose.connect('mongodb+srv://safnams:safna123@cluster0.twf0sfo.mongodb.net/interview?retryWrites=true').then(()=>{
    console.log('mongoconnected');
})

app.use(express.json())
app.use('/api/user',user)
app.use('/api/admin',admin)

app.listen(3000,()=>{
    console.log('connected to server');
})