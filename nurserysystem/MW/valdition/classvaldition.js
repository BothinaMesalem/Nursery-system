const { body, param, query } = require("express-validator");
exports.insertArray = [
        body("id").isInt().withMessage("class Id should be integer !"),
        body("name").isString().withMessage("class name should be string").isLength({ min: 3 }).withMessage("first name must be at least 3 characters"),
        body("supervisor")
        .isMongoId().withMessage("Supervisor must be a valid MongoDB ObjectID"),
        body("children").isMongoId().withMessage("Children must be valid MongoDB ObjectIDs"), 

];