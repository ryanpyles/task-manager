import React from 'react';
import { Card, CardContent, Typography, Chip, Box } from '@mui/material';

/**
 * TaskCard Component
 * @param {Object} task - The task object containing title, description, and priority.
 * @returns JSX.Element
 */
const TaskCard = ({ task }) => {
  const priorityColors = {
    High: 'error.main', // Red
    Medium: 'warning.main', // Yellow
    Low: 'success.main', // Green
  };

  return (
    <Card
      sx={{
        marginBottom: 2,
        borderLeft: `4px solid`,
        borderColor: priorityColors[task.priority] || 'grey.500',
        boxShadow: 2,
        backgroundColor: 'background.paper',
      }}
    >
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" component="div">
            {task.title}
          </Typography>
          <Chip
            label={task.priority}
            sx={{
              backgroundColor: priorityColors[task.priority] || 'grey.300',
              color: 'white',
            }}
          />
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
          {task.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TaskCard;



