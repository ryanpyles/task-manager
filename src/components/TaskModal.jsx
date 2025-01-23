import React from "react";
import { Modal, Box, Typography, TextField, Button, Grid } from "@mui/material";

const TaskModal = ({ open, onClose, task, onSave }) => {
  const [taskName, setTaskName] = React.useState(task?.name || "");
  const [category, setCategory] = React.useState(task?.category || "General");

  React.useEffect(() => {
    if (task) {
      setTaskName(task.name);
      setCategory(task.category);
    }
  }, [task]);

  const handleSave = () => {
    if (taskName.trim()) {
      onSave({ ...task, name: taskName, category });
      onClose();
    }
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="task-modal-title">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography id="task-modal-title" variant="h6" marginBottom={2}>
          {task ? "Edit Task" : "Add Task"}
        </Typography>
        <TextField
          label="Task Name"
          variant="outlined"
          fullWidth
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Category"
          variant="outlined"
          fullWidth
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button variant="outlined" color="secondary" fullWidth onClick={onClose}>
              Cancel
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" color="primary" fullWidth onClick={handleSave}>
              Save
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default TaskModal;
