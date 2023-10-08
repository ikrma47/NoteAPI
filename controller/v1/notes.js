const db = require("../../db");

async function createNote(req, res, next) {
  try {
    const { title, content, author } = req.body;
    await db("notes").insert({
      title,
      content,
      author,
    });
    return res.json(req.body);
  } catch (error) {
    console.log(error);
    return next(error);
  }
}

module.exports = {
  createNote,
};
