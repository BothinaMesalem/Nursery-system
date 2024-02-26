const { body, validationResult } = require('express-validator');


exports.insertArray = [
    body("id").isInt().withMessage("Id should be an integer!"),
    body("fullName.firstName").isString().withMessage(" first name should be a string").isLength({ min: 3 }).withMessage("First name must be at least 3 characters"),
    body("fullName.lastName").isString().withMessage(" last name should be a string").isLength({ min: 3 }).withMessage("Last name must be at least 3 characters"),
    body("age").isInt().withMessage("Child's age should be an integer"),
    body("level").isIn(["PREKG", "KG", "KJ2"]).withMessage("Level must be one of these: 'PreKG', 'KG1', or 'KG2'"),
    body("address.city").isString().withMessage("City should be a string!").isLength({ min: 3 }).withMessage("City length should be at least 3 characters"),
    body("address.street").isString().withMessage("Street should be a string!").isLength({ min: 3 }).withMessage("Street length should be at least 3 characters"),
    body("address.building").isString().withMessage("Building should be a string!").isLength({ min: 3 }).withMessage("Building length should be at least 3 characters")
];

