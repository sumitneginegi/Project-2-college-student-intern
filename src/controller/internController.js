let collegeModel= require("../models/collegeModel")
let internModel= require("../models/internModel")

const createIntern = async (req, res) => {
    try {
        if (Object.keys(req.body).length == 0) {
            return res.status(400).send({ Error: "Body  should be not emety" })
        }
        let body = req.body
        if (!(body.name && body.mobile && body.email && body.collegeId)) {
            return res.status(400).send({ status: false, msg: " Body must contain name , mobile ,email ,collegeName !" })
        }
       
       let data= await collegeModel.find({_id:body.collegeId})
       
        if (!data) {
            return res.status(404).send({ status: false, msg: "collegeId not found" })
        }

        let intern=await collegeModel.create(data)
        return res.status(201).send({status:true,msg:intern})

    }
    catch (error) {
        return res.status(500).send({ status: false, msg: error.message })
    }


}
// const createblog = async (req, res)=>{

//     try {
//         if (Object.keys(req.body).length == 0) {
//             return res.status(400).send({ Error: "Body should be not empty" })
//         }
//         let body = req.body
//         if(!(body.name && body.mobile && body.email && body.collegeId)){
//             return res.status(400).send({status:false,msg:" Body must contain name,mobile,email,collegeId !"})
//         }

//         let id=req.body.collegeId
        
//         let college=await collegeModel.findById({_id:id})
//         if(!college){
//             return res.status(404).send({status:false,msg:"college not found"})
//         }

//         let data = new Blogmodel(req.body)
//         let result = await data.save()
//         res.status(201).send({status:true,data:result})
//     }
//     catch (error) {
//         return res.status(500).send({status:false,msg:error.message})
//     }


// }


module.exports={createIntern}

