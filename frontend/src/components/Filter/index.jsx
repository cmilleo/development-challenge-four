import { InputAdornment, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FilterContext } from "../../providers/Filter/Filter";
import { Container } from "./styles";

export const Filter = () => {
  const [input, setInput] = useState("");

  const { applyFilter } = useContext(FilterContext);

  const handleChangeInput = (event) => {
    setInput(event.target.value);
  };
  const handleClick = () => {
    applyFilter(input);
    setInput("");
    document.getElementById("searchBar").value = "";
  };

  return (
    <Container>
      <TextField
        onChange={handleChangeInput}
        fullWidth
        id="searchBar"
        size="small"
        variant="outlined"
        label="Pesquisar"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <button onClick={handleClick} className="btnSearch">
                <BiSearchAlt />
              </button>
            </InputAdornment>
          ),
        }}
      />
    </Container>
  );
};
