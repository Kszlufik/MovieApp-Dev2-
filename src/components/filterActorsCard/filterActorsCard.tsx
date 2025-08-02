import React, { ChangeEvent } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

interface Props {
  nameFilter: string;
  onChange: (value: string) => void;
}

const FilterActorsCard: React.FC<Props> = ({ nameFilter, onChange }) => {
  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "#fff" }} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          <FilterAltIcon /> Filter Actors
        </Typography>
        <TextField
          label="Search by name"
          variant="filled"
          fullWidth
          value={nameFilter}
          onChange={handleTextChange}
          sx={{ marginTop: 8 }}
        />
      </CardContent>
    </Card>
  );
};

export default FilterActorsCard;
