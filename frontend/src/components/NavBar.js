import {
  AppBar,
  Badge,
  IconButton,
  Link,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  logo: {
    marginRight: theme.spacing(5),
  },
}));

export default function NavBar({ isLoggedIn, logout }) {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="secondary">
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          <Link href="/" color="primary" underline="none">
            EZmeal
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link
            href="/menu"
            color="primary"
            underline="none"
            className={classes.logo}>
            MENU
          </Link>
          <Link href="/pricing" color="primary" underline="none">
            PRICING
          </Link>
        </Typography>
        <div className={classes.grow} />
        <Link href="/cart">
          <IconButton>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
