import "./HowItWorksSingle.css";
import {
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 550,
  },
  media: {
    width: "100%",
  },
}));

export default function HowItWorksSingle({ imageSource, title, description }) {
  const classes = useStyles();

  return (
    // <div className="HowItWorksSingle">
    //   <img src={imageSource} width="400" />
    //   <b>{title}</b>
    //   <p>{description}</p>
    // </div>
    <Card className={classes.root}>
      <CardMedia image={imageSource} title={title} />
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
