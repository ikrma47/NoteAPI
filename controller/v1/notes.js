const db = require("../../db");

async function createNote(req, res, next) {
  try {
    const { title, content, author } = req.body.data;
    await db("notes").insert({
      title,
      content,
      author,
    });
    return res.status(201).json(req.body);
  } catch (error) {
    console.log(error);
    return next(error);
  }
}

async function getNotes(req, res, next) {
  try {
    const items = await db
      .select("id", "title", "content", "author", "date")
      .from("notes")
      .where("is_deleted", false);

    return res.json({
      data: { items },
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
}

module.exports = {
  createNote,
  getNotes,
};
