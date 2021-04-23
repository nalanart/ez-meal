import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useContext } from "react";
import { AppContext } from "../context/context";
import RecipeDialog from "./RecipeDialog";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 550,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  media: {
    height: 100,
    paddingTop: "56.25%", // 16:9
  },
  content: {
    display: "-webkit-box",
    boxOrient: "vertical",
    lineClamp: 3,
    wordBreak: "break-all",
    overflow: "hidden",
  },
}));

const RecipeCard = ({ recipe, addItem }) => {
  const classes = useStyles();
  const { cart } = useContext(AppContext);
  return (
    <Card className={classes.root}>
      <CardHeader
        title={recipe.name}
        subheader={recipe.description}
        align="left"
      />
      <CardMedia
        className={classes.media}
        title={recipe.name}
        image={recipe.imgSrc}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.content}
          align="left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </CardContent>
      <CardActions>
        {cart.some((cartItem) => cartItem._id === recipe._id) ? (
          <Button disabled>ADDED</Button>
        ) : (
          <Button variant="outlined" onClick={() => addItem(recipe)}>
            ADD TO CART
          </Button>
        )}
        <RecipeDialog recipe={recipe} />
      </CardActions>
    </Card>
  );
};

export default RecipeCard;
