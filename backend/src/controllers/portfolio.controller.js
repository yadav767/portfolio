
const { introModel, aboutModel, contactModel, projectsModel, experienceModel } = require("../models/portfolio.model")


async function getAllDataController(req, res) {
    try {
        const intros = await introModel.find();
        const abouts = await aboutModel.find();
        const contacts = await contactModel.find();

        const projects = await projectsModel.find();
        const experiences = await experienceModel.find();

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

async function updateAboutController(req, res) {
    const { lottieURL, description1, description2 ,skills} = req.body
    try {
        const updatedAbout = await aboutModel.findOneAndUpdate({ _id: req.body._id }, {
            lottieURL, description1, description2,skills
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

module.exports = {
    getAllDataController, updateIntroController, updateAboutController
}