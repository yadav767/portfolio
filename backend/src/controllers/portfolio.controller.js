const userModel = require("../models/user.model")
const { introModel, aboutModel, contactModel, projectsModel, experienceModel } = require("../models/portfolio.model")



//Get all data 
async function getAllDataController(req, res) {
    try {
        const intros = await introModel.find();
        const abouts = await aboutModel.find();
        const contacts = await contactModel.find();

        const experiences = await experienceModel.find();
        const projects = await projectsModel.find();

        res.status(200).send({
            intros: intros[0],
            abouts: abouts[0],
            projects: projects,
            experiences: experiences,
            contacts: contacts
        })
    } catch (error) {
        res.status(500).send(error)
    }
}


//Update intro controller
async function updateIntroController(req, res) {
    const { welcomeText, firstName, lastName, caption, description } = req.body
    try {
        const updatedIntro = await introModel.findOneAndUpdate({ _id: req.body._id }, {
            welcomeText, firstName, lastName, caption, description
        }, { new: true })

        res.status(200).send({
            data: updatedIntro,
            success: true,
            message: "Intro Updated successfully!"
        })
    } catch (error) {
        res.status(500).send(error)
    }
}


//Update about controller
async function updateAboutController(req, res) {
    const { lottieURL, description1, description2, skills } = req.body
    try {
        const updatedAbout = await aboutModel.findOneAndUpdate({ _id: req.body._id }, {
            lottieURL, description1, description2, skills
        }, { new: true })

        res.status(200).send({
            data: updatedAbout,
            success: true,
            message: "About Updated successfully!"
        })
    } catch (error) {
        res.status(500).send(error)
    }
}


//Add new experience
async function addExperienceController(req, res) {
    const { title, period, company, description } = req.body
    try {
        const newExperience = await experienceModel.create({
            title, period, company, description
        })
        res.status(200).send({
            data: newExperience,
            success: true,
            message: "Experience created successfully!"
        })
    } catch (error) {
        res.status(500).send(error)
    }
}


//Update experience
async function updateExperienceController(req, res) {
    const { title, period, company, description, _id } = req.body
    try {
        const updateExperience = await experienceModel.findByIdAndUpdate({ _id: _id }, {
            title, period, company, description
        })
        res.status(200).send({
            data: updateExperience,
            success: true,
            message: "Experience updated successfully!"
        })
    } catch (error) {
        res.status(500).send(error)
    }
}


//delete experience
async function deleteExperienceController(req, res) {
    const { _id } = req.body
    try {
        const deletedExperience = await experienceModel.findByIdAndDelete({ _id: _id })
        res.status(200).send({
            data: deletedExperience,
            success: true,
            message: "Experience deleted successfully!"
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

//Add new project controller
async function addProjectController(req, res) {
    const { technologies, title, image, description, link } = req.body
    try {
        const newProject = await projectsModel.create({
            technologies, title, image, description, link
        })
        res.status(200).send({
            data: newProject,
            success: true,
            message: "Project created successfully!"
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

//Update project controller 
async function updateProjectController(req, res) {
    const { technologies, title, image, description, link, _id } = req.body
    try {
        const updatedPreject = await projectsModel.findByIdAndUpdate({ _id: _id }, {
            technologies, title, image, description, link
        }, { new: true })
        res.status(200).send({
            data: updatedPreject,
            success: true,
            message: "Project updated successfully!"
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

//Delete project controller
async function deleteProjectController(req, res) {
    const { _id } = req.body
    try {
        const deletedProject = await projectsModel.findByIdAndDelete({ _id: _id })
        res.status(200).send({
            data: deletedProject,
            success: true,
            message: "Project deleted successfully!"
        })
    } catch (error) {
        res.status(500).send(error)
    }
}


//Update contact
async function updateContactController(req, res) {
    const { name, age, gender, email, mobile, address, _id } = req.body
    try {
        const updatedContact = await contactModel.findOneAndUpdate({ _id: _id },
            { name, age, gender, email, mobile, address }, { new: true }
        )

        res.status(200).send({
            data: updatedContact,
            success: true,
            message: "Contact updated  successfully!"
        })

    } catch (error) {
        res.status(500).send(error)
    }
}


//Admin login controller
async function loginAdminController(req, res) {
    const { username, password } = req.body
    try {
        const user = await userModel.findOne({ username, password })
        user.password = undefined
        if(user){
            res.status(200).send({
                data:user,
                success:true,
                message:"Login successfully!"
            })
        }else{
            res.status(200).send({
                success:false,
                message:"Invalid username or password"
            })
        }
    } catch (error) {
        res.status(500).send(error)
    }
}


module.exports = {
    getAllDataController,
    updateIntroController,
    updateAboutController,
    addExperienceController,
    updateExperienceController,
    deleteExperienceController,
    addProjectController,
    updateProjectController,
    deleteProjectController,
    updateContactController,
    loginAdminController
}