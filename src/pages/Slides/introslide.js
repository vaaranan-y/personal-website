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
      style={{ backgroundColor: "#eaf2fa", height: window.innerHeight }}
    >
      <div style={{ marginTop: "2.5%", marginLeft: "5%" }}>
        <Typewriter
          options={{
            wrapperClassName: "typewriter_title",
            delay: 25,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                'intro(name={"<span id="name_tag">Vaaranan</span>"});'
              )
              .callFunction(() => {
                setVisible(true);
              })
              .start();
          }}
          style={{ fontFamily: "Courier" }}
        />
      </div>
      <div
        className={visible ? "fadeIn" : "fadeOut"}
        style={{
          width: "40%",
          fontFamily: "Avenir",
          fontWeight: "100",
          marginLeft: "5%",
        }}
      >
        {introBlurb}
      </div>
    </div>
  );
}
