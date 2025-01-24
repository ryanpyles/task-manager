import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const CategorySelector = ({ category, setCategory }) => {
  // List of available categories
  const categories = ["General", "Work", "Personal", "Urgent"];

  return (
    <FormControl fullWidth>
      <InputLabel id="category-selector-label">Category</InputLabel>
      <Select
        labelId="category-selector-label"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        label="Category"
      >
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
