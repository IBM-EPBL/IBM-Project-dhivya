import React from "react";
import {
  Box,
  Stack,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";
const Login = ({ state, setState }) => {
  return (
    <Box
      sx={{
        width: "400px",
        height: "330px",
        padding: "30px",
      }}
    >
      <Stack margin="10px" spacing={5}>
        <TextField variant="outlined" label="Email" color="warning" />
        <TextField variant="outlined" label="Password" color="warning" />
        <Typography
          variant="body1"
          sx={{ textAlign: "right", cursor: "pointer" }}
          onClick={() => {
            console.log(state, "state");
            setState(!state);
          }}
        >
          I don't have account?
        </Typography>
        <Button variant="contained" color="warning">
          Login
        </Button>
      </Stack>
    </Box>
  );
};

export default Login;
