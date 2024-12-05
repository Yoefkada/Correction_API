// validation for tag with express-validator
const { validationResult, check } = require("express-validator")

// Validation : Post, Put, Patch
const validation = {
    tagValidation : [
        check('title')
        .notEmpty()
        .withMessage('Tag title is required')
        .isString()
        .withMessage('Tag title must be a string')
    ]
}

const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors)
    if (!errors.isEmpty()) {
        const firstErrors = errors.array(0).msg; //get the first error message
        return res.status(422).json({ message: firstErrors }) //return only the first error message
    }
    next();
};

module.exports = {
    validation,
    handleValidationErrors,
}