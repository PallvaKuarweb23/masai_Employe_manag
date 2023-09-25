const {DashboardModel}=require("../MODEL/dashboard.mod")





async function employeeGet(req,res){
    try{
    const employee=await DashboardModel.find();
    res.status(200).send(employee)
    }catch(err){
        res.status(200).send({"msg":err.message})
    }
    }

    module.exports={
        employeeGet
    }