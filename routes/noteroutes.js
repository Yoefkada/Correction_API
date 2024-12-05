const express = require('express');
const router = express.Router();
const { addTags, getTags, getTagById, updateTag, deleteTag } = require('../controllers/notecontrollers');
const { validation, handleValidationErrors } = require('../utils/validator');


router.post('/tags', validation.tagValidation, handleValidationErrors ,addTags);
router.get('/tags', getTags);
router.get('/tags/:id', getTagById);
router.put('/tags/:id', validation.tagValidation, handleValidationErrors, updateTag);
router.delete('/tags/:tagId', deleteTag);



module.exports = router;