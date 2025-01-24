import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import TaskCard from "./TaskCard";
import CategorySelector from "./CategorySelector";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [category, setCategory] = useState("General");

  const addTask = () => {
    if (taskName.trim()) {
      setTasks([...tasks, { id: Date.now(), name: taskName, category }]);
      setTaskName("");
    }
  };

  return (
    <Box sx={{ padding: 2, maxWidth: 600, margin: "0 auto" }}>
      <TextField
        label="Task Name"
        variant="outlined"
        fullWidth
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <CategorySelector category={category} setCategory={setCategory} />
      <Button
        variant="contained"
        color="primary"
        onClick={addTask}
        sx={{ marginTop: 2 }}
      >
        Add Task
      </Button>
    </Box>
  );
};

export default TaskList;
