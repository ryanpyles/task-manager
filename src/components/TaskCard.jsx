import React from "react";
import { Card, CardContent, CardActions, Typography, Button, Chip } from "@mui/material";

const TaskCard = ({ task, onComplete }) => {
  return (
    <Card
      sx={{
        backgroundColor: "#FF7F00",
        color: "white",
        "&:hover": { backgroundColor: "#E07000" },
      }}
    >
      <CardContent>
        <Typography variant="h6">{task.name}</Typography>
        <Chip label={task.category} sx={{ marginTop: 1, backgroundColor: "white", color: "#FF7F00" }} />
      </CardContent>
      <CardActions>
  <Button
    size="small"
    variant="outlined"
    style={{ color: "white", borderColor: "white" }}
    onClick={onComplete}
  >
    Complete
  </Button>
  <Button
    size="small"
    variant="outlined"
    style={{ color: "white", borderColor: "white" }}
    onClick={onEdit}
  >
    Edit
  </Button>
</CardActions>

    </Card>
  );
};

export default TaskCard;
