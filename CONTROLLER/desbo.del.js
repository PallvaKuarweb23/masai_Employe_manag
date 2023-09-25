const {DashboardModel}=require("../MODEL/dashboard.mod")

async function emplyeeDelete(req,res){
    try{
    const id=req.params.id;
    await DashboardModel.findByIdAndDelete(id);
    res.status(200).send({"msg":"Deletes a specific emplyee"})
    
    
    }catch(err){
        res.status(400).send({"msg":err.message})
    
    }
    }

    module.exports={
        emplyeeDelete
    }