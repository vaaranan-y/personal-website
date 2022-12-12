import react, { useState } from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import "../styles.css";

export default function IntroSlide() {
  return (
    <div id="home" style={{ backgroundColor: "#eaf2fa" }}>
      <div style={{ marginTop: "2.5%", marginLeft: "5%" }}>
        <Typewriter
          options={{
            wrapperClassName: "typewriter_title",
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                'intro(name={"<span id="name_tag">Vaaranan</span>"});'
              )
              .start();
          }}
          style={{ fontFamily: "Courier" }}
        />
      </div>
      <div
        style={{
          width: "45%",
          fontFamily: "Avenir",
          fontWeight: "100",
          marginLeft: "5%",
        }}
      >
        Hi! My name is Vaaranan, I am in 3A at the Univeristy of Waterloo,
        pursuing a specialziation in Digital Hardware
      </div>
    </div>
  );
}
