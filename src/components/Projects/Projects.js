import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Real-Time Chat Application"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js and Material-UI. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/Vkpro55/Chat-Mern-App"
              demoLink="https://realtime-chatapp-3mrk.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Yelp Camp"
              description="Yelp Camp is a full-stack app built with Node.js, Express, and MongoDB, allowing users to browse, review, and add campgrounds. It supports include user-friendly interfaces, user authentication, CRUD operations, and integrates Mapbox for location features."
              ghLink="https://github.com/Vkpro55/yelp-camp/tree/master"
              demoLink="https://yelpcamp-dwzt.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Netflix Clone"
              description="Netflix Clone is a full-stack app built with Python, Django, and PostgreSQL, allowing users to sign up, log in, stream movies, and manage their watchlists. It features secure authentication, movie categorization, and a responsive design."
              ghLink="https://github.com/Vkpro55/Netflix-Clone"
              demoLink=""
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
