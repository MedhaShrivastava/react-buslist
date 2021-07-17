import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardColumns } from "react-bootstrap";

function CardDisplay() {
  return (
    <CardColumns>
      <Card>
        <Card.Img variant="top" src=" https://user-images.githubusercontent.com/87075276/126026510-342d1062-9372-49de-8020-1116a53202ce.jpg" />
        <Card.Body>
          <Card.Title>Rupa Kirana Store </Card.Title>
          <Card.Text>
            Address: Jalalpur city 
            <br/>
            Name of Owner: Ram Prashad
            <br/>
            Contact No.: 76895432
            <br/>
            Email-id: rupakirana122@gmail.com
            <br/>
            Looking For: Salesman ; Delivery Boy 
            {" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 10 mins ago</small>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Img variant="top" src="http://askavy.com/demo/img/img-card.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            Card Text his card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 10 mins ago</small>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Img variant="top" src="http://askavy.com/demo/img/img-card.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            Card Text his card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 11 mins ago</small>
        </Card.Footer>
      </Card>
    </CardColumns>
  );
}
function Card() {
  return (
    <div>
      <CardDisplay />
    </div>
  );
}

export default Card ;