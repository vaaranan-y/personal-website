import react, { useState } from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import "../styles.css";
import Lottie from "react-lottie";
import animationData from "./spinning-cogs";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaLinkedinIn, FaGithub, FaMedium, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export default function IntroSlide() {
  const [size, setSize] = useState(window.innerWidth);

  const handleResize = () => {
    setSize(window.innerWidth);
  };

  window.addEventListener("resize", handleResize);

  const introBlurb =
    "👋 Hi! My name is Vaaranan Yogalingam, and I am a 3rd Year Computer Science Co-op student, at the University of Waterloo, pursuing a specialization in Digital Hardware. I am a passionate learner, who enjoys the challenging and evolving nature of the tech field!";
  const [visible, setVisible] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div id={"intro"} style={{ backgroundColor: "#152238", overflow: "auto" }}>
      <div style={{ marginTop: "2.5%" }}>
        <Typewriter
          options={{
            wrapperClassName: "typewriter_title",
            delay: 25,
            cursorClassName: "fadeOut",
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                '<span id="titleText">intro(name={"</span><span id="name_tag">Vaaranan</span><span id="titleText">"});</span><br><span id="subText">return ["Student", "Developer", "Inquirer"];</span>'
              )
              .callFunction(() => {
                setVisible(true);
              })
              .start();
          }}
        />
      </div>
      <div className={visible ? "fadeIn" : "fadeOut"} id={"introSubSection"}>
        <Row>
          <Col lg={6}>
            <div id={"introBlurb"} style={{ color: "#0096FF" }}>
              {introBlurb}
            </div>
            <div id="socialsContainer">
              <a href={"mailto:vyogalin@uwaterloo.ca"}>
                <AiOutlineMail
                  id={"socialIcon"}
                  size={size <= 992 ? "7.5vw" : "3.5vw"}
                />
              </a>
              <a href={"https://www.linkedin.com/in/vyogalin/"}>
                <FaLinkedinIn
                  id={"socialIcon"}
                  size={size <= 992 ? "7.5vw" : "3.5vw"}
                />
              </a>

              <a href={"https://github.com/vaaranan-y"}>
                <FaGithub
                  id={"socialIcon"}
                  size={size <= 992 ? "7.5vw" : "3.5vw"}
                />
              </a>

              <a href={"https://medium.com/@vaaranan.y"}>
                <FaMedium
                  id={"socialIcon"}
                  size={size <= 992 ? "7.5vw" : "3.5vw"}
                />
              </a>

              <a href={"https://www.instagram.com/vaaranan_"}>
                <FaInstagram
                  id={"socialIcon"}
                  size={size <= 992 ? "7.5vw" : "3.5vw"}
                />
              </a>
            </div>
          </Col>
          <Col lg={6} style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: "27.5vw",
              }}
            >
              <Lottie options={defaultOptions} />
            </div>
          </Col>
        </Row>
      </div>
    </div>

    // <section style={{ backgroundColor: "#152238", height: 800 }}>
    //   <div>
    //     <p style={{ color: "#FFFFFF" }}>Intro</p>
    //     {/* <div style={{ paddingTop: "6.5%" }}>

    //     </div>

    //   </div>
    // </section>
  );
}
