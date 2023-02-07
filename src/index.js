const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')

dotenv.config()

const app=express()

app.use(express.json())

mongoose.set('strictQuery', true)
mongoose.connect(`mongodb+srv://ajit07:zsSSEqn97gvLXrGS@cluster0.d3veclf.mongodb.net/Assignment-jaiks`).then(()=>{
    console.log(`Connection to mongoDB successfull!`)
}).catch((error)=>{
    console.log(error)
})

let PORT=3001
app.listen(PORT,()=>{
    console.log(`Express app running on port ${PORT}`)
})