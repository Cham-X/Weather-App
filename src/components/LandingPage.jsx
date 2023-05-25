import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import LandingPageSearchCityInput from "./LandingPageSearchCityInput";

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  alignItems: "center",
  justifyItems: "center",
  gap: "2rem",
});
const LandingPage = () => {
  return (
    <StyledBox>
      <Typography variant="h5">
        Welcome, Input Your Location
      </Typography>
      <LandingPageSearchCityInput />
    </StyledBox>
  );
};

export default LandingPage;
