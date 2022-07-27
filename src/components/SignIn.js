import {
  Container,
  Button,
  Grid,
  Paper,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import React, { useState } from "react";

const SignIn = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle> Your entered details are : </DialogTitle>{" "}
        <DialogContent>
          <DialogContentText> Email: {email}</DialogContentText>{" "}
          <DialogContentText> Password: {password}</DialogContentText>{" "}
        </DialogContent>{" "}
        <DialogActions>
          <Button onClick={() => setOpen(false)}> OK </Button>{" "}
        </DialogActions>{" "}
      </Dialog>{" "}
      <Container maxWidth="sm">
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Paper elevation={2} sx={{ padding: 5 }}>
            <form>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <TextField
                    type="email"
                    fullWidth
                    label="Enter your email"
                    placeholder="Email Address"
                    variant="outlined"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    type="password"
                    fullWidth
                    label="Password"
                    placeholder="Password"
                    variant="outlined"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
                <Grid item>
                  <Button
                    onClick={() => {
                      setOpen(true);
                    }}
                    fullWidth
                    variant="contained"
                  >
                    Sign In{" "}
                  </Button>{" "}
                </Grid>{" "}
              </Grid>{" "}
            </form>{" "}
          </Paper>{" "}
        </Grid>{" "}
      </Container>{" "}
    </div>
  );
};

export default SignIn;
