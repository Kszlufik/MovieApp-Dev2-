import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterActorsCard from "../filterActorsCard/filterActorsCard";
import Box from "@mui/material/Box";

interface Props {
  nameFilter: string;
  onFilterChange: (value: string) => void;
}

const ActorFilterUI: React.FC<Props> = ({ nameFilter, onFilterChange }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", m: 1 }}>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
      >
        <FilterAltIcon sx={{ mr: 1 }} />
        Filter
      </Fab>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <FilterActorsCard
          nameFilter={nameFilter}
          onChange={onFilterChange}
        />
      </Drawer>
    </Box>
  );
};

export default ActorFilterUI;
