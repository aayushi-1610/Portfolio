import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Your actual image imports
import pillDispenser from "../../Assets/Projects/pillDispenser.png";
import sareeSite from "../../Assets/Projects/sareeSite.png";
import webcycle from "../../Assets/Projects/webcycle.png";
import lineFollower from "../../Assets/Projects/lineFollower.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Smart Pill Dispenser */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pillDispenser}
              isBlog={false}
              title="Smart Pill Dispenser with Voice Assistant"
              description="Built a smart pill dispenser using Arduino UNO, IR Sensor, RTC, Servo, LCD, and Python-based voice assistant integrated with GPT-2 for offline medical queries and pill tracking."
              ghLink="https://github.com/aayushi-1610/SmartPillDispenser"
              // demoLink=""
            />
          </Col>

          {/* Saree E-Commerce */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sareeSite}
              isBlog={false}
              title="Kashvi Creation – Saree E-Commerce"
              description="MERN-based saree shopping platform with admin/user login, CRUD for products, secure JWT auth, Cloudinary media uploads, and responsive React UI. Hosted on Vercel."
              ghLink="https://github.com/aayushi-1610/Saree-Ecommerce"
              // demoLink="https://kashvi.vercel.app"
            />
          </Col>

          {/* WebCycle */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webcycle}
              isBlog={false}
              title="WebCycle – Eco-Sustainability Platform"
              description="React and Node-based eco platform promoting sustainable living. Includes blogs, donations, quizzes, carbon calculators, and green resource maps with responsive UI."
              ghLink="https://github.com/aayushi-1610/WebCycle"
              // demoLink=""
            />
          </Col>

          {/* Line Follower Robot */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lineFollower}
              isBlog={false}
              title="Line Follower Robot"
              description="Arduino-powered robot that follows black lines using IR sensors. Controlled speed using PWM logic to smoothly navigate curves and intersections."
              ghLink="https://github.com/aayushi-1610/LineFollowerBot"
              // demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
