// we have to again import express because we have to use router here and router is a part of express
const express=require("express");

// here we have imported router
const router=express.Router();

// in order to use the call back function in an organized way we have written the call back function in a seperate file after that we have imported it
const registerUser=require("./usercontroller")

// route:it takes the request and we have to give any of the four method(curd) and the function to perform
router.route("/").post(registerUser).get((req,res)=>
{
    res.send("wow");
})

// how to use get request 
// router.route("/get/api").get(registerUser)

// if there are multiple routes then we just change the last letter of each

module.exports= router;