import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Todo from "./Todo";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const fetchData = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/");
      console.log(data);
      setTodos(data);
    } catch (error) {
      console.log("Error in fetching data", error);
    }
  };

  const addTodo = async () => {
    try {
      const { data } = await axios.post("http://localhost:8080/create-todo", {
        text: text,
      });
      setTodos([...todos, data]);
      setText("");
    } catch (error) {
      console.log("Error adding todo", error);
    }
  };

  const deleteTodo = async (_id) => {
    try {
      await axios.delete(`http://localhost:8080/delete-todo/${_id}`);
      setTodos(todos.filter((todo) => todo._id !== _id));
      console.log(_id);
    } catch (error) {
      const x = todos;
      console.log("Todods", x);
      console.log(_id);
      console.log("Error deleting todo", error);
    }
  };

  const updateTodo = async (_id, newtxt) => {
    try {
      await axios.put(`http://localhost:8080/update-todo/${_id}`, {
        text: newtxt,
      });
      setTodos(
        todos.map((todo) => {
          if (todo._id === _id) {
            return { ...todo, text: newtxt };
          }
          return todo;
        })
      );
    } catch (error) {
      console.log("Error updating todo", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1 className="head">VAR Tech Pros To-Do App</h1>
      <h3 className="slogan">
        Your one stop solution to manage and organize your day!
      </h3>

      <div className="input">
        <TextField
          _id="outlined-basic"
          label="Add task"
          variant="outlined"
          onChange={(e) => setText(e.target.value)}
          value={text}
          sx={{
            w_idth: "30rem",
            height: "30px",
            borderRadius: "5px",
            color: "white",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
              "& input": {
                color: "white",
              },
            },
            "& .MuiInputLabel-root": {
              color: "white",
            },
          }}
        />
        <Button
          variant="contained"
          onClick={addTodo}
          sx={{
            placeContent: "center",
            marginTop: "25px",
            marginLeft: "10px",
            height: "60px",
            borderRadius: "5px",
          }}
        >
          Add Task
        </Button>
      </div>

      {todos.map((todo) => (
        <Todo
          key={todo._id}
          _id={todo._id}
          text={todo.text}
          onDelete={deleteTodo}
          onUpdate={updateTodo}
        />
      ))}
    </>
  );
}

export default App;
