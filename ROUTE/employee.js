const express=require("express")
const {employeeGet}=require("../CONTROLLER/dasbo.get")
const {dashboardpost}=require("../CONTROLLER/dasbo.add")
const {emplyeeDelete}=require("../CONTROLLER/desbo.del")
const {employeePatch}=require("../CONTROLLER/desbo.pat")


const employeeRouter=express.Router()

employeeRouter.post("/add",dashboardpost)



employeeRouter.get("/get",employeeGet)



employeeRouter.patch("/edit/:id",employeePatch)


employeeRouter.delete("/delete/:id",emplyeeDelete)


module.exports={
    employeeRouter
}