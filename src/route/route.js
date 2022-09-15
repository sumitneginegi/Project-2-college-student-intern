//=====================Importing Module and Packages=====================//
const express = require('express');
const router = express.Router();

const {createColleges}=require("../controller/collegeController")
const {createIntern,collegeDetails}=require("../controller/internController")



//=====================Create Colleges(Post API)=====================//
router.post("/functionup/colleges",createColleges)

//=====================Create Interns(Post API)=====================//
router.post("/functionup/interns",createIntern)

//=====================Fetch College Details(Get API)=====================//
router.get("/functionup/collegeDetails",collegeDetails)





//=====================Module Export=====================//
module.exports = router;   