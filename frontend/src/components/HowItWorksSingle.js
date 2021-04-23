import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    marginBottom: theme.spacing(5),
  },
  media: {
    width: "100%",
  },
}));

export default function HowItWorksSingle({ imageSource, title, description }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <img src={imageSource} alt={title} className={classes.media} />
      <CardContent>
        <Typography variant="h6" color="primary" align="center">
          {title}
        </Typography>
        <Typography
          variant="body"
          color="textPrimary"
          align="center"
          component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
