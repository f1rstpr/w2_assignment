import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    margin: 20,
  },
});

export default function CardComponent({ p, handleAddToCart, isOnProductPage }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height={isOnProductPage ? "500" : "300"}
          image={`${p.image}`}
          title={`${p.name}`}
        />
        <CardContent
          style={{ backgroundColor: "lightblue" }}
          onClick={isOnProductPage ? () => handleAddToCart(p) : undefined}
        >
          <Typography gutterBottom variant="h5" component="h2">
            {p.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            ${p.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
