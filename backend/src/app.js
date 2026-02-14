const express =require("express");
const path=require("path")
const cors=require("cors")
const portfolioRouter=require("./routes/portfolio.route")
const app=express();

app.use(cors())
app.use(express.json());
app.use(express.static(path.join(__dirname,"../Public")))

app.use("/api/portfolio",portfolioRouter)

app.get("*name",(req,res)=>{
    res.sendFile(path.join(__dirname,"../Public/index.html"))
})

module.exports=app