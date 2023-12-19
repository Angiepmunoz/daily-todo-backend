const express = require("express");
const todoList = express.Router();
const { getAllItems } = require("../queries/todolist.js");

todoList.get("/", async (req, res) => {
  const allItems = await getAllItems();
  console.log(getAllItems);
  if (allItems[0]) {
    res.status(200).json(allItems);
  } else {
    res.status(404).json({ error: "list items not found" });
  }
});

module.exports = todoList;
