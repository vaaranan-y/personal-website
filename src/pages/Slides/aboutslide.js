import react, { useState } from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import "../styles.css";

export default function AboutSlide() {
  return (
    <section id="about">
      <div style={{ padding: 50 }}>
        <h1 style={{ fontFamily: "Avenir" }}>ABOUT</h1>
        <p
          style={{
            fontFamily: "Avenir",
            fontSize: 20,
            fontWeight: 200,
            width: "50%",
          }}
        >
          I have been coding since the age of 10, when I created my first
          program: a quiz game made from bash script. It ignited my passion for
          coding, and using programming to solve and implement my problems and
          ideas.
        </p>
        <p
          style={{
            fontFamily: "Avenir",
            fontSize: 20,
            fontWeight: 200,
            width: "50%",
          }}
        >
          My interests include Backend Development, Cloud Computing, Embedded
          Systems/Firmware, and Machine Learning. I hope to one one day combine
          all these skills into a career related to IoT development.
        </p>
        <p
          style={{
            fontFamily: "Avenir",
            fontSize: 20,
            fontWeight: 200,
            width: "50%",
          }}
        >
          Technologies I am experienced with:
        </p>
        <table>
          <tr>
            <th>Languages</th>
            <th>Frameworks</th>
            <th>Technologies</th>
          </tr>
          <tr>
            <td>Java</td>
            <td>React.js</td>
            <td>AWS</td>
          </tr>
          <tr>
            <td>JavaScript</td>
            <td>Express.js</td>
            <td>Azure</td>
          </tr>
          <tr>
            <td>Python</td>
            <td>Django</td>
            <td>Micro Controllers (STM 32, Arduino)</td>
          </tr>
          <tr>
            <td>C++</td>
            <td>React Native</td>
            <td>Computer Vision Modeling</td>
          </tr>
          <tr>
            <td>C</td>
            <td></td>
            <td>Natural Language Processing</td>
          </tr>
          <tr>
            <td>ARM Assembly</td>
          </tr>
        </table>
      </div>
    </section>
  );
}
