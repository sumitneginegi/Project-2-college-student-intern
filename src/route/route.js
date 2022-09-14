//=====================Importing Module and Packages=====================//
const express = require('express');
const router = express.Router();

const {createColleges}=require("../controller/collegeController")
const {createIntern,getIntern}=require("../controller/internController")




router.post("/functionup/colleges",createColleges)

router.post("/functionup/interns",createIntern)

router.post("/functionup/collegeDetails",getIntern)





//=====================Module Export=====================//
module.exports = router;   