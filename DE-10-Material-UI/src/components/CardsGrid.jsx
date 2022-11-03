import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Button,
  CardActions,
} from "@mui/material";
import React from "react";
import MyData from "../data.js";
const CardsGrid = () => {
  //Grid container ----> row
  //Grid item ----->col
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" sx={{ mb: 2 }} color="purple">
        UI Material CARD - GRID
      </Typography>
      <Grid container spacing={10} alignItems="center" justifyContent="center">
        {MyData.map((e) => {
          const { id, name, text, img } = e;
          return (
            <Grid item key={id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia component="img" image={img} height={250} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {text}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default CardsGrid;
