import styles from "./WeatherTemperatureBox.module.css";
import sun from "../images/sun.svg";
// import { Box } from "@mui/material";
// import styled from "@emotion/styled";
// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={ { maxWidth: 150, fontWeight: "bold" } }>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Fri 7
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          image={ sun }
          alt="sun"
          sx={ { width: 100, height: 100 } }
        />
        <CardContent>
          <Typography variant="h6" color="text.secondary" sx={ { fontSize: "2.3rem" } }>
            6<span>&deg;</span>
          </Typography>
          <Typography variant="h6">
            cloudy
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

