const db = require("../db");

module.exports = function initNotesTable() {
  return db.schema
    .hasTable("notes")
    .then(function (exists) {
      if (!exists) {
        return db.createTable("notes", (table) => {
          table.increments("id");
          table.string("title");
          table.string("content");
          table.string("author");
          table.boolean("is_deleted").defaultTo(false);
          table.date("date").defaultTo(db.fn.now(6));
        });
      }
      return "Table already exists!";
    })
    .then((response) => console.log(response));
};
