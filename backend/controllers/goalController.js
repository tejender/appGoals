const asyncHandler = require('express-async-handler')
//@desc Get Goals
//@route api/goals
//@access private

const getGoals = asyncHandler(async (req,res)=>{
    res.status(200).json({message:'get goals'});
})

//@desc set Goals
//@route api/goals
//@access private

const setGoals =  asyncHandler(async (req,res)=>{
     
      if(!req.body.text){
        //   res.status(400).json({message:"please fill the fields"})
        res.status(400)
        throw new Error ('please fill the fields')
      }else{
          console.log(res.body.json());
           res.status(200).json({message:'set goals'});
      }
})

//@desc update Goals
//@route api/goals/id
//@access private

const updateGoals =  asyncHandler(async (req,res)=>{
   res.status(200).json({message:`update goals ${req.params.id}`});
})

//@desc delete Goals
//@route api/goals/id
//@access private

 const deleteGoals = asyncHandler(async (req,res)=>{
    res.status(200).json({message:`delete goals ${req.params.id}`});
})

module.exports ={
    getGoals,setGoals,updateGoals,deleteGoals
}