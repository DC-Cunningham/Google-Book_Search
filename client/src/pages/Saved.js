import React, { useState, useEffect } from "react";
import {
  AppBar,
  Button,
  CardMedia,
  Grid,
  Toolbar,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AccordionActions,
  makeStyles,
} from "@material-ui/core";
import API from "../utils/API";
import { ExpandMore } from "@material-ui/icons";

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
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

function Saved() {
  const [books, setBooks] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();

  // Load all stored books
  useEffect(() => {
    loadBooks();
  }, []);

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }

  // Deletes a book from the database with a given id, then reloads books from the db
  const deleteBook = (book) => {
    API.deleteBook(book._id)
      .then((res) => console.log(`${book.title} removed from the database`))
      .then((res) => loadBooks())
      .catch((err) => console.log(err));
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <AppBar className={classes.appbar} position="relative" align="center">
        <Toolbar>
          <Typography variant="h4" color="inherit">
            Your Saved Books
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {books.length ? (
          books.map((book) => (
            <Accordion
              expanded={expanded === book._id}
              onChange={handleChange(book._id)}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1c-content"
                id="panel1c-header"
              >
                <Grid container spacing={0}>
                  <Grid item xs={2}>
                    <CardMedia
                      component="img"
                      className={classes.cardMedia}
                      image={book.image}
                      height="300"
                      title="Image title"
                    />
                  </Grid>
                  <Grid item xs={10}>
                    <Typography variant="caption" display="block" gutterBottom>
                      Title:
                    </Typography>
                    <Typography variant="h3">{book.title}</Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                      Author/s:
                    </Typography>
                    <Typography variant="5">
                      {book.authors.join(" & ")}
                    </Typography>
                  </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails className={classes.description}>
                <Typography variant="caption">
                  {book.description}
                  <br />
                </Typography>
              </AccordionDetails>
              <AccordionActions>
                <Button
                  target="_blank"
                  variant="contained"
                  href={book.link}
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
                  onClick={() => deleteBook(book)}
                >
                  Delete
                </Button>
              </AccordionActions>
            </Accordion>
          ))
        ) : (
          <AppBar className={classes.appbar} position="relative" align="center">
            <Toolbar>
              <Typography variant="h4" color="error">
                You haven't saved any books to the database yet
              </Typography>
            </Toolbar>
          </AppBar>
        )}
      </main>
    </>
  );
}

export default Saved;
