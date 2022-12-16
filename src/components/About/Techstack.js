import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        {/* <CgCPlusPlus /> */}
        <img src="https://mohitkss.github.io/static/media/html5.4e6edfe05f07c383e94f.png" style={{width:"55px" , height:"50px"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src="https://mohitkss.github.io/static/media/css3.845e8eb63836bef093cf.png" style={{width:"55px" , height:"50px"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src="https://mohitkss.github.io/static/media/redux.7fec6369cecd1cbd44d6.png" style={{width:"55px" , height:"50px"}}/> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src="https://mohitkss.github.io/static/media/mern.b58d81727b47466a7cda.png" style={{width:"55px" , height:"50px"}}/> 
      </Col>
      
    </Row>
  );
}

export default Techstack;
