// import React from "react";
// import { NavLink } from "react-router-dom";
// import "./style.css";
// import { Box, Row, Container } from "material-ui/components";
// import Panel from "../Panel";

// function Header() {
//   return (
//     <>
//       <Box>
//         <Container maxWidth="sm">
//           <Col size="10">
//             <h1 className="nav-title">Google Book Search</h1>
//           </Col>
//           <Col size="10">
//             <div className="nav-links">
//               <NavLink
//                 to="/search"
//                 style={{
//                   fontWeight: "bold",
//                   color: "black",
//                   textDecoration: "none",
//                 }}
//                 activeStyle={{
//                   fontWeight: "bold",
//                   color: "lightgrey",
//                   textDecoration: "none",
//                 }}
//               >
//                 SEARCH
//               </NavLink>
//               <NavLink
//                 to="/saved"
//                 style={{
//                   fontWeight: "bold",
//                   color: "black",
//                   textDecoration: "none",
//                 }}
//                 activeStyle={{
//                   fontWeight: "bold",
//                   color: "lightgrey",
//                   textDecoration: "none",
//                 }}
//               >
//                 SAVED
//               </NavLink>
//             </div>
//           </Col>
//         </Container>
//       </Box>
//       <Box>
//         <Row size="1-1">
//           <Col size="">
//             <Panel>
//               <h1>Search for and save books of interest</h1>
//             </Panel>
//           </Col>
//         </Row>
//       </Box>
//     </>
//   );
// }

// export default Header;

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
    background: "0 3px 5px 2px rgba(33, 203, 243, .3)",
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
      <AppBar position="static">
        <Typography variant="h1" gutterBottom>
          Google Book Search
        </Typography>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs"
        >
          <LinkTab label="Search" href="/search" {...a11yProps(0)} />
          <LinkTab label="Saved" href="/saved" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Search />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Saved />
      </TabPanel>
    </div>
  );
}
