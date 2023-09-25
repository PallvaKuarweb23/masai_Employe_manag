const {UserModel}=require("../MODEL/user.model")

const bcrypt=require("bcrypt")

const jwt=require("jsonwebtoken")

async function loginUser(req,res){
    try{

        const {email, password}=req.body;

        if (!email) {
            return res.status(400).json({ msg: "Email is required." });
          } else if (!password) {
            return res.status(400).json({ msg: "Password is required." });
          }


          const user= await UserModel.findOne({email});

          if(user){
            bcrypt.compare(password,user.password,(err,result)=>{
                 if(result){
                    const token= jwt.sign({foo:"bar"},"shhhhh")
                    res.status(200).json({msg:`Login Successful`,token:token}  )

                 }else{
                    res.status(400).json({msg:"Invalid Password"})
                 }
            })
          }else{
            res.status(400).json({msg:"Invalid Email"})
          }



    }

    catch(err){
        res.status(500).json({msg:"Something went wrong",error:err.message})
    }
}

module.exports={
    loginUser
}