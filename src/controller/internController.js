let collegeModel= require("../models/collegeModel")
let internModel= require("../models/collegeModel")

const createIntern = async (req, res) => {
    try {
        if (Object.keys(req.body).length == 0) {
            return res.status(400).send({ Error: "Body  should be not emety" })
        }
        let body = req.body
        if (!(body.name && body.mobile && body.email && body.collegeName)) {
            return res.status(400).send({ status: false, msg: " Body must contain name , mobile ,email ,collegeName !" })
        }
        let id = req.body
       let data= await collegeModel .find({id:body})
        return res.status(404).send({ status: false, msg: "CollegeId invalid" });
          }
        let college = await collegemodel.findById(id)
        if (!college) {
            return res.status(404).send({ status: false, msg: "User not found" })
        }
       
        let data = new internModel(req.body)
        let result = await data.save()
        let ig=result._id.toString()
        if(result.isPublished==true){
            result =await Intern.findOneAndUpdate({_id:ig},{$set:{ispublishedAt:Date.now()}},{new:true})
        }
        res.status(201).send({ status: true, data: result })
    }
    catch (error) {
        return res.status(500).send({ status: false, msg: error.message })
    }


}

module.exports={createIntern}

