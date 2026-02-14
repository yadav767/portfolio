const express = require("express");
const { getAllDataController, 
    updateIntroController, 
    updateAboutController, 
    updateExperienceController, 
    addExperienceController, 
    deleteExperienceController ,
    addProjectController,
    updateProjectController,
    deleteProjectController,
    updateContactController,
    loginAdminController} = require("../controllers/portfolio.controller");

const router = express.Router();
//Get data API
router.get("/get-portfolio-data", getAllDataController)


//Update intro
router.put("/update-intro", updateIntroController)

//Update about
router.put("/update-about", updateAboutController)

//Add Experience
router.post("/add-experience", addExperienceController)

//update expeirence
router.put("/update-experience", updateExperienceController)

//Delete experience
router.post("/delete-experience", deleteExperienceController)


//Add project
router.post("/add-project", addProjectController)

//Update project
router.put("/update-project", updateProjectController)

//Delete project
router.post("/delete-project", deleteProjectController)

//Updatecontact
router.put("/update-contact", updateContactController)

//User Admin login
router.post("/admin-login",loginAdminController)


module.exports = router