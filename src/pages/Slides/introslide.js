import react, { useState } from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import "../styles.css";

export default function IntroSlide() {
  const introBlurb =
    "Hi! My name is Vaaranan Yogalingam, and I am a 3rd Year Computer Science student at the University of waterloo, pursuing a specialization in Digital Hardware.";
  const [visible, setVisible] = useState(false);
  return (
    <div
      id="home"
      style={{ backgroundColor: "#116466", height: window.innerHeight }}
    >
      <div style={{ marginTop: "2.5%", marginLeft: "5%" }}>
        <Typewriter
          options={{
            wrapperClassName: "typewriter_title",
            delay: 25,
            cursorClassName: "cursorClass",
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                '<span id="titleText">intro(name={"<span id="name_tag">Vaaranan</span>"});<span>'
              )
              .callFunction(() => {
                setVisible(true);
              })
              .start();
          }}
        />
      </div>
      <div
        className={visible ? "fadeIn" : "fadeOut"}
        style={{
          width: "40%",
          fontFamily: "Avenir",
          fontWeight: "100",
          marginLeft: "5%",
          color: "#FFCB9A",
        }}
      >
        {introBlurb}
      </div>
    </div>
  );
}
