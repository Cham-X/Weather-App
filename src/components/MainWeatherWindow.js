import styles from "./MainWeatherWindow.module.css";
import { Typography, Box } from "@mui/material";

import sunlight from "../images/02d.svg";
import { useEffect, useState } from "react";

function MainWeatherWindow() {
  // const [weatherData, setWeatherData] = useState({});
  // const { getWeatherByCityName } = useForecast();

  // useEffect(() => {
  //   const fetch = async () => {
  //     const response = await getWeatherByCityName('Lagos');
  //     setWeatherData(response);
  //   };

  //   fetch();
  // }, []);



  // console.log('weatherData', weatherData);
  // console.log('weatherData', weatherData.name);
  // console.log('name', weatherData.name);

  return (
    <>

      <>
        <Typography variant="h6">
          {/* { weatherData.name } */ }
        </Typography>
        <Box>
          <img src={ sunlight } alt="sunlight" className={ styles.cloud } />
          <Typography>
            {/* { weatherData.main }<span>&deg;c</span> */ }
          </Typography>
        </Box>
      </>
    </>
  );
}

export default MainWeatherWindow;
