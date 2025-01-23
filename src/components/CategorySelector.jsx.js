import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const CategorySelector = ({ category, setCategory }) => {
  const categories = ["General", "Work", "Personal", "Urgent"];

  return (
    <FormControl fullWidth sx={{ marginTop: 2 }}>
      <InputLabel>Category</InputLabel>
      <Select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((cat) => (
          <MenuItem key={cat} value={cat}>
            {cat}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CategorySelector;
