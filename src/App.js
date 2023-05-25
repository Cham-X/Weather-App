import MainWeatherWindow from "./components/MainWeatherWindow";
import WeatherTemperatureBox from "./components/WeatherTemperatureBox";
import DailyForecastList from "./components/DailyForecastList";
import { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import LandingPage from "./components/LandingPage";
// import useForecast from "./hooks/useForecast";


function App() {


  const [mode, setMode] = useState('light');




  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });


  return (
    <ThemeProvider theme={ darkTheme }>
      <CssBaseline />
      <Box bgcolor={ "background.default" } color={ " text.primary " }>
        <Navbar setMode={ setMode } mode={ mode } />
        <Stack direction="column" alignContent="center" gap={ 1 } marginTop="10rem">
          <LandingPage />
          <MainWeatherWindow />
          <DailyForecastList />
          <WeatherTemperatureBox />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
