const express =require("express");
const cors=require("cors")
const portfolioRouter=require("./routes/portfolio.route")
const app=express();

app.use(cors())
app.use(express.json());

app.use("/api/portfolio",portfolioRouter)



module.exports=app