//=====================Importing Module and Packages=====================//
const express = require('express');
const router = express.Router();
const {createColleges}=require("../controller/collegeController")
const {createIntern}=require("../controller/internController")




router.post("/functionup/colleges",createColleges)
router.post("/functionup/interns",createIntern)





//=====================Module Export=====================//
module.exports = router;   