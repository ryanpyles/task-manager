import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { format } from 'date-fns';
import { Box, Typography, List, ListItem, ListItemText, Chip } from '@mui/material';
import 'react-calendar/dist/Calendar.css';

const TaskCalendar = ({ tasks }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const formattedDate = format(selectedDate, 'yyyy-MM-dd');
  const tasksForSelectedDate = tasks.filter((task) => task.dueDate === formattedDate);

  const priorityColors = {
    High: 'error.main',
    Medium: 'warning.main',
    Low: 'success.main',
  };

  return (
    <Box sx={{ padding: 2, backgroundColor: 'background.paper', borderRadius: 2, boxShadow: 2 }}>
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileContent={({ date }) => {
          const dateTasks = tasks.filter((task) => task.dueDate === format(date, 'yyyy-MM-dd'));
          return dateTasks.length > 0 ? (
            <Box
              sx={{
                backgroundColor: 'primary.main',
                width: 8,
                height: 8,
                borderRadius: '50%',
                margin: 'auto',
                marginTop: 4,
              }}
            />
          ) : null;
        }}
      />
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        Tasks for {format(selectedDate, 'MMMM dd, yyyy')}:
      </Typography>
      {tasksForSelectedDate.length > 0 ? (
        <List>
          {tasksForSelectedDate.map((task, index) => (
            <ListItem
              key={task.id || index}
              sx={{
                marginBottom: 1,
                backgroundColor: 'background.default',
                borderRadius: 1,
                boxShadow: 1,
              }}
            >
              <ListItemText primary={task.title} secondary={task.description} />
              <Chip
                label={task.priority}
                sx={{
                  backgroundColor: priorityColors[task.priority] || 'grey.300',
                  color: 'white',
                }}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          No tasks for this date.
        </Typography>
      )}
    </Box>
  );
};

export default TaskCalendar;
