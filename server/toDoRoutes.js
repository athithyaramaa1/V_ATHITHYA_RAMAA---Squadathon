const express = require("express");
const { getToDo, createTodo, updateToDo, deleteToDo } = require("./toDoController");
const router = express.Router();

router.get("/", getToDo);
router.post('/create-todo', createTodo)
router.put("/update-todo/:id", updateToDo)
router.delete("/delete-todo/:id", deleteToDo)

module.exports = router;
