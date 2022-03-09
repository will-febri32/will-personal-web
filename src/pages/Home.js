import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Link to="challenge">Challenge</Link>
    </Container>
  );
};

export default Home;
