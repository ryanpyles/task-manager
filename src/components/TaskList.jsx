import React, { useState, useEffect } from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import TaskCard from "./TaskCard";
import TaskModal from "./TaskModal";

const TaskList = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleSaveTask = (task) => {
    if (task.id) {
      // Update existing task
      setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    } else {
      // Add new task
      setTasks([...tasks, { ...task, id: Date.now() }]);
    }
  };

  const openModalForEdit = (task) => {
    setCurrentTask(task);
    setModalOpen(true);
  };

  const openModalForAdd = () => {
    setCurrentTask(null);
    setModalOpen(true);
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "600px",
        padding: 2,
        backgroundColor: "background.paper",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Box display="flex" justifyContent="flex-end" marginBottom={2}>
        <Button variant="contained" color="primary" onClick={openModalForAdd}>
          Add Task
        </Button>
      </Box>

      {tasks.length === 0 ? (
        <Typography variant="h6" align="center">
          No tasks available.
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {tasks.map((task) => (
            <Grid item xs={12} key={task.id}>
              <TaskCard task={task} onComplete={() => setTasks(tasks.filter((t) => t.id !== task.id))} onEdit={() => openModalForEdit(task)} />
            </Grid>
          ))}
        </Grid>
      )}

      {/* Task Modal */}
      <TaskModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        task={currentTask}
        onSave={handleSaveTask}
      />
    </Box>
  );
};

export default TaskList;
