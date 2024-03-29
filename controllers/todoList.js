const express = require("express");
const todoList = express.Router();
const {
  getAllItems,
  getOneItem,
  updateItem,
  deleteItem,
  createItem,
  getItemsByMonthAndYear,
} = require("../queries/todolist.js");


todoList.get("/", async (req, res) => {
  const { month, year } = req.query;
  try {
    const items = month && year ? await getItemsByMonthAndYear(month,year) : await getAllItems();
    res.status(200).json(items);
  } catch (error) {
    res.status(404).json({ error });
  }
});

todoList.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const getItem = await getOneItem(id);
    res.status(200).json(getItem);
  } catch (error) {
    res.status(404).json({ error: `Item with id=${id} was not found` });
  }
});

todoList.post("/", async (req, res) => {
  const item = req.body;
  console.log(formmattedTask)
  try {
    const createdItem = await createItem(item);
    res.status(200).json(createdItem);
  } catch (error) {
    res.status(404).json({ error });
  }
});

todoList.put("/:id", async (req, res) => {
  const { id } = req.params;
  const item = req.body;
  try {
    const updatedItem = await updateItem(item);
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(404).json({ error });
  }
});

todoList.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedItem = await deleteItem(id);
    res.status(200).json(deletedItem);
  } catch (error) {
    res.status(404).json({ error });
  }
});

module.exports = todoList;
