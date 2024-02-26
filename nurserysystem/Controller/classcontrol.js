const Class= require("../Model/class");

exports.getclasses=(req,res,next)=>{
    Class.find({})
    .then(
            data => {
                    response.status(200).json(data)
            }
    ).catch(
            error => next(error)
    )
     
 }
exports.insertclass=(req,res,next)=>{

    const newClass = new Class(req.body);
    newClass.save()
        .then(data => {
            res.status(201).json(data);
        })
        .catch(error => next(error));
 }
 
exports.updateclass=(req,res,next)=>{
    const classId = req.params._id;
    const newData = req.body;
    Class.findByIdAndUpdate(classId, newData, { new: true })
        .then(updatedClass => {
            if (!updatedClass) {
                throw new Error('Class not found');
            }
            res.status(200).json({ message: "Class data updated successfully", data: updatedClass });
        })
        .catch(error => next(error));
 }
 
exports.deleteclass=(req,res,next)=>{
    const classId = req.params._id;
    Class.findByIdAndDelete(classId)
        .then(data => {
            if (!data) {
                throw new Error('Class not found');
            }
            res.status(200).json({ message: "Class deleted successfully" });
        })
        .catch(error => next(error));
 }
module.exports.getclassbyid=(req,res,next)=>{
    const classId = req.params._id;
    Class.findById(classId)
        .then(data => {
            if (!data) {
                throw new Error('Class not found');
            }
            res.status(200).json(data);
        })
        .catch(error => next(error));
}
module.exports.getclasschilden=(req,res,next)=>{
    res.json({data:"get classchildern"})
}
module.exports.getClassTeacher = (request, response, next) => {
    response.json({ data: "get classteacher " });
}