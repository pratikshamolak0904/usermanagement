const mongoose=require('mongoose')


const UserSchema=new mongoose.Schema({
    fullName:{type:String,required:true},
    userName:{type:String,required:true},
    mobileNo:{type:String,required:true}


})

module.exports=mongoose.model('Users',UserSchema)