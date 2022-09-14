let collegeModel= require("../models/collegeModel")
let internModel= require("../models/internModel")

const createIntern = async (req, res) => {
    try {
        if (Object.keys(req.body).length == 0) {
            return res.status(400).send({ Error: "Body should not be Empty!"})
        }
        let data = req.body
        let{name,email,mobile,collegeId}=data
        if (!(name && email && mobile && collegeId )) {
            return res.status(400).send({ status: false, msg: " Body must contain name , mobile ,email ,collegeName !" })
        }
       
       let clgId= await collegeModel.findById(collegeId)
       
        if (!clgId) {
            return res.status(404).send({ status: false, msg: "collegeId not found" })
        }

        let intern=await collegeModel.create(clgId)
        return res.status(201).send({status:true, data:intern})

    }
    catch (error) {
        return res.status(500).send({ status: false, msg: error.message })
    }


}


module.exports={createIntern}

