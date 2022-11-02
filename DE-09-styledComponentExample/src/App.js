import React from "react";
import { ThemeProvider } from "styled-components";
import Card from "./components/Card";
import Header from "./components/Header";

const style = {
  colors: {
    logo: "orange",
    header: "lightblue",
  },
  responsive: "724px",
};

const App = () => {
  return (
    <ThemeProvider theme={style}>
      <Header />
      <Card />
    </ThemeProvider>
  );
};

export default App;
