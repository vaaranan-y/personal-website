import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import react, { useState } from "react";
import "../styles.css";
import FordLogo from "./Ford_Logo.jpg";
import FordProLogo from "./Ford_Pro_Logo.jpg";
import BlueprintLogo from "./Blueprint_Logo.jpg";
import CemcLogo from "./CEMC_Logo.jpg";
import WrmthLogo from "./Wrmth_Logo.jpg";
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
          date="September 2024 - December 2024"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={
            <img
              src={WrmthLogo}
              alt="loading..."
              style={{ width: "100%", borderRadius: "50%" }}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
          Embedded Software Engineer Intern @ Wrmth Corp
          </h3>
          <h4 className="vertical-timeline-element-subtitle">North Bay, ON</h4>
          <p>
            Wrmth is a company based in North Bay, Ontario, developing and building 
            luxury patio furniture for the winter cottage season. I had the opportunity 
            to work on the firmware for their heated chairs, which were controllable via 
            a mobile application, communicating over BLE (Bluetooth Low Energy). My project
            was to enable the chair to connect to a user's home WiFi network, so that the chair
            could be controlled remotely, via AWS. I wrote code that worked with AWS IoT core 
            to allow the chairs to securely provision their own credentials and AWS IoT entities.
            Furthermore, I enabled simultaneous BLE and WiFi connections, on the chair, which was
            one of the hardest challenges I faced in this project, since the board had a single radio,
            so I had to leverage FreeRTOS to manage the two connections, without interference.
          </p>
        </VerticalTimelineElement>
      {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="January 2024 - Present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={
            <img
              src={BlueprintLogo}
              alt="loading..."
              style={{ width: "100%", borderRadius: "50%" }}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Technical Lead @ UW Blueprint
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Waterloo, ON</h4>
          <p>
            Following my role as a Project Developer at BluePrint, I took on my
            first leadership position as a Technical Lead for another team called
            The Children's Aid Society (CAS). CAS is a Child Protection Services
            Organization, specifically based out of Algoma. Our team is in the 
            process of wrapping a web application that should act as a organized
            intake system for new children that come to CAS. The project is in 
            its final stages, and should be deployed next month!
          </p>
        </VerticalTimelineElement> */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="January 2024 - April 2024"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={
            <img
              src={FordLogo}
              alt="loading..."
              style={{ width: "100%", borderRadius: "50%" }}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            In-Vehicle-Infotainment Development Intern @ Ford Motor Company
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Waterloo, ON</h4>
          <p>
            Developed firmware for the AI/ML operations of the 
            In-Vehicle-Infotainment system of future Ford Vehicles.
            Specifically developed a hardware accelerated video decoder
            to operate in QNX on a SA8295P Snapdragon SoC. The AUTOSAR
            service was developed in C++, and provided other AUTOSAR Services
            the ability to be tested on pre-determined, decoded video footage,
            instead of requiring a physical camera module.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="September 2023 - December 2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={
            <img
              src={BlueprintLogo}
              alt="loading..."
              style={{ width: "100%", borderRadius: "50%" }}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Project Developer @ UW Blueprint
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Waterloo, ON</h4>
          <p>
            UW Blueprint is a club at Waterloo that develops technological solutions
            for various non-profit organizations around the world. I was a developer
            on a team called "A Better Tent City". They are an organization dedicated
            to providing various necessities and shelters to those in need, in the
            Kitchener-Waterloo region (More information about them can be found here: 
            https://www.abettertentcity.org/). In this time, I developed Backend APIs 
            for a volunteer management application, using MongoDB, Express.js, and Prisma.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2023 - August 2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={
            <img
              src={FordProLogo}
              alt="loading..."
              style={{ width: "100%", borderRadius: "50%", backgroundColor: "white" }}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineering Intern @ Ford Pro
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Oakville, ON</h4>
          <p>
            Developed backend software using Spring Boot for vehicle fleet
            managment applications, which converted Ford entities (such as
            Vehicles and Clients) between different Ford Pro applications.
            Collaborated on a much larger scale comapred to previous co-ops,
            learning how to use PostgreSQL to work with Ford's product line
            database (the database shared amongst all ford applications).
          </p>
        </VerticalTimelineElement>
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
            Developed a student response system, full-stack applicaiton, called
            YuJa Engage. The front end was developed in React.js and the Backend
            APIs were developed in Java. The purpose of our product was to allow
            educational instructors to provision quizzes and polls to students
            during lecture/class time.
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
            Developed contest proctoring web application(s) using MySQL and PHP
            for the backend, and vanilla JavaScript for the frontend. Also
            created in-house software to eliminate manual processes for customer
            service team (i.e. a participant archival system) and the contest
            creation team (i.e. a LaTeX to HTML conversion script).
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
            Volunteered to work virtually with various developers globally, to
            develop a digital calendar/schedule tracker to help a client with
            Autism plan his week, and gain digital and personal independence.
            Responsible for developing the first iteration of the app in Vanilla
            JavaScript, HTML and CSS. Aided in pushing application to open
            source. To learn more about this initiative, please visit:
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
            Bootloader, Temperature Monitors, and more. Worked with and flashed
            code onto STM 32 Microcontrollers.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
