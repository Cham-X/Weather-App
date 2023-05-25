import { AppBar, Toolbar, Typography, InputBase, IconButton, Stack, Paper } from "@mui/material";
import styled from "@emotion/styled";
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";


const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
});




const Navbar = ({ mode, setMode }) => {

  const [openSearchItem, setOpenSearchItem] = useState(false);


  return (
    <AppBar>
      <StyledToolbar position="sticky">
        <Typography variant="h6" whiteSpace={ "nowrap" }>
          weather Forecast
        </Typography>
        <Stack direction="row" alignContent="center" gap={ 1 }>
          <IconButton>
            <ModeNightIcon
              onClick={ () => setMode(mode === "light" ? "dark" : "light") }
              sx={ { display: mode === "light" ? "block" : "none" } }
            />
            <LightModeIcon
              onClick={ () => setMode(mode === "light" ? "dark" : "light") }
              sx={ { display: mode === "light" ? "none" : "block" } }
            />
          </IconButton>

          <Paper
            component="form"
            sx={ { p: '2px 4px', display: 'flex', alignItems: 'center', width: "100% ", display: { xs: openSearchItem ? "flex" : "none", sm: "block" } } }
          >
            <InputBase
              sx={ { ml: 1, flex: 1 } }
              placeholder="Search Location"
              inputProps={ { 'aria-label': 'search google maps' } }
            />
            <IconButton type="button" sx={ { p: '10px' } } aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          <IconButton type="button" sx={ { p: '13px', color: "#ffff", display: { xs: openSearchItem ? "none" : "block", sm: "none" } } } aria-label="search">
            <SearchIcon onClick={ () => setOpenSearchItem(!openSearchItem) } />
          </IconButton>
        </Stack>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
