import react, { useState } from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import "../styles.css";
import Lottie from "react-lottie";
import animationData from "./spinning-cogs";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function IntroSlide() {
  const introBlurb =
    "Hi! My name is Vaaranan Yogalingam, and I am a 3rd Year Computer Science, Co-op student at the University of waterloo, pursuing a specialization in Digital Hardware. I am a passionate learner, who enjoys the challenging and evolving nature of the tech field!";
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
    <section style={{ backgroundColor: "#152238", overflow: "scroll" }}>
      <div>
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
          <Col lg={7}>
            <div id={"introBlurb"} style={{ color: "#0096FF" }}>
              {introBlurb}
            </div>
          </Col>
          <Col lg={5} style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: "75%",
              }}
            >
              <Lottie options={defaultOptions} />
            </div>
          </Col>
        </Row>
      </div>
    </section>

    // <section style={{ backgroundColor: "#152238", height: 800 }}>
    //   <div>
    //     <p style={{ color: "#FFFFFF" }}>Intro</p>
    //     {/* <div style={{ paddingTop: "6.5%" }}>

    //     </div>

    //   </div>
    // </section>
  );
}
