import { InputAdornment } from "@mui/material";
import React, { useContext, useState } from "react";
import Search from "@mui/icons-material/Search";
import { NavbarContainer, SearchBar } from "../styled";
import { AppContext } from "../../context/AppContextProvider";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { getSearchData, setSearchData } = useContext(AppContext);
  const [search, setSearch] = useState("");
  const location = useLocation();
  React.useEffect(() => {
    if (search) {
      const getData = setTimeout(() => {
        getSearchData(search);
      }, 2000);

      return () => clearTimeout(getData);
    } else {
      setSearchData(null);
    }
  }, [search]);

  React.useEffect(() => {
    if (location.pathname !== "/search" && search) {
      setSearch("");
    }
  }, [location.pathname]);

  return (
    <NavbarContainer>
      {" "}
      <SearchBar
        placeholder="Search for music"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        variant="standard"
      />
    </NavbarContainer>
  );
};

export default Navbar;
