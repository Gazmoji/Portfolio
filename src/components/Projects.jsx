import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import "react-multi-carousel/lib/styles.css";

export const Projects = () => {
  const projects = [
    {
      title: "HelloWorld",
      description:
        "Hello World is a full stack application that combines a visual novel storytelling experience with three mini-games. The application is built using React.js, SQL, Redux, CSS, and HTML.",
      imgURL: "https://i.gyazo.com/0d17c74f7000d2227b125d932152be2d.png",
      imgLink: "https://capstone-project-three-jade.vercel.app/",
    },
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
    {
      title: "Poke-Squad",
      description:
        "Poke-Squad+ is an advanced React app designed to help Pokémon trainers create, manage, and strategize their teams effectively. It utilizes the PokeAPI to provide comprehensive information about Pokémon and their various attributes.",
      imgURL: "https://i.gyazo.com/20d6f01a43fc2f8cd1ef73bbd9e559b6.png",
      imgLink: "https://poke-squad.herokuapp.com/",
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
