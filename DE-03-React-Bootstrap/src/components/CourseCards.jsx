import { Container, Row, Col, Card, Button } from "react-bootstrap";

const CourseCards = ({ data1 }) => {
  console.log(data1);
  console.log("a", data1[0].name); //Bu sekilde verilere ulasacagiz
  return (
    <div>
      <Container className=" mt-5 p-3">
        <Row className="g-1 d-flex justify-content-center">
          {data1.map((e, index) => {
            const { name, text, img } = e;
            return (
              <Col
                key={index}
                sm={12}
                md={6}
                lg={4}
                className="d-flex justify-content-center"
              >
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={img} />
                  <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                    <Button variant="primary">Detaylar</Button>
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
