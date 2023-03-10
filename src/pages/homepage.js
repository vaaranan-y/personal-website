import React, { useState } from "react";
import { Link } from "react-scroll";
import IntroSlide from "./Slides/introslide";
import AboutSlide from "./Slides/aboutslide";
import ProjectSlide from "./Slides/projectslide";
import CareerSlide from "./Slides/careerslide";
import { RxHamburgerMenu } from "react-icons/rx";
import Fade from "react-reveal/Fade";
import "./styles.css";
import Dropdown from "react-bootstrap/Dropdown";
import { DropdownButton } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Pdf from "./resume.pdf";

export default function HomePage() {
  const [size, setSize] = useState(window.innerWidth);

  const handleResize = () => {
    setSize(window.innerWidth);
  };

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      style={{ paddingBottom: "10px" }}
    >
      <RxHamburgerMenu
        style={{
          color: "#C0C0C0",
          alignItems: "center",
          marginLeft: "20px",
        }}
        size={"25px"}
      />
    </a>
  ));

  window.addEventListener("resize", handleResize);

  return (
    <div className="App">
      {size <= 992 ? (
        <header className="nav">
          <div>
            <Dropdown>
              <Dropdown.Toggle
                as={CustomToggle}
                id="dropdown-custom-components"
              >
                Custom toggle
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#intro">HOME</Dropdown.Item>
                <Dropdown.Item href="#about">ABOUT</Dropdown.Item>
                <Dropdown.Item href="#career">EXPERIENCE</Dropdown.Item>
                <Dropdown.Item href="#projects">PROJECTS</Dropdown.Item>
                <Dropdown.Item href={Pdf} className={"lastItem"}>
                  RESUME
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </header>
      ) : (
        <nav
          style={{
            position: "fixed",
            top: 0,
            backgroundColor: "#0d1421",
            boxShadow: "0 0.125rem 0.25rem 0 rgb(255 255 255 / 11%)",
            padding: "1.5%",
            width: "100%",
            zIndex: 10,
            display: "flex",
            alignItems: "center",
          }}
        >
          <span style={{ marginLeft: "2.5%", marginRight: "2.5%" }}>
            <Link
              activeClass="active"
              smooth
              spy
              to="intro"
              style={
                size <= 992
                  ? { display: "none" }
                  : {
                      color: "#C0C0C0",
                      fontFamily: "Avenir",
                      fontSize: "1.5vw",
                      textDecoration: "none",
                      cursor: "pointer",
                    }
              }
            >
              HOME
            </Link>
          </span>
          <span style={{ marginLeft: "2.5%", marginRight: "2.5%" }}>
            <Link
              activeClass="active"
              smooth
              spy
              to="about"
              style={
                size <= 992
                  ? { display: "none" }
                  : {
                      color: "#C0C0C0",
                      fontFamily: "Avenir",
                      fontSize: "1.5vw",
                      textDecoration: "none",
                      cursor: "pointer",
                    }
              }
            >
              ABOUT
            </Link>
          </span>
          <span style={{ marginLeft: "2.5%", marginRight: "2.5%" }}>
            <Link
              activeClass="active"
              smooth
              spy
              to="career"
              style={
                size <= 992
                  ? { display: "none" }
                  : {
                      color: "#C0C0C0",
                      fontFamily: "Avenir",
                      fontSize: "1.5vw",
                      textDecoration: "none",
                      cursor: "pointer",
                    }
              }
            >
              EXPERIENCE
            </Link>
          </span>
          <span style={{ marginLeft: "2.5%", marginRight: "2.5%" }}>
            <Link
              activeClass="active"
              smooth
              spy
              to="projects"
              style={
                size <= 992
                  ? { display: "none" }
                  : {
                      color: "#C0C0C0",
                      fontFamily: "Avenir",
                      fontSize: "1.5vw",
                      textDecoration: "none",
                      cursor: "pointer",
                    }
              }
            >
              PROJECTS
            </Link>
          </span>
          <span style={{ position: "absolute", float: "right", right: "2.5%" }}>
            <Button href={Pdf} variant="info" style={{ fontFamily: "Avenir" }}>
              Resume
            </Button>
          </span>
        </nav>
      )}
      <div
        style={
          size > 992
            ? { marginTop: "5%", backgroundColor: "#0d1421" }
            : { backgroundColor: "#0d1421" }
        }
      ></div>
      <IntroSlide />
      <AboutSlide />
      <CareerSlide />
      <ProjectSlide />
      <footer className="footer">
        <p
          style={{
            fontSize: "100%",
            color: "#C0C0C0",
            textAlign: "center",
            fontFamily: "Avenir",
          }}
        >
          &#169; Vaaranan Yogalingam 2023
        </p>
      </footer>
    </div>
  );
}
