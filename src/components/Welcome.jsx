import { Alert } from "react-bootstrap";

const Welcome = function (props) {
  return (
    <Alert show={props.show} variant="success">
      <p>Comprate libri da epicode, cosi sarete dei maestri nel programmare!!!</p>
      <hr />
    </Alert>
  );
};
export default Welcome;
