import { Container, Row, Col, Card, Button } from "react-bootstrap";

const CourseCards = ({ data1 }) => {
  console.log(data1);
  console.log("a", data1[0].name); //Bu sekilde verilere ulasacagiz
  return (
    <div>
      <h2>Course Cards </h2>
      <Container>
        <Row>
          {data1.map((e) => {
            return (
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
export default CourseCards;
