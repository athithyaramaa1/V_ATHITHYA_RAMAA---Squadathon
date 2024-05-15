import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Divider } from "@mui/material";

const Todo = ({ _id, text, onDelete, onUpdate }) => {
  const handleUpdate = () => {
    const newText = prompt("Enter updated value:");
    if (newText !== null) {
      onUpdate(_id, newText);
    }
  };

  const handleDelete = () => {
    onDelete(_id);
  };

  return (
    <>
      <Divider />
      <div className="todo">
        <div className="todo-text">{text}</div>
        <div className="icons">
          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <Fab color="secondary" aria-label="edit" onClick={handleUpdate}>
              <EditIcon />
            </Fab>
            <Fab color="primary" aria-label="delete" onClick={handleDelete}>
              <DeleteIcon />
            </Fab>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Todo;
