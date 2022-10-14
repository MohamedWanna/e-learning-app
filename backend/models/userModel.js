const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullName: {type: String, trim:true},
    email: {type: String, trim:true, lowercase:true},
    password: {type:String},
    createdDate: { type: Date, default: Date.now() },
    ban:{type:Boolean, default:false},
    role: {
        type: String,
        enum:["student","admin","superAdmin"],
        default:"student",
    },
});

module.exports = User = mongoose.model("user",userSchema)