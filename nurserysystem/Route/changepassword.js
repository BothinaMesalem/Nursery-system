
const express = require('express');
const bcrypt = require('bcrypt');
const teacher = require('./../Models/teacherSchema');


const router = express.Router();


router.put('/teachers/change-password/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { currentPassword, newPassword, confirmPassword } = req.body;

      
        const existingTeacher = await teacher.findById(id);

       
        if (!existingTeacher) {
            return res.status(404).json({ error: 'Teacher not found' });
        }

     
        const isPasswordValid = await bcrypt.compare(currentPassword, existingTeacher.password);
        if (!isPasswordValid) {
            return res.status(400).json({ error: 'Incorrect current password' });
        }

       
        if (newPassword !== confirmPassword) {
            return res.status(400).json({ error: 'New password and confirm password do not match' });
        }
        if (newPassword.length < 8) {
            return res.status(400).json({ error: 'New password must be at least 8 characters long' });
        }

   
        const hashedPassword = await bcrypt.hash(newPassword, 10);

    
        existingTeacher.password = hashedPassword;
        await existingTeacher.save();

     
        res.json({ message: 'Password changed successfully' });
    } catch (error) {
        console.error('Error changing password:', error);
        res.status(500).json({ error: 'Server error' });
    }
});


module.exports = router;
