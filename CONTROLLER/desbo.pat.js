const {DashboardModel}=require("../MODEL/dashboard.mod")

async function employeePatch(req,res){
    try{
    const id=req.params.id;
    const updatemployee=await DashboardModel.findByIdAndUpdate(
        id,
        req.body,
        {new:true}
    );
    res.status(200).send(updatemployee);
    }catch(err){
        res.status(200).send({"msg":err.message})
    }
    }

    module.exports={
        employeePatch
    }