import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionActions from "@material-ui/core/AccordionActions";

const useStyles = makeStyles((theme) => ({
  appbar: {
    alignItems: "center",
    backgroundColor: theme.palette.background.paper,
    color: "black",
    marginTop: "20px",
    marginBottom: "20px",
  },
  buttons: {},
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  cardMedia: {
    width: "150px",
    height: "200px",
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
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20,
  },
  description: {
    alignItems: "center",
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

function Search() {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();

  useEffect(() => {}, []);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const searchGoogleBooks = (query) => {
    API.search(query)
      .then((res) => setBooks(res.data.items))
      .catch((err) => console.log(err.message));
  };

  const saveSearchItem = (bookID) => {
    const book = books.find((x) => x.id === bookID);
    const bookData = {
      googleID: book.id,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.smallThumbnail,
      link: book.volumeInfo.infoLink,
    };
    API.saveBook(bookData)
      .then((res) => console.log(`${bookData.title} Saved to the database`))
      .catch((err) => setError(err));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    searchGoogleBooks(search);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <AppBar className={classes.appbar} position="relative" align="center">
        <Toolbar>
          <Typography variant="h4" color="inherit">
            Search for and save books of interest
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <AppBar className={classes.appbar} position="relative" align="center">
          <Toolbar>
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
                  label="search for a book in GoogleBooks"
                />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        {books.length ? (
          books.map((book) => (
            <Accordion
              expanded={expanded === book.id}
              onChange={handleChange(book.id)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1c-content"
                id="panel1c-header"
              >
                <Grid container spacing={0}>
                  <Grid item xs={2}>
                    <CardMedia
                      component="img"
                      className={classes.cardMedia}
                      image={book.volumeInfo.imageLinks.smallThumbnail}
                      height="300"
                      title="Image title"
                    />
                  </Grid>
                  <Grid item xs={10}>
                    <Typography variant="caption" display="block" gutterBottom>
                      Title:
                    </Typography>
                    <Typography variant="h3">
                      {book.volumeInfo.title}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                      Author/s:
                    </Typography>
                    <Typography variant="5">
                      {book.volumeInfo.authors.join(" & ")}
                    </Typography>
                  </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails className={classes.description}>
                <Typography variant="caption">
                  {book.volumeInfo.description}
                  <br />
                </Typography>
              </AccordionDetails>
              <AccordionActions>
                <Button
                  target="_blank"
                  variant="contained"
                  href={book.volumeInfo.infoLink}
                  color="primary"
                  size="small"
                  className={classes.buttons}
                >
                  View
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  value={book.id}
                  className={classes.buttons}
                  onClick={saveSearchItem.bind(this, book.id)}
                >
                  Save
                </Button>
              </AccordionActions>
            </Accordion>
          ))
        ) : (
          <p>{error.message}</p>
        )}
      </main>
    </>
  );
}

export default Search;
