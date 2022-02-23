const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name:{
      type:String,
      required:[true,'Please enter the field']
  },
   email:{
      type:String,
      required:[true,'Please enter email'],
      unique:true
  },
   password:{
      type:String,
      required:[true,'Please enter the password']
  },
   name:{
      type:String,
      required:[true,'Please enter the field']
  }
},
{
     timestamps:true
  }
)

module.exports =mongoose.model('User',userSchema)