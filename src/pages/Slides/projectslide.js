import react, { useState } from "react";
import { Link } from "react-scroll";
import "../styles.css";
import CodePlusDemo from "./gif-codeplus-demo.gif";
import InstaRecipeDemo from "./gif-instarecipe-demo.gif";
import Ycsa from "./gif-ycsa-demo.gif";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FaLinkedinIn, FaGithub, FaMedium, FaInstagram } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

export default function ProjectSlide() {
  const [size, setSize] = useState(window.innerWidth);

  const handleResize = () => {
    setSize(window.innerWidth);
  };

  window.addEventListener("resize", handleResize);

  return (
    <section
      id={"projects"}
      style={{ padding: 50, backgroundColor: "#152238", height: "100%" }}
    >
      <h1
        id={"projectsTitle"}
        style={{ fontFamily: "Avenir", fontWeight: "900" }}
      >
        PROJECTS
      </h1>

      <Row>
        <Col lg={4} md={12} style={{ marginTop: 50, marginBottom: 50 }}>
          <div
            style={{
              background: "-webkit-linear-gradient(#89CFF0, #0096FF)",
              padding: "2.5%",
              borderRadius: "1%",
              border: "4px solid #FFFFFF",
              height: "100%",
            }}
          >
            <Row>
              <img
                src={CodePlusDemo}
                alt="loading..."
                style={{
                  width: "100%",
                }}
              />
            </Row>
            <Row style={{ justifyContent: "center" }}>
              <h1
                style={{
                  textAlign: "center",
                  fontFamily: "Avenir",
                  margin: "5%",
                  fontSize: 30,
                  fontWeight: "700",
                }}
              >
                CODE PLUS
              </h1>
              <p
                style={{
                  textAlign: "center",
                  fontFamily: "Avenir",
                  fontSize: 17.5,
                  width: "90%",
                  fontWeight: "400",
                }}
              >
                A note taking application designed for CS courses to allow
                students to write and annotate code presented in class.
              </p>
            </Row>
            <Row style={{ justifyContent: "center" }}>
              <Button
                variant="dark"
                style={{
                  width: "50%",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  fontFamily: "Avenir",
                }}
                href="https://github.com/vaaranan-y/codeplus"
              >
                <FaGithub id={"socialIcon"} />
                GitHub
              </Button>
            </Row>
          </div>
        </Col>
        <Col
          lg={4}
          md={12}
          style={{ marginTop: size <= 992 ? 0 : 50, marginBottom: 50 }}
        >
          <div
            style={{
              background: "-webkit-linear-gradient(#0096FF, #89CFF0)",
              padding: "2.5%",
              borderRadius: "1%",
              border: "4px solid #FFFFFF",
              height: "100%",
            }}
          >
            <Row>
              <img
                src={InstaRecipeDemo}
                alt="loading..."
                style={{
                  width: "100%",
                }}
              />
            </Row>
            <Row style={{ justifyContent: "center" }}>
              <h1
                style={{
                  textAlign: "center",
                  fontFamily: "Avenir",
                  margin: "5%",
                  fontSize: 30,
                  fontWeight: "700",
                }}
              >
                INSTA RECIPE
              </h1>
              <p
                style={{
                  textAlign: "center",
                  fontFamily: "Avenir",
                  fontSize: 17.5,
                  width: "90%",
                  fontWeight: "400",
                }}
              >
                A web app created for people to socialize and bond over food.
                Users can't make posts like on instagram, but in the form of
                recipes to share with others.
              </p>
            </Row>
            <Row style={{ justifyContent: "center" }}>
              <Button
                variant="dark"
                style={{
                  width: "50%",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  fontFamily: "Avenir",
                }}
                href={"https://github.com/vaaranan-y/insta-recipe-frontend"}
              >
                <FaGithub id={"socialIcon"} />
                GitHub
              </Button>
            </Row>
          </div>
        </Col>
        <Col
          lg={4}
          md={12}
          style={{ marginTop: size <= 992 ? 0 : 50, marginBottom: 50 }}
        >
          <div
            style={{
              background: "-webkit-linear-gradient(#89CFF0, #0096FF)",
              padding: "2.5%",
              borderRadius: "1%",
              border: "4px solid #FFFFFF",
              height: "100%",
            }}
          >
            <Row>
              <img
                src={Ycsa}
                alt="loading..."
                style={{
                  width: "100%",
                }}
              />
            </Row>
            <Row style={{ justifyContent: "center" }}>
              <h1
                style={{
                  textAlign: "center",
                  fontFamily: "Avenir",
                  margin: "5%",
                  fontSize: 30,
                  fontWeight: "700",
                }}
              >
                YOUTUBE VIDEO SENTIMENT ANALYZER
              </h1>
              <p
                style={{
                  textAlign: "center",
                  fontFamily: "Avenir",
                  fontSize: 17.5,
                  width: "90%",
                  fontWeight: "300",
                }}
              >
                A chrome extension that analyzes the comments of a YouTube video
                a user is currently watching, and returns the overall sentiment
                score on a scale of 0% to 100% (a pseudo replacement for the
                noew removed dislike button)
              </p>
            </Row>
            <Row style={{ justifyContent: "center" }}>
              <Button
                variant="dark"
                style={{
                  width: "50%",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  fontFamily: "Avenir",
                }}
                href={
                  "https://github.com/vaaranan-y/youtube-comment-sentiment-chrome-ext"
                }
              >
                <FaGithub id={"socialIcon"} />
                GitHub
              </Button>
            </Row>
          </div>
        </Col>
      </Row>
    </section>
  );
}
