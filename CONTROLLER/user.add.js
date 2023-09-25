const {UserModel}=require("../MODEL/user.model")

const bcrypt=require("bcrypt");

async function registerControl(req,res){
    const {email , password , confirm_password} = req.body;

    if(!email || !password || !confirm_password){
        return res.status(400).json({msg:`All fields are required`})
    }

    
  if (password !== confirm_password) {
    return res.status(400).json({ msg: `Password do not match` });
  }

    try{
        const hash = await bcrypt.hash(password,5);

        const user=new UserModel({email , password: hash , confirm_password})

        await user.save()

        res.status(200).json({msg:`New User is Registered`})
    }
    
    catch(err){

        res.status(400).json({msg:`Something went wrong`,"error":err.message})

    }
}

module.exports={
    registerControl
}

