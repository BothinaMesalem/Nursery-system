/**
 * @swagger
 * /class:
 *   get:
 *     description: Returns a list of classes
 *     responses:
 *       200:
 *         description: A list of classes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: './../Model/class.json'
 *   post:
 *     description: Insert data into classes
 *     responses:
 *       201:
 *         description: Inserted data in classes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: './../Model/class.json'
 *   put:
 *     description: Update classes
 *     responses:
 *       200:
 *         description: Updated classes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: './../Model/class.json'
 * put:
 *     description: delete classes
 *     responses:
 *       200:
 *         description: delete classes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: './../Model/class.json'
 */
const express=require("express");
const controller=require("./../Controller/classcontrol");
const router=express.Router();
const classValidation=require("./../MW/valdition/classvaldition");
const validator=require("./../MW/valdition/validtor");
const {isAdmin}=require("./../MW/AuthMw");

router.route("/class")
.get(controller.getclasses)
.post(classValidation.insertArray,validator,controller.insertclass)
.put(classValidation.insertArray,validator,controller.updateclass)
.delete(controller.deleteclass);



router.get("/class/:id",controller.getclassbyid);
router.get ("/classchilden/:id",controller.getclasschilden);
router.get("/ClassTeacher/:id",controller.getClassTeacher);
module.exports=router;