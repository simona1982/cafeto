import React, { Component } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { red, green } from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import StarIcon from "@material-ui/icons/Star";
import { connect } from "react-redux";
//import axios from "axios";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  button: {
    margin: theme.spacing(3)
  },
  margin: {
    margin: theme.spacing(1)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

class ListMovies extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { results } = this.props;
    console.log(results);
    //const classes = useStyles();

    const movies = results.results.map(item => {
      const poster = item.poster_path
        ? `https://image.tmdb.org/t/p/w370_and_h556_bestv2/${item.poster_path}`
        : `https://source.unsplash.com/random`;

      return (
        <Grid item key={item.id} xs={12} sm={6} md={4}>
          <Card
            style={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <CardHeader
              avatar={
                <Avatar
                  aria-label="recipe"
                  style={{ backgroundColor: red[500] }}
                >
                  NA
                </Avatar>
              }
              title={`Popularidad ${item.popularity}`}
              subheader={`Fecha ${item.release_date}`}
            />
            <CardMedia
              style={{ paddingTop: "60.25%" }}
              image={poster}
              title={item.title}
            />
            <CardContent style={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {item.title}
              </Typography>
              <Typography>{item.original_title}.</Typography>
            </CardContent>
            <CardActions>
              <IconButton aria-label="1" onClick={() => console.log("panda")}>
                <StarIcon />
              </IconButton>
              <IconButton aria-label="2" onClick={() => console.log("panda")}>
                <StarIcon />
              </IconButton>
              <IconButton aria-label="3" onClick={() => console.log("panda")}>
                <StarIcon />
              </IconButton>
              <IconButton aria-label="4" onClick={() => console.log("panda")}>
                <StarIcon />
              </IconButton>
              <IconButton aria-label="5" onClick={() => console.log("panda")}>
                <StarIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      );
    });

    return movies;

    //return console.log(results);
    //console.log(results);
  }
}

const mapStateToProps = state => {
  return {
    results: state.results
  };
};

export default connect(mapStateToProps)(ListMovies);

/*const wrapper = connect(mapStateToProps);
const component = wrapper(ListMovies);

export default component;*/
