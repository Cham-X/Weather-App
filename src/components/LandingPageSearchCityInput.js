import { useState, useEffect } from "react";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Paper, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { geoApi, geoApiUrl } from "../api";




const SEARCH_INPUT_REGEX = /^[a-zA-ZäöüÄÖÜß]+$/;

const LandingPageSearchCityInput = () => {

  const [location, setLocation] = useState('');
  const [validLocation, setValidLocation] = useState(false);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setValidLocation(SEARCH_INPUT_REGEX.test(location));
    // console.log(validLocation);
    // console.log(location);
  }, [location]);

  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(`${geoApiUrl}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
        geoApi);
      const result = await response.json();
      const cityName = result?.data?.map(item => {
        return {
          name: item.name,
          countryCode: item.countryCode
        };
      });
      setOptions(cityName);
      console.log(cityName);

    } catch (error) {
      console.error(error);
    }
  };



  return (
    // <form onSubmit={ handleSubmit } sx={ { display: "display", alignItems: "center", justifyItems: "center", width: "40rem" } }>
    <Paper
      component="form"
      sx={ { p: '2px 4px', display: 'flex', alignItems: 'center', width: { xs: "90vw", sm: "400px" } } }
    >
      <Autocomplete
        sx={ { display: 'block', borderColor: "inherit", alignItems: 'center', width: { xs: "100%", sm: "100%" } } }
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={ options.map((option) => [option.name, " ", option.countryCode]) }
        renderInput={ (params) => (
          <TextField
            { ...params }
            label="Search Location"
            value={ location }
            onChange={ (e) => setLocation(e.target.value) }
            InputProps={ {
              ...params.InputProps,
              type: 'search',
            } }
          />
        ) }
        onInputChange={ (event, newValue) => loadOptions(newValue) }
      />
      <IconButton type="button" sx={ { p: '10px' } } aria-label="search">
        <SearchIcon onclick={ () => loadOptions(location) } />
      </IconButton>
    </Paper>
    // </form>

  );
};

export default LandingPageSearchCityInput;
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },];