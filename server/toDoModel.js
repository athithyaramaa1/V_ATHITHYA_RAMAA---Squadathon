const mongoose = require("mongoose");

const toDoSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please provide the text."],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("todo", toDoSchema);
