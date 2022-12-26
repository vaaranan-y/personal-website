import react, { useState } from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import "../styles.css";
import Portrait from "./Portrait_Vaaranan Yogalingam.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function AboutSlide() {
  return (
    <section id="about" style={{ backgroundColor: "#152238" }}>
      <div
        style={{
          padding: "5%",
          backgroundColor: "#152238",
        }}
      >
        <h1
          id={"aboutTitle"}
          style={{ fontFamily: "Avenir", fontWeight: "900" }}
        >
          ABOUT
        </h1>
        <Row>
          <Col lg={8}>
            <Row id={"aboutBlurb"}>
              <p style={{ color: "#0096FF" }}>
                I have been coding since the age of 10, when I created my first
                program: a quiz game made from bash script. It ignited my
                passion for coding, and using programming to solve and implement
                my problems and ideas.
              </p>
            </Row>
            <Row id={"aboutBlurb"}>
              <p style={{ color: "#0096FF" }}>
                My interests include Backend Development, Cloud Computing,
                Embedded Systems/Firmware, and Machine Learning. I hope to one
                one day combine all these skills into a career related to IoT
                development.
              </p>
            </Row>
            <Row id={"aboutBlurb"}>
              <p style={{ color: "#0096FF" }}>
                In my free time, I do photography, which I have been doing for
                about 6 years. I also practice Taekwondo, having recently
                received my first degree black belt in 2019, after training for
                almost 10 years. Finally, I volunteer at my local food bank
                called "FeedScarborough" on the Weekends, when I am back in
                Toronto.
              </p>
            </Row>
          </Col>

          <Col lg={4} id={"aboutPortrait"}>
            <img src={Portrait} alt="loading..." id={"aboutImage"} />
          </Col>
        </Row>

        <p id={"knowledgeTitle"}>Technologies I am experienced with:</p>

        <div
          id={"tableText"}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Row style={{ color: "#FFFFFF" }}>
            <Col style={{ justifyContent: "center" }}>
              <Row id={"skillTitle"}>Languages</Row>
              <Row id={"skillItem"}>Java</Row>
              <Row id={"skillItem"}>JavaScript</Row>
              <Row id={"skillItem"}>Python</Row>
              <Row id={"skillItem"}>C++</Row>
              <Row id={"skillItem"}>C</Row>
              <Row id={"skillItem"}>ARM Assembly</Row>
            </Col>
            <Col>
              <Row id={"skillTitle"}>Frameworks</Row>
              <Row id={"skillItem"}>React.js</Row>
              <Row id={"skillItem"}>Express.js</Row>
              <Row id={"skillItem"}>Django</Row>
              <Row id={"skillItem"}>React Native</Row>
              <Row id={"skillItem"}>Angular.js</Row>
            </Col>
            <Col>
              <Row id={"skillTitle"}>Technologies</Row>
              <Row id={"skillItem"}>AWS</Row>
              <Row id={"skillItem"}>Azure</Row>
              <Row id={"skillItem"}>Micro Controllers (STM 32, Arduino)</Row>
              <Row id={"skillItem"}>ARM Assembly</Row>
              <Row id={"skillItem"}>Computer Vision Modeling</Row>
              <Row id={"skillItem"}>Natural Language Processing</Row>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
}
