const router = require('express').Router();
const { createNote } = require('../../controller/v1/notes');

router.post('/notes', createNote);
module.exports = router;