const departSchema = require("../models/DepartSchema");

const addDepart = async (req, res) => {
    try {

        const { namedep, functiondep, ressources, staff, budget } = req.body
        console.log(req.body)
        if (!namedep || !functiondep || !ressources || !staff || !budget  ) {
            return res.status(200).send(" Ces informations sont obligatoire")
        }
        const departfound = await departSchema.findOne({ namedep })
        if (departfound) {
            return res.status(400).send("Le departement est déja enregistre")
        }

        const newDepart = new departSchema({
            namedep,
            functiondep,
            ressources,
            staff,
            budget,
        })
        console.log(newDepart)

        await newDepart.save()
        res.status(200).send({ msg: "departement ajouteé", newDepart })

    } catch (error) {
        console.log(error)
        res.status(500).send("Impossible d'ajouter le departement")
    }

}

const getDepart = async (req, res) => {

    try {

        const departments = await Departments.find()
        res.status(200).send({ msg: "tous les departments", departments })

    } catch (error) { res.status(500).send("Impossible de voir les departements") }
}

const updateDepart = async (req, res) => {

    try {

        const { Id } = req.params

        const departement = await Department.findOneAndUpdate(
            { _id: Id },
            { $set: { ...req.body } }
        )

        res.status(200).send({ msg: "Projet ajouter", departement })

    } catch (error) { res.status(500).send("Impossible de modifier les departements") }
}

const delDepart = async (req, res) => {

    try {

        const { Id } = req.params
        const departement = await Department.findByIdAndDelete(Id)
        res.status(200).send({ msg: " departement supprimer", departement })

    } catch (error) { res.status(500).send("Impossible de supprimer") }
}

module.exports = { addDepart, getDepart, updateDepart, delDepart };