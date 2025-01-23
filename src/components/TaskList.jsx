import React, { useState } from "react";
import { List, ListItem, ListItemText, Typography, Button } from "@mui/material";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "First Task" },
    { id: 2, name: "Second Task" },
  ]);

  const addTask = () => {
    const newTask = { id: tasks.length + 1, name: `Task ${tasks.length + 1}` };
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={addTask} style={{ marginBottom: "20px" }}>
        Add Task
      </Button>
      {tasks.length === 0 ? (
        <Typography variant="h6" align="center">
          No tasks available.
        </Typography>
      ) : (
        <List>
          {tasks.map((task) => (
            <ListItem key={task.id}>
              <ListItemText primary={task.name} />
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default TaskList;
