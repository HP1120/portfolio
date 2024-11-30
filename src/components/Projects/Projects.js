import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import P1 from "../../Assets/Projects/project-1.png";
import P2 from "../../Assets/Projects/project-2.png";
import P3 from "../../Assets/Projects/project-3.png";
import P4 from "../../Assets/Projects/project-4.png";
import P5 from "../../Assets/Projects/project-5.png";
import P6 from "../../Assets/Projects/project-6.png";

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
              imgPath={P1}
              isBlog={false}
              title="Fitness app "
              description="this my project in which we can use it for persnol trainer as it shows how to exersize in gym , i have use api to show verious animation."
              ghLink="https://github.com/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={P2}
              isBlog={false}
              title="Shoe store UI Design"
              description="Designed a clean, modern shoe store UI in Figma, focusing on an intuitive user experience. The layout emphasizes easy navigation, with visually appealing product grids, interactive hover effects, and well-defined product categories. A minimalist color scheme and ample white space highlight the product details, enhancing user engagement and driving conversions."
              ghLink="https://github.com/"
     
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={P3}
              isBlog={false}
              title="furniture website"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={P4}
              isBlog={false}
              title="calculator "
              description="created a functional calculator using react and it basic and simple."
              ghLink="https://github.com/"
        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={P5}
              isBlog={false}
              title="Netflix clone"
              description="created a replica site of netflix using Html and css."
              ghLink="https://github.com/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={P6}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/"
             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
