const express = require('express');
const router = express.Router();
const { addTags } = require('../controllers/notecontrollers');
const { validation, handleValidationErrors } = require('../utils/validator');


router.post('/tags', validation.tagValidation, handleValidationErrors ,addTags);

module.exports = router;