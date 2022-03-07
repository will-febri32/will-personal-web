import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Challenge = () => {
  return (
    <Container>
      <div>
        <h3>Frontend Mentor</h3>
        <div>
          <h5>Newbie</h5>
          <ul>
            <li>
              <Link to="frontend-mentor/newbie/1">1</Link>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Challenge;
