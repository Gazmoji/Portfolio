import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://logos.textgiraffe.com/logos/logo-name/George-designstyle-america-m.png"
              alt="Logo"
              width="125px"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/george-angelidis-7091511b8/">
                  <img
                    src="https://static-00.iconduck.com/assets.00/linkedin-icon-512x512-vkm0drb1.png"
                    width="50px"
                  />
                </a>
                <a href="https://github.com/Gazmoji">
                  <img
                    src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7914417/github-icon-md.png"
                    width="50px"
                  />
                </a>
                <a
                  href="George-Angelidis-WebDeveloper-FancyResume-2023.pdf"
                  download=""
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/6614/6614677.png"
                    width="50px"
                  />
                </a>
              </div>
              <button
                onClick={() => {
                  window.location.href = "#contact";
                  onUpdateActiveLink("contact");
                }}
                className={
                  activeLink === "contact"
                    ? "active navbar-link"
                    : "navbar-link"
                }
              >
                Contact Me Here
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
