import react, { useState } from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import IntroSlide from "./Slides/introslide";
import AboutSlide from "./Slides/aboutslide";
import ProjectSlide from "./Slides/projectslide";
import CareerSlide from "./Slides/careerslide";
import Fade from "react-reveal/Fade";
import "./styles.css";

export default function HomePage() {
  return (
    <div className="App">
      {/* <header className="nav">
        <nav className="nav__container__actions">
          <ul>
            <li>
              <Link activeClass="active" smooth spy to="about">
                ABOUT
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="projects">
                PROJECTS
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="career">
                CAREER
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="blog">
                BLOG
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="contact">
                CONTACT ME!
              </Link>
            </li>
          </ul>
        </nav>
      </header> */}
      <IntroSlide />
      <AboutSlide />
      <CareerSlide />
      <ProjectSlide />
    </div>
  );
}
