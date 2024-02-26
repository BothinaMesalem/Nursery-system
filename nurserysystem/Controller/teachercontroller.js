const bodyParser = require("body-parser");
const Teacher = require("../Model/teacher");
const { insertArray } = require("../MW/valdition/teachervaldition");

exports.getAllTeachers = (req, res, next) => {
    Teacher.find({})
    .populate({path:"class",select:{name:1}})
    .then((data)=>{
        res.status(200).json(data);  
    })
    .catch(error=>next(error))
}

exports.insertTeacher = (req, res, next) => {
    const { id, fullname, email, password } = req.body;
    const file = req.file; 
    
    const newTeacher = new Teacher({
        id: id,
        fullname: {
            firstname: fullname.firstname,
            lastname: fullname.lastname
        },
        email: email,
        password: password,
        image: (file && file.path)  || null
    });

    newTeacher.save()
        .then((data) => {
            res.status(201).json({ message: "Data Added Successfully", data });
        })
        .catch((error) => {
            next(error);
        });
};
    


exports.updateTeacher = (req, res, next) => {
    const teacherId = req.body._id;
    const newData = req.body;
    Teacher.findByIdAndUpdate(teacherId, newData, { new: true })
        .then(updatedTeacher => { 
            if (!updatedTeacher) {
                throw new Error('Teacher not found');
            }
            res.status(200).json({ data: updatedTeacher });
        })
        .catch(error => next(error));
}

exports.deleteTeacher = (req, res, next) => {
    const teacherId = req.params.id;
    Teacher.findByIdAndDelete(teacherId)
        .then(data => {
            if (!data) {
                throw new Error('Teacher not found');
            }
            res.status(200).json({ message: "Teacher deleted successfully" });
        })
        .catch(error => next(error));
}

exports.getTeacherById = (req, res, next) => {
    const teacherId = req.params.id;
    Teacher.findById(teacherId)
        .then(foundTeacher => {
            if (!foundTeacher) {
                throw new Error('Teacher not found');
            }
            res.status(200).json({ data: foundTeacher });
        })
        .catch(error => next(error));
}
