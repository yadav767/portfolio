const express =require("express");
const cors=require("cors")
const portfolioRouter=require("./routes/portfolio.route")
const app=express();

app.use(cors({
    origin:process.env.FRONTEND_URL,
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))
app.use(express.json());

app.use("/api/portfolio",portfolioRouter)



module.exports=app