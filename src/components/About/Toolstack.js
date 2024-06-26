import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,

    SiJetbrains
} from "react-icons/si";
import { DiLinux } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>


        <Col xs={4} md={2} className="tech-icons">
            <SiJetbrains  />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiLinux  />
        </Col>

    </Row>
  );
}

export default Toolstack;
