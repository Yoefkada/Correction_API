const express = require('express');
const router = express.Router();
const { addTags } = require('../controllers/notecontrollers');

router.post('/tags', addTags);

module.exports = router;