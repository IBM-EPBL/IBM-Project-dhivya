import React, { useState } from "react";
import {
  Box,
  Stack,
  TextField,
  Button,
  Typography,
  Switch,
} from "@mui/material";
const Register = ({ state, setState }) => {
  const [status, setStatus] = useState(true);
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
        <Stack
          alignItems="center"
          justifyContent="space-between"
          direction="row"
          spacing={2}
        >
          <Stack direction="row" spacing={4} alignItems="center">
            <Switch
              color="warning"
              onChange={() => {
                setStatus(!status);
              }}
            />
            {status ? "Nutritionist" : "Customer"}
          </Stack>
          <Typography
            variant="body1"
            sx={{ textAlign: "right", cursor: "pointer" }}
            onClick={() => {
              console.log(state, "state");
              setState(!state);
            }}
          >
            Already have Account
          </Typography>
        </Stack>

        <Button variant="contained" color="warning">
          Create New Account
        </Button>
      </Stack>
    </Box>
  );
};

export default Register;
