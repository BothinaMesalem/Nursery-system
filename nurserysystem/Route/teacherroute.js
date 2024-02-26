/**
 * @swagger
 * /teacher:
 *   get:
 *     description: Returns a list of teachers
 *     responses:
 *       200:
 *         description: A list of teachers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: './../Model/teacher.json'
 *   post:
 *     description: Insert data into teacher
 *     responses:
 *       201:
 *         description: Inserted data in teacher
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: './../Model/teacher.json'
 *   put:
 *     description: Update teacher
 *     responses:
 *       200:
 *         description: Updated teacher
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: './../Model/teacher.json'
 * put:
 *     description: delete teacher
 *     responses:
 *       200:
 *         description: delete teacher
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: './../Model/teacher.json'
 */
const express=require("express");
const controller=require("./../Controller/teachercontroller");
const {insertArray}=require("./../MW/valdition/teachervaldition");
const validator = require("./../MW/valdition/validtor");
const {isAdmin}=require("./../MW/AuthMw");
const upload = require("../MW/upload")


const router= express.Router();

router.route("/teacher")
        .all(isAdmin)
        .get(insertArray,validator,controller.getAllTeachers)
        .post(insertArray,validator,upload,controller.insertTeacher)
        .patch(insertArray,validator,controller.updateTeacher)
        .delete(insertArray,validator,controller.deleteTeacher)

router.get("/teacher/:id",controller.getTeacherById)
module.exports=router;