import React from "react";
import jumbotron from "./fixtures/jumbo";
import { JumbotronContainer } from "./containers/jumbotron";
import { FooterContainer } from "./containers/footer";

export default function App() {
  return (
    <>
      <JumbotronContainer />
      <FooterContainer />
    </>
  );
}
