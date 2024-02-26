const mongoose=require("mongoose");

const schema=new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
    },
    email:{
        type: String,
        required: true,

    },
    password:{
        type: String,
        required: true
    },
    role:{
        type:String,
        enum:["teacher","admin"],
        required: true
    },
    image:String,

});

schema.pre('save', async function(next) {
    const teacher = this;
    if (!teacher.isModified('password')) {
        return next();
    }
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(teacher.password, saltRounds);
        teacher.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});
module.exports=mongoose.model("teachers",schema);
