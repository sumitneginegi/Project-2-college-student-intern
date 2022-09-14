let collegeModel = require("../models/collegeModel")
let internModel = require("../models/internModel")


let createIntern = async function (req, res) {
    try {
        let data = req.body

        if (Object.keys(data).length == 0) {
            res.status(200).send({ status: false, msg: "Body input is necessary" })
        }

        let { name, email, mobile, collegeName } = data

        if (!(name && email && mobile && collegeName)) {
            res.status(200).send({ status: false, msg: "Mandatory fields are required" })
        }

        let clg = await collegeModel.findOne({ isDeleted: false, name: collegeName })
        if (!clg) { res.status(404).send({ status: false, msg: "Plz put correct college Name" }) }

        let obj = { ...data, collegeId: clg._id }

        let guru = await internModel.create(obj)
        res.status(201).send({ status: true, data: guru })


    } catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }
}

let getIntern = async function (req, res) {
    try {
        let collegeName = req.query.collegeName
        console.log(collegeName)

        let getC = await collegeModel.findOne({ name: collegeName, isDeleted: false })
        if (!getC) { res.status(404).send({ status: false, msg: "No College Found with Given CollegeName" }) }

        let data = { name: getC.name, fullName: getC.fullName, logoLink: getC.logoLink }

        let intern = await internModel.find({ collegeId: getC._id, isDeleted: false })
        if (!intern) { res.status(404).send({ status: false, msg: "No Intern Available in this College" }) }
        else {
            data.intern = intern
            return res.status(200).send({ status: true, data: data })
        }
       
       

    }

    catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }

}

module.exports = { createIntern, getIntern }
