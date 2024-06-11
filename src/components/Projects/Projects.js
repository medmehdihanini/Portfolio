import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/TeamSyinc.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/esport.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/portofilio.png";

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
              title="E-Sports"
              description="This project was developed using Symfony and includes features such as product management, shopping cart, user management, account recharges, coaches, purchase history, online and offline courses, tournaments, groups, news, and games. I collaborated closely with my team to ensure the success of this project and gained valuable experience in web development and project management."
              ghLink="https://github.com/medmehdihanini/pidev_3A37_siuuu6"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Profilify"
              description="I contributed to the creation of an innovative user profile management platform. Using Angular and Spring Boot, we implemented secure login features, dynamic user profiles, and advanced management tools. Our goal was to provide a seamless user experience while ensuring data security."
              ghLink="https://github.com/medmehdihanini/Profilify-spring_boot"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={emotion}
                isBlog={false}
                title="Collaborative Document Management Application"
                description="We developed an innovative and user-friendly application for collaborative document management using Editor.js, React, NestJS, and MongoDB. Our platform enables seamless document creation, efficient management, real-time collaboration, and powerful search functionality. Users can organize documents into folders, collaborate in real-time, and manage access permissions, all within a Notion-like interface designed to enhance productivity and creativity."
                ghLink="https://github.com/medmehdihanini/TeamSync-NestJs-BackEnd"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Mailing Management Enhancement Project"
              description="Developed new mailing management features, integrated functionalities, and conducted thorough testing to assess code security and performance. Implemented optimal solutions to enhance site speed

"
              ghLink="https://github.com/medmehdihanini/softsquareit"
            />
          </Col>




        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
