import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const NavigateToSignUp = () => {
    navigate("/signup");
  };
  return (
    <div>
      <Box position={"absolute"} top={"35%"} left={"28%"}>
        <Typography
          variant="h2"
          textAlign={"center"}
          marginBottom={5}
          fontFamily={"Helvetica"}
        >
          Welcome to Alumni Portal{" "}
        </Typography>{" "}
        <Typography align="center">
          <Button
            onClick={NavigateToSignUp}
            variant="contained"
            size="large"
            color="primary"
            marginTop={5}
          >
            Sign Up{" "}
          </Button>{" "}
        </Typography>{" "}
      </Box>{" "}
    </div>
  );
}

export default Home;
