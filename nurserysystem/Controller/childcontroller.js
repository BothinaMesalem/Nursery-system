const bodyParser = require("body-parser");
const child =require ("../Model/child");
const { insertArray } = require("../MW/valdition/childvaldition");
exports.getchildren=(req,res,next)=>{
    child.find({})
    .populate({path:"class",select:{name:1}})
    .then((data)=>{
        res.status(200).json(data);  
    })
    .catch(error=>next(error))
 }
exports.insertchild=(req,res,next)=>{
    let obj=new child(req.body);
    obj.save().then((data)=>{
       res.status(201).json({message:"Data Added Successfully",data});
    }

    ).catch((error)=>{
        next(error);
    });
 }
 
exports.updatechild=(req,res,next)=>{
    const childId = req.body._id;
    const newData = req.body;
    Child.findByIdAndUpdate(childId, newData, { new: true })
        .then(updatedChild => {
            if (!updatedChild) {
                throw new Error('Child not found');
            }
            res.json({ message: "Child data updated successfully", data: updatedChild });
        })
        .catch(error => next(error));
 }
 
 exports.deletechild = (req, res, next) => {
    const childId = req.params.id; 
    Child.deleteOne({ _id: childId })
        .then(result => {
            if (result.deletedCount === 0) {
                throw new Error('Child not found');
            }
            res.status(200).json({ message: "Child deleted successfully" });
        })
        .catch(error => next(error));
}

 exports.getchildById = (req, res, next) => {
    const childId = req.params.id; 
    Child.findById(childId)
        .then(child => {
            if (!child) {
                throw new Error('Child not found');
            }
            res.status(200).json(child);
        })
        .catch(error => next(error));
}