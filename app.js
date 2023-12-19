const express = require("express");
const app = express();
const cors = require("cors");
const todoListsController = require('./controllers/todoList.js')

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("we made it");
});

app.use('/todo-list', todoListsController);

module.exports = app;