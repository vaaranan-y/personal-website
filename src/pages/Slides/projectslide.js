import react, { useState } from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import "../styles.css";
import CodePlusDemo from "./gif-codeplus-demo.gif";
import InstaRecipeDemo from "./gif-instarecipe-demo.gif";
import Ycsa from "./gif-ycsa-demo.gif";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ProjectSlide() {
  const [size, setSize] = useState(window.innerWidth);

  const handleResize = () => {
    setSize(window.innerWidth);
  };

  window.addEventListener("resize", handleResize);

  if (size > 992) {
    return (
      <section
        style={{ padding: 50, backgroundColor: "#152238", height: "100%" }}
      >
        <h1
          id={"projectsTitle"}
          style={{ fontFamily: "Avenir", fontWeight: "900" }}
        >
          PROJECTS
        </h1>
        <Row style={{ marginTop: "5%", marginBottom: "5%" }}>
          <Col md={12} lg={6}>
            <img
              src={CodePlusDemo}
              alt="loading..."
              style={{
                width: "100%",
                border: "2px solid #000000",
                borderRadius: "5px",
              }}
            />
          </Col>
          <Col md={12} lg={6} id={"projectDesc"}>
            <p>
              This was one of the first projects I developed, made from pure
              Java, using Java GUI Libraries like Java Swing and Java AWT. I
              wanted to create a tool that would help me take notes in my
              CS/Coding Classes. Typing in word or normal IDEs made it hard to
              annotate, and writing by hand made it hard to make changes. This
              program I developed tried to combine the best of both worlds into
              one streamlined note-taker, designed specfiically for code-based
              lessons.
            </p>
          </Col>
        </Row>
        <Row style={{ marginBottom: "5%" }}>
          <Col lg={6} id={"projectDesc"}>
            <p>
              One of my later projects, this web app I developed helped me
              better understand CRUD operations and use REST APIs and is one of
              many things that inspired me to learn more about Backend
              development. InstaRecipe was a web app I created for me and my
              friends to socialize and bond over food. As the name implies, you
              make posts like instagram, but in the form of recipes, which
              anyone can read, but only owners can modify, using proper secuirty
              measures.
            </p>
          </Col>
          <Col lg={6}>
            <img
              src={InstaRecipeDemo}
              alt="loading..."
              style={{
                width: "100%",
                border: "2px solid #000000",
                borderRadius: "5px",
              }}
            />
          </Col>
        </Row>
        <Row style={{ marginBottom: "5%" }}>
          <Col lg={6}>
            <img
              src={Ycsa}
              alt="loading..."
              style={{
                width: "100%",
                border: "2px solid #6A6A6A",
                borderRadius: "5px",
              }}
            />
          </Col>
          <Col lg={6} id={"projectDesc"}>
            <p>
              This is one of my most recent projects. I used the VADER setniment
              analysis NLP model to analyze and produce a sentiment score for
              each of a certain number of comments retrieved from a youtube
              video a user is currently watching, using a 3rd Party YouTube API.
              This is all done in a backend API I developed in Django. I created
              a frontend for chrome extension to display the results of my API,
              using Angular.js, creating a circular representation of the
              normalized average sentiment score on a scale from 0 to 100.
            </p>
          </Col>
        </Row>
      </section>
    );
  } else {
    return (
      <section
        style={{ padding: 50, backgroundColor: "#152238", height: "100%" }}
      >
        <h1
          id={"projectsTitle"}
          style={{ fontFamily: "Avenir", fontWeight: "900" }}
        >
          PROJECTS
        </h1>
        <Row style={{ marginTop: "5%", marginBottom: "5%" }}>
          <Col md={12} lg={6}>
            <img
              src={CodePlusDemo}
              alt="loading..."
              style={{
                width: "100%",
                border: "2px solid #000000",
                borderRadius: "5px",
              }}
            />
          </Col>
          <Col md={12} lg={6} id={"projectDesc"}>
            <p>
              This was one of the first projects I developed, made from pure
              Java, using Java GUI Libraries like Java Swing and Java AWT. I
              wanted to create a tool that would help me take notes in my
              CS/Coding Classes. Typing in word or normal IDEs made it hard to
              annotate, and writing by hand made it hard to make changes. This
              program I developed tried to combine the best of both worlds into
              one streamlined note-taker, designed specfiically for code-based
              lessons.
            </p>
          </Col>
        </Row>
        <Row style={{ marginBottom: "5%" }}>
          <Col md={12} lg={6}>
            <img
              src={InstaRecipeDemo}
              alt="loading..."
              style={{
                width: "100%",
                border: "2px solid #000000",
                borderRadius: "5px",
              }}
            />
          </Col>
          <Col md={12} lg={6} id={"projectDesc"}>
            <p>
              One of my later projects, this web app I developed helped me
              better understand CRUD operations and use REST APIs and is one of
              many things that inspired me to learn more about Backend
              development. InstaRecipe was a web app I created for me and my
              friends to socialize and bond over food. As the name implies, you
              make posts like instagram, but in the form of recipes, which
              anyone can read, but only owners can modify, using proper secuirty
              measures.
            </p>
          </Col>
        </Row>
        <Row style={{ marginBottom: "5%" }}>
          <Col lg={6}>
            <img
              src={Ycsa}
              alt="loading..."
              style={{
                width: "100%",
                border: "2px solid #6A6A6A",
                borderRadius: "5px",
              }}
            />
          </Col>
          <Col lg={6} id={"projectDesc"}>
            <p>
              This is one of my most recent projects. I used the VADER setniment
              analysis NLP model to analyze and produce a sentiment score for
              each of a certain number of comments retrieved from a youtube
              video a user is currently watching, using a 3rd Party YouTube API.
              This is all done in a backend API I developed in Django. I created
              a frontend for chrome extension to display the results of my API,
              using Angular.js, creating a circular representation of the
              normalized average sentiment score on a scale from 0 to 100.
            </p>
          </Col>
        </Row>
      </section>
    );
  }
}
