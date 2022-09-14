let collegeModel= require("../models/collegeModel")
let internModel= require("../models/internModel")




const createColleges= async function(req,res){

    let data=req.body

    if (Object.keys(data).length == 0) {
        return res.status(400).send({ Error: "Body should be not empty" })
    }

    let { name, fullName, logoLink } = data
    if(!(name && fullName && logoLink)){
        res.status(400).send({status:false,msg:"Mandatory fields are required"})
    }


    let college=await collegeModel.create(data)
     return  res.status(201).send({status:true,msg:college})
    

}

module.exports={createColleges}







