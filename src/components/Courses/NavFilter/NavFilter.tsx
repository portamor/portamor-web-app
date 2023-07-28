import React from "react";
import { Box, Button } from "@mui/material";
import { useState } from "react";

interface Props {
  genre: string;
  onUpdateGenre: (id: string) => void;
}

const NavFilter = ({ onUpdateGenre, genre }: Props) => {
  const filters = [
    { id: "all", name: "Todos los cursos" },
    { id: "1", name: "Actividad Física" },
    { id: "2", name: "Participación Social" },
    { id: "3", name: "Bienestar Mental" },
    { id: "4", name: "Alimentación Saludable" },
  ];

  const handleSelectChange = (id: string) => {
    onUpdateGenre(id);
  };

  return (
    <Box mb={4}>
      <Box display='flex' justifyContent='center'>
        {filters.map((filter, i) => (
          <Box key={i} mx={2}>
            <Button
              variant={genre === filter.id ? "contained" : "outlined"}
              onClick={() => handleSelectChange(filter.id)}
            >
              {filter.name}
            </Button>
          </Box>
        ))}
      </Box>
      <select
        value={genre}
        onChange={(e) => handleSelectChange(e.target.value)}
      >
        {filters.map((filter, i) => (
          <option key={i} value={filter.id}>
            {filter.name}
          </option>
        ))}
      </select>
    </Box>
  );
};

export default NavFilter;
