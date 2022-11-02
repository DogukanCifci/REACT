import { Box, Container, TextField, Typography } from "@mui/material";

import React from "react";

const TextFieldComp = () => {
  let errorCheck = true;
  return (
    <div>
      <Container maxWidth="lg">
        <Typography>TEXT-FIELD</Typography>
        <Box sx={{ mt: 5 }} align="center">
          <TextField
            id="email"
            type="email"
            fullWidth
            margin="dense"
            placeholder="Hello World"
            defaultValue="Hello World"
          />
          <TextField
            error={errorCheck}
            id="password"
            type="password"
            align="center"
            label="Password"
            helperText={errorCheck ? "Yanlis Girdiniz" : "Correct"}
          />
        </Box>
      </Container>
    </div>
  );
};

export default TextFieldComp;
