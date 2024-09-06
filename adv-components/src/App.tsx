import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";

function App() {
  // return <h1>Let's get started!</h1>;
  return (
    <>
      <Input id="name" label="Your name" disabled/>
      <Input id="age" label="Your age" type="number" />
      <p>
        {/* <Button el="button">A Button</Button> */}
        <Button >A Button</Button>
      </p>
      <p>
        {/* <Button el="anchor" href="https://google.com">A Link</Button> */}
        <Button href="https://google.com">A Link</Button>
      </p>
      <Container as={Button} onClick={() => {}} style={{color: 'red'}}>Button!</Container>
    </>
  );
}

export default App;
