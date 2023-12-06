import FormControl from "./components/FormControl";
import Container from "react-bootstrap/Container";
import CardContainer from "./components/cardContainer";

function App() {
  return (
    <>
      <Container className="mt-5" style={{maxWidth:"800px"}}>
        <FormControl />
        <CardContainer/>
      </Container>
    </>
  );
}

export default App;
