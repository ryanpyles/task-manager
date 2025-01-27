import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Grid, Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import TaskCard from './TaskCard';

const KanbanBoard = ({ tasks, setTasks }) => {
  const initialColumns = {
    todo: { name: 'To Do', items: tasks.filter((t) => t.status === 'todo') },
    inProgress: { name: 'In Progress', items: tasks.filter((t) => t.status === 'inProgress') },
    done: { name: 'Done', items: tasks.filter((t) => t.status === 'done') },
  };
  const [columns, setColumns] = useState(initialColumns);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [movedItem] = sourceItems.splice(source.index, 1);

    if (source.droppableId !== destination.droppableId) {
      destItems.splice(destination.index, 0, movedItem);
      setColumns({
        ...columns,
        [source.droppableId]: { ...sourceColumn, items: sourceItems },
        [destination.droppableId]: { ...destColumn, items: destItems },
      });
    } else {
      sourceItems.splice(destination.index, 0, movedItem);
      setColumns({
        ...columns,
        [source.droppableId]: { ...sourceColumn, items: sourceItems },
      });
    }

    const updatedTasks = Object.entries(columns).flatMap(([columnId, column]) =>
      column.items.map((task) => ({ ...task, status: columnId }))
    );
    setTasks(updatedTasks);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Grid container spacing={2}>
        {Object.entries(columns).map(([columnId, column]) => (
          <Grid item xs={12} sm={6} md={4} key={columnId}>
            <Box
              sx={{
                backgroundColor: 'background.paper',
                borderRadius: 2,
                padding: 2,
                boxShadow: 2,
              }}
            >
              <Typography variant="h6" sx={{ marginBottom: 2 }}>
                {column.name}
              </Typography>
              <Droppable droppableId={columnId}>
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{ minHeight: '500px' }}
                  >
                    {column.items.map((item, index) => (
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided) => (
                          <motion.div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{ marginBottom: '8px' }}
                            initial={{ opacity: 0.5, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <TaskCard task={item} />
                          </motion.div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </Box>
          </Grid>
        ))}
      </Grid>
    </DragDropContext>
  );
};

export default KanbanBoard;
