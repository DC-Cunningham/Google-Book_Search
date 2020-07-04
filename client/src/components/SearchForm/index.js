import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
      width: "100ch",
    },
  },
  button: {
    marginTop: 15,
    height: 40,
    display: "flex",
  },
}));

export default function searchForm(props) {
  const classes = useStyles();

  return (
    <form
      onSubmit={props.handleFormSubmit}
      className={classes.root}
      noValidate
      autoComplete="off"
    >
      <Grid container spacing={0}>
        <Grid item xs={11}>
          <TextField
            id="search"
            label={props.label}
            name="search"
            variant="outlined"
            style={{ margin: 8 }}
            fullWidth
            onChange={props.handleInputChange}
            value={props.search}
          />
        </Grid>
        <Grid item xs={1}>
          <Button
            className={classes.button}
            onClick={props.handleFormSubmit}
            variant="contained"
            color="primary"
          >
            <SearchIcon className={classes.icon} />
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
