import React from "react";

import {
  Box,
  TextField,
  Typography,
  Button,
  FormLabel,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";

function SignUp() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle> Your login credentials are: </DialogTitle>{" "}
        <DialogContent>
          <DialogContentText> Email: {email}</DialogContentText>{" "}
          <DialogContentText> Password: {password}</DialogContentText>{" "}
        </DialogContent>{" "}
        <DialogActions>
          <Button onClick={() => setOpen(false)}> OK </Button>{" "}
        </DialogActions>{" "}
      </Dialog>{" "}
      <form>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={10}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
        >
          <Typography
            variant="h2"
            padding={3}
            textAlign="center"
            fontFamily={"Helvetica"}
          >
            Sign Up{" "}
          </Typography>{" "}
          <FormLabel for="email"> Email: </FormLabel>{" "}
          <TextField
            text="Email"
            id="email"
            name="email"
            margin="normal"
            type={"email"}
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormLabel for="password"> Password: </FormLabel>{" "}
          <TextField
            id="password"
            margin="normal"
            type={"password"}
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <Typography align="center">
            <Button
              onClick={() => {
                setOpen(true);
              }}
              size={"large"}
              sx={{ marginTop: 2 }}
              variant="contained"
              color="primary"
            >
              Submit{" "}
            </Button>{" "}
          </Typography>{" "}
        </Box>{" "}
      </form>{" "}
    </div>
  );
}

export default SignUp;
