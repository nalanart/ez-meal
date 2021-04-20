import React, { useContext } from "react";

import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { AppContext } from "../context/context";
import CartItem from "../components/CartItem";

const useStyles = makeStyles((theme) => ({
  clearBtn: {
    paddingRight: theme.spacing(15),
    paddingLeft: theme.spacing(15),
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.error.light,
  },
}));

const Cart = () => {
  const classes = useStyles();
  const { cart, clearCart, total } = useContext(AppContext);
  if (cart.length === 0)
    return (
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h1" color="primary" align="center">
            YOUR CART
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" color="textSecondary" align="center">
            is currently empty
          </Typography>
        </Grid>
      </Grid>
    );
  return (
    <>
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2" color="primary" align="center">
            YOUR CART
          </Typography>
        </Grid>
        {cart.map((item) => (
          <Grid item xs={11} md={7}>
            <CartItem key={item.id} item={item} />
          </Grid>
        ))}
        <Grid item xs={11} md={7}>
          <Typography variant="h5">
            <span style={{ float: "left" }}>Total</span>
            <span style={{ float: "right" }}>${total}</span>
          </Typography>
        </Grid>
        <Grid item xs={9} md={6} align="center">
          <Button
            className={classes.clearBtn}
            variant="contained"
            onClick={clearCart}>
            CLEAR CART
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Cart;
