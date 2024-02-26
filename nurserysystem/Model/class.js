const mongoose=require("mongoose");

const schema=new mongoose.Schema({
    _id:Number,
    name:{
        type: String,
        required: true
    },
    supervisor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'teachers'
      },
    children: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'children'
        }
    ],
});
module.exports=mongoose.model("classes",schema);