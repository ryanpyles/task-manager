import React, { useState } from 'react';
import { Modal, Box, TextField, Button, MenuItem, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const TaskModal = ({ open, onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [status, setStatus] = useState('todo');

  const handleSave = () => {
    if (!title.trim()) return alert('Title is required');
    if (!description.trim()) return alert('Description is required');
    onSave(status, { title, description, priority });
    setTitle('');
    setDescription('');
    setPriority('Medium');
    setStatus('todo');
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: '400px' },
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Add New Task
          </Typography>
          <TextField
            fullWidth
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            select
            fullWidth
            label="Priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            sx={{ marginBottom: 2 }}
          >
            {['High', 'Medium', 'Low'].map((p) => (
              <MenuItem key={p} value={p}>
                {p}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            fullWidth
            label="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            sx={{ marginBottom: 2 }}
          >
            {['todo', 'in-progress', 'done'].map((s) => (
              <MenuItem key={s} value={s}>
                {s}
              </MenuItem>
            ))}
          </TextField>
          <Button variant="contained" color="primary" onClick={handleSave} fullWidth>
            Save
          </Button>
        </Box>
      </motion.div>
    </Modal>
  );
};

export default TaskModal;
