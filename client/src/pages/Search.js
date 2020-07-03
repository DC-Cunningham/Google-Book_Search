import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import clsx from "clsx";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    marginLeft: "10px",
    marginRight: "10px",
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    height: "70%",
    width: "70%",
    margin: "15%",
  },
  cardContent: {
    flexGrow: 1,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function Search() {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    searchGoogleBooks("Harry");
  }, []);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const searchGoogleBooks = (query) => {
    API.search(query)
      .then((res) => setBooks(res.data.items))
      .catch((err) => setError(err));
  };

  const saveSearchItem = (bookID) => {
    const book = books.find((x) => x.id === bookID);
    console.log(book);
    const bookData = {
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.smallThumbnail,
      link: book.volumeInfo.infoLink,
    };
    API.saveBook(bookData)
      .then((res) => console.log("Item Saved to db"))
      .catch((err) => console.log(err));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    searchGoogleBooks(search);
  };

  const classes = useStyles();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <SearchIcon className={classes.icon} />
          <Typography variant="h4" color="inherit" noWrap>
            Search for and save books of interest
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            ></Typography>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <SearchForm
                  handleInputChange={handleInputChange}
                  handleFormSubmit={handleFormSubmit}
                  value={search}
                />
              </Grid>
              <Grid item>
                Show book descriptions
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show descriptions"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {books.length ? (
              books.map((book) => (
                <Grid item key={book.id} sm={12} md={6}>
                  <Card className={classes.card}>
                    <CardMedia
                      component="img"
                      className={classes.cardMedia}
                      image={book.volumeInfo.imageLinks.smallThumbnail}
                      height="300"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        Title:
                      </Typography>
                      <Typography gutterBottom variant="h5" component="h2">
                        {book.volumeInfo.title}
                      </Typography>
                      <Typography
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        Author/s:
                      </Typography>
                      <Typography>{book.volumeInfo.authors}</Typography>
                    </CardContent>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                      <CardContent>
                        <Typography paragraph>Description:</Typography>
                        <Typography paragraph>
                          {book.volumeInfo.description}
                        </Typography>
                      </CardContent>
                    </Collapse>
                    <CardActions>
                      <Button
                        target="_blank"
                        variant="contained"
                        href={book.volumeInfo.infoLink}
                        color="primary"
                        size="small"
                        className={classes.heroButtons}
                      >
                        View
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        value={book.id}
                        className={classes.heroButtons}
                        onClick={saveSearchItem.bind(this, book.id)}
                      >
                        Save
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            ) : (
              <p>{error}</p>
            )}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

export default Search;
