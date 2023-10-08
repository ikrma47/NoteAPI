const router = require('express').Router();
const { createNote, getNotes } = require('../../controller/v1/notes');

router.post('/notes', createNote);
router.get('/notes', getNotes);

module.exports = router;