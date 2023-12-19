const express = require("express");
const todoList = express.Router();
const {
  getAllItems,
  getOneItem,
  updateItem,
  deleteItem,
  createItem,
} = require("../queries/todolist.js");

todoList.get("/", async (req, res) => {
  const allItems = await getAllItems();
  if (allItems[0]) res.status(200).json(allItems);
  else res.status(404).json({ error: "list of items not found" });
});

todoList.get("/:id", async (req, res) => {
  const { id } = req.params;
  const getItem = await getOneItem(id);
  if (getItem.id) res.status(200).json(getItem);
  else res.status(404).json({ error: `Item with id=${id} was not found` });
});

todoList.post("/", async (req, res) => {
  const item = req.body;
  const createdItem = await createItem(item);
  if (createdItem.id) res.status(200).json(createdItem);
  else res.status(404).json({ error: `Cannot create item at this time` });
});

todoList.put("/:id", async (req, res) => {
  const { id } = req.params;
  const item = req.body;
  const updatedItem = await updateItem(item);
  if (updatedItem.id) res.status(200).json(updatedItem);
  else res.status(404).json({ error: `Item with id=${id} could not be updated at this time` });
});

todoList.delete("/:id", async(req, res)=>{
    const {id} = req.params;
    const deletedItem = await deleteItem(id);
    if(deletedItem.id) res.status(200).json(deletedItem);
    else res.status(404).json({ error: `Item with id=${id} could not be deleted at this time` });
})

module.exports = todoList;
