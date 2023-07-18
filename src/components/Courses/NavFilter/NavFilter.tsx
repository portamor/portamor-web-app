import React from "react";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import { useAppDispatch } from "@src/redux/hooks/useApp";
import {
  fetchGetCourses,
  fetchGetCoursesByGenre,
} from "@src/redux/slices/coursesSlice";

const NavFilter = () => {
  const dispatch = useAppDispatch();
  const [currentGenreId, setCurrentGenreId] = useState("");
  const filters = [
    { id: "", name: "Todos los cursos" },
    { id: "1", name: "Actividad Física" },
    { id: "2", name: "Participación Social" },
    { id: "3", name: "Bienestar Mental" },
    { id: "4", name: "Alimentación Saludable" },
  ];

  const handleSelectChange = (id: string) => {
    setCurrentGenreId(id);
    if (id === "") {
      dispatch(fetchGetCourses({ page: 1 }));
      return;
    }
    dispatch(fetchGetCoursesByGenre({ id }));
  };

  return (
    <Box mb={4}>
      <Box display='flex' justifyContent='center'>
        {filters.map((filter, i) => (
          <Box key={i} mx={2}>
            <Button
              variant={currentGenreId === filter.id ? "contained" : "outlined"}
              onClick={() => handleSelectChange(filter.id)}
            >
              {filter.name}
            </Button>
          </Box>
        ))}
      </Box>
      <select
        value={currentGenreId}
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
