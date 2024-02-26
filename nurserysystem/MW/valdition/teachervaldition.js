const { body } = require("express-validator");

exports.insertArray = [
    body("id").isInt().withMessage("Teacher ID should be an integer!"),
    body("fullname.firstname").isString().withMessage("First name should be a string").isLength({ min: 3 }).withMessage("First name must be at least 3 characters"),
    body("fullname.lastname").isString().withMessage("Last name should be a string").isLength({ min: 3 }).withMessage("Last name must be at least 3 characters"),
    body("email").isEmail().withMessage("Invalid email format")
];
