
/**
 * @swagger
 * /child:
 *   get:
 *     description: Returns a list of child
 *     responses:
 *       200:
 *         description: A list of child
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: './../Model/child.json'
 *   post:
 *     description: Insert data into child
 *     responses:
 *       201:
 *         description: Inserted data in child
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: './../Model/child.json'
 *   put:
 *     description: Update child
 *     responses:
 *       200:
 *         description: Updated child
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: './../Model/child.json'
 * put:
 *     description: delete child
 *     responses:
 *       200:
 *         description: delete child
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: './../Model/child.json'
 */
const express=require("express");
const controller=require("../Controller/childcontroller");
const ChildValidation=require("./../MW/valdition/childvaldition");
const validator = require("./../MW/valdition/validtor");
const {isAdmin}=require("./../MW/AuthMw");

const routes=express.Router();
routes.route("/child")
.all(isAdmin)
.get(controller.getchildren)
.post(ChildValidation.insertArray,validator,controller.insertchild) 
.put(ChildValidation.insertArray,validator,controller.updatechild)
.delete(controller.deletechild);
routes.get("/child/:id",controller.getchildById);

module.exports=routes;