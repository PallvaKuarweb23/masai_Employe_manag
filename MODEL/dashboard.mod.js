const mongoose=require("mongoose")

const dashboardSchema=mongoose.Schema({
    First_Name:{type:String,required:true},
    Last_Name:{type:String,required:true},
    Email:{type:String,required:true},
    Department :{type:String,required:true},
    
    Salary:{type:Number,required:true},

    
})

const DashboardModel=mongoose.model("Employee",dashboardSchema)

module.exports={
    DashboardModel
}