import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
      width: "100ch",
    },
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
      <div>
        <Input
          id="search"
          label="Search for a book"
          name="search"
          variant="outlined"
          style={{ margin: 8 }}
          fullWidth
          onChange={props.handleInputChange}
          value={props.search}
        />
      </div>
      <div>
        <Button
          onClick={props.handleFormSubmit}
          variant="contained"
          color="primary"
        >
          Search
        </Button>
      </div>
    </form>
  );
}
