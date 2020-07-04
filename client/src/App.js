import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "@material-ui/core/container";

const App = () => {
  return (
    <Container>
      <CssBaseline />
      <Header />
      <Footer />
    </Container>
  );
};
export default App;
