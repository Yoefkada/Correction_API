const express = require('express');
const router = express.Router();
const { addTags } = require('../controllers/notecontrollers');
const { validation } = require('../utils/validator');


router.post('/tags', validation.tagValidation ,addTags);

module.exports = router;