import React, { useContext } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { AppContext } from "../context/context";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 100,
  },
}));

const CartItem = ({ item }) => {
  const { removeItem, changeAmount } = useContext(AppContext);
  const classes = useStyles();
  return (
    <Card>
      <CardContent>
        <Grid container alignItems="center">
          <Grid item xs={5} md={2}>
            <img src={item.src} className={classes.media} />
          </Grid>
          <Grid
            container
            item
            direction="column"
            xs={6}
            md={9}
            justify="space-between">
            <Grid item>
              <Typography variant="h5">{item.name}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5" color="textSecondary">
                ${item.price}
              </Typography>
            </Grid>
            <Grid item>
              <Button onClick={() => removeItem(item.id)}>
                <Typography variant="h6"></Typography>
                remove
              </Button>
            </Grid>
          </Grid>
          <Grid container item direction="column" xs={1} justify="center">
            <Grid item align="center">
              <IconButton onClick={() => changeAmount(item.id, "increase")}>
                <KeyboardArrowUpIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography variant="body1" align="center">
                {item.amount}
              </Typography>
            </Grid>
            <Grid item align="center">
              <IconButton onClick={() => changeAmount(item.id, "decrease")}>
                <KeyboardArrowDownIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CartItem;
