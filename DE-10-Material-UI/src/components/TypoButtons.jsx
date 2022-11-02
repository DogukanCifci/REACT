import React from "react";
import { Typography, Container, Box, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ClearIcon from "@mui/icons-material/Clear";
const TypoButtons = () => {
  //Material UI stilllendirmedeki güzelligi bootsrapteki keywordleri de kullanabiliyorum normal csstekileri de. Stillendirirken style={{}} degil de sx = {{}} yazmaliyim
  return (
    <div>
      <Container maxWidth="lg" sx={{ background: "purple" }}>
        <Box>
          <Typography
            variant="h3"
            sx={{ background: "#bba", marginTop: "20px", mb: 5 }}
            color="error.main"
            align="center"
          >
            h3. Heading, Button, Dogukan,
          </Typography>{" "}
        </Box>

        {/* !!! body: p etiketidir . Yani block tiplidir. body1 daha büyük fontlu, body2 daha kücük fontlu. 
button : span etiketidir. Yani inlinedir. */}
      </Container>
      <Typography variant="body1" color="aqua" align="center">
        Lorem ipsum dolor
      </Typography>
      <Typography variant="button" color="error" align="center">
        Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur.
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", mt: 3, gap: 2 }}>
        <Button variant="contained" color="error" startIcon={<SendIcon />}>
          Send
        </Button>
        <Button variant="outlined" color="success" endIcon={<ClearIcon />}>
          Delete
        </Button>
      </Box>
    </div>
  );
};

export default TypoButtons;
