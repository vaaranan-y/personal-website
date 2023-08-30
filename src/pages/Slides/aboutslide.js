import react, { useState } from "react";
import { Link } from "react-scroll";
import "../styles.css";
import Portrait from "./Portrait_Vaaranan Yogalingam.jpeg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function AboutSlide() {
  return (
    <section id="about" style={{ backgroundColor: "#152238" }}>
      <div
        style={{
          padding: 50,
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
                I first learned to code when I was around 10, creating a bash
                script quiz game in notepad. This simple program ignited my
                passion for coding, and inspired me to use programming to solve
                and implement solutions to everyday challenges and problems.
              </p>
            </Row>
            <Row id={"aboutBlurb"}>
              <p style={{ color: "#0096FF" }}>
                My interests include Backend Development, Cloud Computing,
                Embedded Systems/Firmware, and Machine Learning. I hope to one
                one day combine all these skills and achieve a goal in IoT
                development. However, I still have a lot to explore and learn,
                so I am open to any and all opportunities!
              </p>
            </Row>
            <Row id={"aboutBlurb"}>
              <p style={{ color: "#0096FF" }}>
                I am originally from Toronto, but I like to explore and travel
                to new places. In my free time, I do photography, which has been
                a hobby of mine for around 6 years. I also practice Taekwondo,
                having recently received my first degree black belt in 2019,
                after training for over 10 years. Finally, I volunteer at my
                local food bank called "FeedScarborough" on the weekends and
                some weekdays, when I am back in Toronto. They're a great
                organization dedicated to addressing the issue of food
                insecurity in the Scarborough neighbourhood. You can learn more
                about them{" "}
                <a href="https://scarboroughfoodsecurityinitiative.com/home">
                  here
                </a>
                .
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
              <Row id={"skillItem"}>&#8227; Java</Row>
              <Row id={"skillItem"}>&#8227; JavaScript</Row>
              <Row id={"skillItem"}>&#8227; Python</Row>
              <Row id={"skillItem"}>&#8227; PHP</Row>
              <Row id={"skillItem"}>&#8227; C++</Row>
              <Row id={"skillItem"}>&#8227; C</Row>
              <Row id={"skillItem"}>&#8227; ARM Assembly</Row>
              <Row id={"skillItem"}>&#8227; SQL (PostgreSQL and MySQL)</Row>
              <Row id={"skillItem"}>&#8227; NoSQL (DynamoDB and MongoDB)</Row>
            </Col>
            <Col>
              <Row id={"skillTitle"}>Frameworks</Row>
              <Row id={"skillItem"}>&#8227; Node.js</Row>
              <Row id={"skillItem"}>&#8227; React.js</Row>
              <Row id={"skillItem"}>&#8227; Express.js</Row>
              <Row id={"skillItem"}>&#8227; Django</Row>
              <Row id={"skillItem"}>&#8227; React Native</Row>
              <Row id={"skillItem"}>&#8227; Angular.js</Row>
              <Row id={"skillItem"}>&#8227; Spring Boot</Row>
            </Col>
            <Col>
              <Row id={"skillTitle"}>Technologies</Row>
              <Row id={"skillItem"}>&#8227; AWS</Row>
              <Row id={"skillItem"}>&#8227; Azure</Row>
              <Row id={"skillItem"}>
                &#8227; Micro Controllers (STM 32, Arduino)
              </Row>
              <Row id={"skillItem"}>&#8227; ARM Assembly</Row>
              <Row id={"skillItem"}>&#8227; Computer Vision</Row>
              <Row id={"skillItem"}>&#8227; Natural Language Processing</Row>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
}
