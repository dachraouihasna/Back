const projectSchema = require("../models/projectShema");

const addProject = async (req, res) => {
    try {

        const { name, clientname, specification, idleader, receivedate, deliverydate, price } = req.body
        console.log(req.body)
        if (!name || !clientname || !specification || !idleader || !receivedate || !deliverydate || !price ) {
            return res.status(200).send(" Ces informations sont obligatoire")
        }
        const projectfound = await projectSchema.findOne({ name })
        if (projectfound) {
            return res.status(400).send("Le projet est déja enregistrer")
        }

        const newProject = new projectSchema({
            name,
            clientname,
            specification,
            idleader,
            receivedate,
            deliverydate,
            price,
        })
        console.log(newProject)

        await newProject.save()
        res.status(200).send({ msg: "projet ajouter", newProject })

    } catch (error) {
        console.log(error)
        res.status(500).send("Impossible d'ajouter le projet")
    }

}

const getProject = async (req, res) => {

    try {

        const projects = await Project.find()
        res.status(200).send({ msg: "tous les projets", projects })

    } catch (error) { res.status(500).send("Impossible de voir les projets") }
}

const updateProject = async (req, res) => {

    try {

        const { Id } = req.params

        const project = await Project.findOneAndUpdate(
            { _id: Id },
            { $set: { ...req.body } }
        )

        res.status(200).send({ msg: "Projet ajouter", project })

    } catch (error) { res.status(500).send("Impossible de modifier les projets") }
}

const delProject = async (req, res) => {

    try {

        const { Id } = req.params
        const project = await Project.findByIdAndDelete(Id)
        res.status(200).send({ msg: " projet supprimer", project })

    } catch (error) { res.status(500).send("Impossible de supprimer") }
}

module.exports = { addProject, getProject, updateProject, delProject };