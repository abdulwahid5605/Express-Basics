const registerUser=(req,res)=>
{
    // const username=req.body.name;
    // const userEmail=req.body.email;
    // const userpassword=req.body.password;

    res.json(
        {
            success:true,
            // name:username,
            // email:userEmail,
            // password:userpassword,
        }
    )
}

module.exports=registerUser;