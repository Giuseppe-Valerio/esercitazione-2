import { Component } from "react";
import { Button, Card } from "react-bootstrap";
import stupida from "../assets/data/fantasy.json";

class AllTheBooks extends Component {
  render() {
    return (
      <div>
        {stupida.map((book) => (
          <Card
            key={`book-${book.asin}`}
            style={{
              width: "18rem",
              display: "inline-block",
              backgroundColor: "red",
              verticalAlign: "top",
              marginLeft: "10px",
            }}
          >
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>{book.price} £</Card.Text>
              <Button variant="primary">Comprate</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
}
export default AllTheBooks;
