//=====================Importing Module and Packages=====================//
const mongoose = require("mongoose")
const ObjectID=mongoose.Schema.Types.ObjectID

const internSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
        unique: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    mobile:{
        type: String,
        require: true,
        unique: true,
        
        },
    collegeId:{
        type: ObjectID,
        ref: "College"
    
    },
    isDeleted:{
        type: Boolean,
        default: false
    },

} )

module.exports = mongoose.model("Intern", internSchema)
