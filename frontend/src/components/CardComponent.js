import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";
import Grid from "@material-ui/core/Grid";

export default function CardComponent({
  p,
  handleAddToCart,
  isOnProductPage,
  changed,
  setChanged,
}) {
  const useStyles = makeStyles({
    root: {
      maxWidth: 350,
      margin: 20,
    },
    biggerStyle: {
      minWidth: 500,
      margin: 20,
    },
  });

  const classes = useStyles();

  const handleClick = () => {
    handleAddToCart(p);
    // setChanged((c) => c + 1);
  };

  return (
    <Card className={isOnProductPage ? classes.biggerStyle : classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height={isOnProductPage ? "500" : "300"}
          image={`${p.image}`}
          title={`${p.name}`}
        />
        <CardContent style={{ backgroundColor: "lightblue" }}>
          <Typography gutterBottom variant="h5" component="h2">
            {p.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h3">
            ${p.price}
          </Typography>
          {isOnProductPage ? (
            <Typography variant="body2" color="textSecondary" component="h3">
              {p.description}
            </Typography>
          ) : (
            ""
          )}
        </CardContent>
      </CardActionArea>
      <CardActions>
        {!isOnProductPage ? (
          <Button size="small" color="primary">
            Learn More
          </Button>
        ) : (
          <Grid container direction="row" alignItems="center">
            <Button size="small" color="primary" onClick={handleClick}>
              Add to Cart
            </Button>
            <Link to="/">
              <Button size="small" color="primary">
                <HomeIcon />
              </Button>
            </Link>
          </Grid>
        )}
      </CardActions>
    </Card>
  );
}
