const express=require('express')
const router=express.Router();
const Users=require('../models/user')

router.post('/addUser',async(req,res)=>{
    try{
        const user=new Users(req.body)
        await user.save()
        res.send({status:true,message:"Added Successfully !!"})
    }catch(error){
       res.send({status:false,message:error.message})   
    }
})
router.get('/getUser',async(req,res)=>{
    try{
        const users=await Users.find()
        res.send({status:true,message:users})
    }catch(error){
       res.send({status:false,message:error.message})   
    }
})
router.get('/getUserId/:id',async(req,res)=>{
    try{
        const id=req.params.id
        const users=await Users.findById(id)
        if(!users){
            res.send({status:true,message:users})
        }else{
            res.send({status:true,message:users})
        }
    }catch(error){
       res.send({status:false,message:error.message})   
    }
})

router.put('/updateUser/:id',async(req,res)=>{
    try{
        const id=req.params.id
        const users = await Users.findByIdAndUpdate(id,req.body,{new:true})
        res.send({status:true,message:"Updated Successfully !!"})
    }catch(error){
       res.send({status:false,message:error.message})   
    }
})

router.delete('/deleteUser/:id',async(req,res)=>{
    try{
        const id=req.params.id
        const users=await Users.findByIdAndDelete(id)
        res.send({status:true,message:"Deleted Successfully !!"})
    }catch(error){
       res.send({status:false,message:error.message})   
    }
})

module.exports=router;