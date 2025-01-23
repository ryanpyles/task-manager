import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

const TaskModal = ({ open, onClose, task, onSave }) => {
  const [editedTask, setEditedTask] = React.useState(task);

  const handleSave = () => {
    onSave(editedTask);
    onClose();
  };

  React.useEffect(() => {
    setEditedTask(task);
  }, [task]);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Task</DialogTitle>
      <DialogContent>
        <TextField
          label="Title"
          fullWidth
          margin="dense"
          value={editedTask?.title || ""}
          onChange={(e) =>
            setEditedTask({ ...editedTask, title: e.target.value })
          }
        />
        <TextField
          label="Description"
          fullWidth
          margin="dense"
          value={editedTask?.description || ""}
          onChange={(e) =>
            setEditedTask({ ...editedTask, description: e.target.value })
          }
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskModal;
