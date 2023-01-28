import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/royalB.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/bluemercury.png";
// import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/firstcry.png";

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
              title="Bluemercury"
              description=" Bluemercury.com is a leading luxury beauty retailer offering the best cosmetics,
               skin care, makeup, perfume, hair, and bath and body. All products located on New Page. "
              ghLink="https://github.com/shantanubose01/BluemercuryClone"
              demoLink="https://polite-froyo-1fca91.netlify.app//"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="FirstCry"
              description="FirstCry.com - Asia's Largest Online Baby and Kids Store, is India's largest online shop for
               new mom and baby products, offering top of the line discounts."
              ghLink="https://github.com/adityarajbenn/firstCry"
              demoLink="https://firstcry-clone.netlify.app/"
            />
          </Col>
  
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Royal Brothers"
              description=" Our goal with Royal Brothers is to make bike rentals available across all cities and tourist 
              destinations in India. "
              ghLink="https://github.com/Rajatsinha05/royalbrothers"
              demoLink="https://royalbrothers.pages.dev/"
            />
          </Col>
        </Row>  
      </Container>
    </Container>
  );
}

export default Projects;
