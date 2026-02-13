const express = require("express");
const { getAllDataController, updateIntroController, updateAboutController } = require("../controllers/portfolio.controller");

const router = express.Router();
//Get data API
router.get("/get-portfolio-data", getAllDataController)


//Update intro
router.put("/update-intro",updateIntroController)

//Update about
router.put("/update-about",updateAboutController)


module.exports = router