const mongoose=require("mongoose");

const schema=new mongoose.Schema({
    _id:Number,
    fullName: {
        firstName: String,
        lastName: String,
    },
    age: Number,
    level: {
        type: String,
        enum: ["PREKG", "KG", "KJ2"]
    },
    address: {
        city: {
            type: String
        },
        street: {
            type: String
        },
        building: {
            type: String
        }
    },
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'class' 
    },
    image:String,

});
module.exports=mongoose.model("children",schema);
mongoose.set('strictPopulate', false);