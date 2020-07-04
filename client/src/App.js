import React from "react";
import { CssBaseline, Container } from "@material-ui/core/";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
