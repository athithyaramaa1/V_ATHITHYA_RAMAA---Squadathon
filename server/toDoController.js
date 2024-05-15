const asyncHandler = require("express-async-handler");

const toDo = require("./toDoModel");

const getToDo = asyncHandler(async (req, res) => {
  try {
    const todo = await toDo.find({});
    res.status(200).json(todo);
  } catch (error) {
    console.log("Error in getting the activities", error);
    res.status(500).json({ message: "Internal Server error" });
  }
});

const createTodo = asyncHandler(async (req, res) => {
  console.log("Req body is:", req.body);
  const { text } = req.body;

  if (!text) {
    res.status(400).json({ message: "Please add the text!" });
  }

  const todo = await toDo.create({
    text,
  });
  res.status(201).json(todo);
});

const updateToDo = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;

  try {
    if (!text) {
      return res
        .status(400)
        .json({ message: "Please provide the updated text." });
    }

    const todo = await toDo.findByIdAndUpdate(id, { text }, { new: true });

    if (!todo) {
      return res.status(404).json({ message: "To-Do item not found." });
    }

    res.status(200).json(todo);
  } catch (error) {
    console.error("Error updating to-do:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

const deleteToDo = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await toDo.findByIdAndDelete(id);
    res.status(200).json({ message: "To-do deleted successfully", todo });
  } catch (error) {
    console.error("Error deleting to-do:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
module.exports = { getToDo, createTodo, updateToDo, deleteToDo };
