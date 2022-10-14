const mongoose = require('mongoose')
const { Schema } = mongoose;

const sessionSchema = new Schema({
    title:  { type:String,required:true },
    price: String,
    instructor: String,
    content:   String,
    image: String,
    //date : {type: String , required: [ true, 'Add date']},
    createDate: { type: Date, default: Date.now() },
    isActive: { type:Boolean, default:true },

});

const sessionModel=mongoose.model("sessions",sessionSchema)

module.exports=sessionModel