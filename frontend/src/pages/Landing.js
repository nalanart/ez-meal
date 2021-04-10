import "./Landing.css";
import HowItWorksSingle from "../components/HowItWorksSingle";
import {
  Button,
  Grid,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundColor: theme.palette.info.light,
    padding: "5rem 0 5rem 0",
  },
  cta: {
    marginTop: theme.spacing(2),
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.warning.light,
  },
}));

export default function Landing() {
  const classes = useStyles();
  return (
    <>
      <Toolbar />
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}
        className={classes.banner}>
        <Grid item xs={12} sm={9}>
          <Typography variant="h3" color="secondary" align="center">
            <b>Montreal's most popular and trusted meal delivery kit!</b>
          </Typography>
        </Grid>
        <Grid item xs={10} sm={5}>
          <Typography variant="h6" color="secondary" align="center">
            Get fresh ingredients and easy-to-follow instructions to start
            cooking delicious meals yourself.
          </Typography>
        </Grid>
        <Button variant="contained" className={classes.cta}>
          Try It Now
        </Button>
      </Grid>
      <Typography variant="h4" color="primary" align="center">
        <b>HOW IT WORKS</b>
      </Typography>
      <Grid container justify="center" spacing={2}>
        <Grid item xs={10} md={4} align="center">
          <HowItWorksSingle
            imageSource="https://cdn.makegoodfood.ca/images/home/how-it-works/Goodfood_home_how_it_works_visual_2.jpg"
            title="1. Select your meals."
            description="Choose up to four delicious meals per week from our vast and unique menu. Note any of your dietary preferences and we will accomodate."
          />
        </Grid>
        <Grid item xs={10} md={4} align="center">
          <HowItWorksSingle
            imageSource="https://cdn.makegoodfood.ca/images/home/how-it-works/Goodfood_home_how_it_works_visual_3.jpg"
            title="2. Preparation and packaging."
            description="We shop for you and prepare all the necessary ingredients and package them in our temperature-controlled boxes."
          />
        </Grid>
        <Grid item xs={10} md={4} align="center">
          <HowItWorksSingle
            imageSource="https://cdn.makegoodfood.ca/images/home/how-it-works/Goodfood_home_how_it_works_visual_3.jpg"
            title="3. We deliver weekly - for free."
            description="We deliver everything right to your doorstep along with the instructions for you to easily follow."
          />
        </Grid>
      </Grid>
    </>
  );
}
