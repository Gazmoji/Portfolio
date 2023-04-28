import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Below are the various skills/tools I've learned across my Coding
                Journey.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img
                    src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                    alt="Image"
                  />
                  <img
                    src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
                    alt="Image"
                  />
                  <img
                    src="https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg"
                    alt="Image"
                  />
                  <img
                    src="https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg"
                    alt="Image"
                  />
                  <img
                    src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                    alt="Image"
                  />
                  <img
                    src="https://www.vectorlogo.zone/logos/github/github-icon.svg"
                    alt="Image"
                  />
                  <h5>Front End</h5>
                </div>
                <div className="item">
                  <img
                    src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
                    alt="Image"
                  />
                  <img
                    src="https://www.vectorlogo.zone/logos/nodemonio/nodemonio-icon.svg"
                    alt="Image"
                  />
                  <img
                    src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg"
                    alt="Image"
                  />
                  <img
                    src="https://www.vectorlogo.zone/logos/sequelizejs/sequelizejs-icon.svg"
                    alt="Image"
                  />
                  <img
                    src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
                    alt="Image"
                  />
                  <img
                    src="https://www.vectorlogo.zone/logos/socketio/socketio-icon.svg"
                    alt="Image"
                  />
                  <h5>Back End</h5>
                </div>
                <div className="item">
                  <img
                    src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                    alt="Image"
                  />
                  <img
                    src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                    alt="Image"
                  />
                  <img
                    src="https://brandeps.com/logo-download/R/Redux-logo-vector-01.svg"
                    alt="Image"
                  />
                  <img
                    src="https://www.vectorlogo.zone/logos/json/json-icon.svg"
                    alt="Image"
                  />
                  <h5>Frameworks</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" />
    </section>
  );
};
