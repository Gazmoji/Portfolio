import { Col, Container, Row, Card } from "react-bootstrap";
export const ProjectCard = ({ title, description, imgURL, imgLink }) => {
  return (
    <Container fluid>
      <Row>
        <div className="proj-imgbx">
          <a href={imgLink}>
            <Card.Img varient="top" src={imgURL} />
          </a>
          <Card.Body>
            <div className="proj-txtx">
              <h4>{title}</h4>
              <span id="description">{description}</span>
            </div>
          </Card.Body>
        </div>
      </Row>
    </Container>
  );
};
