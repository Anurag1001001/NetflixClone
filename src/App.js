import React from "react";
import jumbotron from "./fixtures/jumbo";
import Jumbotron from "./components/jumbotron";

function App() {
  return (
    <Jumbotron.Container>
      {jumbotron.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          {/*Here we're using the concept of composition and pops(or you can say in your word props and props.children(if you forget about this go and read composition and inheritance from official documentation))  */}
          {/* so basically whatever passed b/w <Jumbotron>....</Jumbotron> is the children of jumbotron and passed as a props */}
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image src={item.image} alt={item.alt} />
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}

export default App;
