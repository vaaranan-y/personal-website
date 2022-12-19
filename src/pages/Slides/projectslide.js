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
  const [visible, setVisible] = useState(false);
  return (
    <section
      style={{ padding: 50, backgroundColor: "#eaf2fa", height: "100%" }}
    >
      <h1 style={{ fontFamily: "Avenir" }}>PROJECTS</h1>
      <Row style={{ marginBottom: "5%" }}>
        <Col>
          <img
            src={CodePlusDemo}
            alt="loading..."
            style={{
              width: "80%",
              border: "2px solid #000000",
              borderRadius: "5px",
            }}
          />
        </Col>
        <Col>
          <p
            style={{
              fontFamily: "Avenir",
              fontSize: 20,
              fontWeight: 200,
            }}
          >
            This was one of the first projects I developed, made from pure Java,
            using Java GUI Libraries like Java Swing and Java AWT. I wanted to
            create a tool that would help me take notes in my CS/Coding Classes.
            Typing in word or normal IDEs made it hard to annotate, and writing
            by hand made it hard to make changes. This program I developed tried
            to combine the best of both worlds into one streamlined note-taker,
            designed specfiically for code-based lessons.
          </p>
        </Col>
      </Row>
      <Row style={{ marginBottom: "5%" }}>
        <Col>
          <p
            style={{
              fontFamily: "Avenir",
              fontSize: 20,
              fontWeight: 200,
            }}
          >
            One of my later projects, this web app I developed helped me better
            understand CRUD operations and use REST APIs and is one of many
            things that inspired me to learn more about Backend development.
            InstaRecipe was a web app I created for me and my friends to
            socialize and bond over food. As the name implies, you make posts
            like instagram, but in the form of recipes, which anyone can read,
            but only owners can modify, using proper secuirty measures.
          </p>
        </Col>
        <Col>
          <img
            src={InstaRecipeDemo}
            alt="loading..."
            style={{
              width: "80%",
              border: "2px solid #000000",
              borderRadius: "5px",
            }}
          />
        </Col>
      </Row>
      <Row style={{ marginBottom: "5%" }}>
        <Col>
          <img
            src={Ycsa}
            alt="loading..."
            style={{
              width: "80%",
              border: "2px solid #6A6A6A",
              borderRadius: "5px",
            }}
          />
        </Col>
        <Col>
          <p
            style={{
              fontFamily: "Avenir",
              fontSize: 20,
              fontWeight: 200,
            }}
          >
            One of my later projects, this web app I developed helped me better
            understand CRUD operations and use REST APIs and is one of many
            things that inspired me to learn more about Backend development.
            InstaRecipe was a web app I created for me and my friends to
            socialize and bond over food. As the name implies, you make posts
            like instagram, but in the form of recipes, which anyone can read,
            but only owners can modify, using proper secuirty measures.
          </p>
        </Col>
      </Row>
    </section>
  );
}
