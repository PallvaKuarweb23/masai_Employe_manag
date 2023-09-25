const express=require("express")
const {connection}=require("./db")
const {userRouter}=require("./ROUTE/user.sign")
const {employeeRouter}=require("./ROUTE/employee")
const {auth}=require("./MIDDILEWARE/auth")
require(`dotenv`).config();


const app=express()

app.use(express.json())


app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.use("/user",userRouter)
app.use(auth)
app.use("/Employee",employeeRouter)





app.listen(process.env.port,async()=>{
    try{

        await connection
        console.log("Connected to DB")

    }catch(err){
        console.log("Connection failed to DB")
        console.log(err)
    };

    console.log(`Server is running at ${process.env.port}`)
})