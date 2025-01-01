const express=require('express')
const cors=require('cors')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const userRoutes = require('./routes/userRoute')


const server=express()
server.use(cors())
server.use(bodyParser.json())
server.use('/api',userRoutes)


mongoose.connect('mongodb+srv://Pratiksha:CJ3adVHdH5PR1l2k@userbackend.uui9e.mongodb.net/',{
    useNewURLParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("BD connected")
}).catch((error)=>{
    console.log("error",error.message)
})

 //const userRoutes=require('./routes/userRoute')
 //server.use('/api',userRoutes)

server.listen(8055,()=>{
    console.log("server started on 8055 ")
})