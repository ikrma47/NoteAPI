const router = require('express').Router();
const { createNote, getNotes, deleteNote } = require('../../controller/v1/notes');

router.post('/notes', createNote);
router.get('/notes', getNotes);
router.delete('/notes/:id', deleteNote);

module.exports = router;