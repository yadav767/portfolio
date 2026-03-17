const express =require("express");
const path=require("path")
const cors=require("cors")
const portfolioRouter=require("./routes/portfolio.route")
const app=express();

app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is live.....");
    console.log("server is live");
})


app.use("/api/portfolio",portfolioRouter)



module.exports=app