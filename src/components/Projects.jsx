import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import "react-multi-carousel/lib/styles.css";

export const Projects = () => {
  const projects = [
    {
      title: "Counter-List",
      description:
        "This app was created to display the characters in the multiple games shown and display their information as well as their most popular and best counters.",
      imgURL: "https://i.gyazo.com/64840809130e04ab3569b797cb1f2586.jpg",
      imgLink: "https://weakagainst.surge.sh/",
    },
    {
      title: "Sound-Proof",
      description:
        "This app was created to manipulate stored data into a music sharing website where people can talk about music to other people in multiple ways such as with blog posts and chatrooms.",
      imgURL: "https://i.gyazo.com/a8689119312b4377536f68f706c36e48.png",
      imgLink: "https://soundproof-demo.onrender.com",
    },
  ];
  return (
    <section className="projects" id="projects">
      <div className="project-bx">
        <Container>
          <Row>
            <Col>
              <h2>Projects</h2>
              <p id="projectid">
                Below are the various projects that I have worked out as well as
                information about them.{" "}
              </p>
              <Tab.Container id="project-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pulls-tab"
                ></Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};
