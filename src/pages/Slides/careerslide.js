import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import react, { useState } from "react";
import "../styles.css";
import CemcLogo from "./CEMC_Logo.jpg";
import YuJaLogo from "./YuJa_Logo.jpg";
import InclusionUILogo from "./InclusionUI_Logo.svg";
import AltaMLLogo from "./AltaML_Logo.jpg";
import MSLogo from "./MS_Logo.jpg";

export default function CareerSlide() {
  return (
    <div
      id={"career"}
      style={{ padding: 50, backgroundColor: "#152238", height: "100%" }}
    >
      <h1
        id={"projectsTitle"}
        style={{ fontFamily: "Avenir", fontWeight: "900" }}
      >
        EXPERIENCE
      </h1>
      <VerticalTimeline lineColor={"#C0C0C0"}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="September 2022 - December 2022"
          icon={
            <img
              src={YuJaLogo}
              alt="loading..."
              style={{ width: "100%", borderRadius: "50%" }}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Software Devloper and Design Intern @ YuJa Inc.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
          <p>
            Developed student response system applicaiton called Engage, to
            allow educational instructors to provision quizzes and polls to
            students during lecture/class time.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="January 2022 - May 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={
            <img
              src={CemcLogo}
              alt="loading..."
              style={{ width: "100%", borderRadius: "50%" }}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Developer @ The CEMC
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Waterloo, ON</h4>
          <p>
            Developed contest proctoring web application using MySQL and PHP
            backend, and vanilla JavaScript frontend. Also created in-house
            software to eliminate manual processes for customer service team
            (i.e. participant archival system) and the contest creation team
            (LaTeX to HTML conversion script).
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 2021 - October 2021"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={
            <img
              src={InclusionUILogo}
              alt="loading..."
              style={{
                width: "100%",
                display: "flex",
                marginTop: "auto",
                marginBottom: "auto",
                borderRadius: "10%",
                padding: "20%",
              }}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Volunteer Frontend Developer @ InclusionUI
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Lambeth, UK</h4>
          <p>
            Volunteered to work virtually with 5 other developers from the US
            and UK to develop a digital calendar/schedule tracker to help a
            client with Autism organize his week, and gain digital and personal
            independence. I developed the first iteration of the front end of
            the app in Vanilla JavaScript, HTML and CSS. It was fulfilling
            experience, as I got to see my work actually help someone, and I
            learned a lot about the software development cycle in the process.
            To learn more about this initiative, please visit:
            https://inclusion-ui.com/activity-calendar/.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 2021 - August 2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={
            <img
              src={AltaMLLogo}
              alt="loading..."
              style={{ width: "100%", borderRadius: "50%" }}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Junior Machine Learning Developer @ AltaML
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Calgary, AB</h4>
          <p>
            Partnered with Rogers Media Team to develop a computer vision model,
            using Microsoft Azure Computer Vision Services, to analyze hockey
            game footage to track players and pucks, for statistical analysis of
            players and game strategies.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June 2021 - April 2022"
          icon={
            <img
              src={MSLogo}
              alt="loading..."
              style={{ width: "100%", borderRadius: "50%" }}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Firmware Team Member @ UW Midnight Sun Solar Car Design Team
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Waterloo, ON</h4>
          <p>
            Developed firmware in C and ARM Assembly for various parts of a
            Solar Powered Car, including the Battery Management System, the
            Bootloader, temperature monitors, and more. Worked with and flashed
            my code onto STM 32 Microcontrollers, one of my first experiences
            with Microcontrollers.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
