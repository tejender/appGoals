const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel');

//@desc Register new user
//@route post api/users
//@access public
const registerUser = asyncHandler(async(req,res)=>{

    const {name,email,password} = req.body
    if(!name|| !email || !password){
        res.status(400);
        throw new Error('please fill all the fields')
    }
    const userExits = await User.findOne({email})
    if(userExits){
        res.status(400)
        throw new Error('already exist')
    }
    //hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    //create user
    const user = await User.create({name,email,password:hashedPassword})

    if(user){
        res.status(201).json({
            _id:user.id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id)
        })
    }else{
        res.status(error)
        throw new Error('invalid data')
    }

})

//@desc authenticate user
//@route post api/login
//@access public
const loginUser = asyncHandler(async(req,res)=>{

 const {email,password}= req.body
 //   check for user existence
 const user= await User.findOne({email})
    if (user && (await bcrypt.compare(password,user.password)) ){
        res.status(201).json({
            _id:user.id,
            name:user.name,
            email:user.email,
             token:generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error('invalid Credentials')
    }
    res.json({message:'login user'})
})

//@desc get user data
//@route get api/users/me
//@access public
const getMe = asyncHandler(async(req,res)=>{
    const {_id,name,email} = await User.findById(req.user.id)
    res.status(200).json({
        id:_id,
        name,
        email,
    })
    
})

// generate JWT
const generateToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'30d',
    })
}
module.exports = {registerUser,loginUser,getMe}