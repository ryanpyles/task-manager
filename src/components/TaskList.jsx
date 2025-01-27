import React from 'react';
import {
  SwipeableList,
  SwipeableListItem,
  TrailingActions,
  SwipeAction,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import { Box, Typography } from '@mui/material';

/**
 * TaskList Component
 * @param {Array} tasks - Array of task objects.
 * @param {Function} setTasks - Function to update the task list.
 * @returns JSX.Element
 */
const TaskList = ({ tasks, setTasks }) => {
  const handleDelete = (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);
    }
  };

  const trailingActions = (taskId) => (
    <TrailingActions>
      <SwipeAction destructive={true} onClick={() => handleDelete(taskId)}>
        Delete
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <Box sx={{ padding: 2, backgroundColor: 'background.paper', borderRadius: 2, boxShadow: 2 }}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Task List
      </Typography>
      <SwipeableList>
        {tasks.map((task) => (
          <SwipeableListItem
            key={task.id}
            trailingActions={trailingActions(task.id)}
          >
            <Box
              sx={{
                padding: 2,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 1,
                backgroundColor: 'background.default',
                marginBottom: 1,
              }}
            >
              <Typography variant="h6" sx={{ marginBottom: 1 }}>
                {task.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {task.description}
              </Typography>
            </Box>
          </SwipeableListItem>
        ))}
      </SwipeableList>
    </Box>
  );
};

export default TaskList;
