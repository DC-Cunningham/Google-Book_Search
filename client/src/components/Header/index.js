import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Saved from "../../pages/Saved.js";
import Search from "../../pages/Search.js";
import BackgroundImage from "../../assets/images/library-wall.jpg";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage: "url('../../assets/images/library-wall.jpg')",
  },
  header: {
    background: "linear-gradient(45deg, #000000 30%, #FFFFFF 90%)",
    border: 0,
    borderRadius: 3,
    marginTop: "20px",
    boxShadow: "5px 10px 8px 10px #888888",
  },
  headerText: {
    fontFamily: "Impact",
    margin: "20px",
  },
  tab: {
    backgroundColor: theme.palette.background.paper,
    margin: "10px",
  },
  background: {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: "100%",
  },
}));

export default function Header() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Typography className={classes.headerText} variant="h1" gutterBottom>
          Google Book Search
        </Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs"
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <LinkTab
            className={classes.tab}
            label="Search for some new books"
            href="/search"
            {...a11yProps(0)}
          />
          <LinkTab
            className={classes.tab}
            label="View your saved books"
            href="/saved"
            {...a11yProps(1)}
          />
        </Tabs>
      </AppBar>
      <TabPanel className={classes.background} value={value} index={0}>
        <Search />
      </TabPanel>
      <TabPanel className={classes.background} value={value} index={1}>
        <Saved />
      </TabPanel>
    </div>
  );
}
