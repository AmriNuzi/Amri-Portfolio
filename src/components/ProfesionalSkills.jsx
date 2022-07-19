import React from "react";
import "./ProfesionalSkill.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "@material-ui/core";

import html from "../images/html.png";
import css from "../images/css.png";
import bootstrap from "../images/bootstrap.png";
import sass from "../images/sass.png";
import js from "../images/js.png";
import react from "../images/react.png";
import typescript from "../images/typescript.png";
import redux from "../images/redux.png";
import reduxsaga from "../images/reduxaga.png";
import git from "../images/git.png";
import reactnative from "../images/reactnative.png";
import esma from "../images/es56.png";
import axios from "../images/axios.png";
import gitlab from "../images/gitlab.png";

const ProfesionalSkills = () => {
  return (
    <>
      <div className="skill" id="skill">
        <Container maxWidth="md" className="service_header text-dark">
          <h2 style={{ fontWeight: 700 }}>Languages :</h2>
          <hr />
        </Container>

        <Container maxWidth="md">
          <div className="technical cf active">
            <div className="skills-bars skills-div">
              <div className="skills">
                <img src={html} alt="" className="img-fluid" />
                <h5>HTML</h5>
              </div>
              <div className="skills">
                <img
                  src={css}
                  alt=""
                  className="img-fluid"
                  style={{ width: "50px" }}
                />
                <h5>CSS</h5>
              </div>
              <div className="skills">
                <img src={sass} alt="" className="img-fluid" />
                <h5>SASS</h5>
              </div>
              <div className="skills">
                <img src={bootstrap} alt="" className="img-fluid" />
                <h5>Bootsrap 5</h5>
              </div>
              <div className="skills">
                <img src={js} alt="" className="img-fluid" />
                <h5>Javascript</h5>
              </div>
              <div className="skills">
                <img src={esma} alt="" className="img-fluid" />
                <h5>ES6</h5>
              </div>
            </div>
            <div className="skills-bars skills-div">
              <div className="skills">
                <img src={react} alt="" className="img-fluid" />
                <h5>React</h5>
              </div>
              <div className="skills">
                <img src={typescript} alt="" className="img-fluid" />
                <h5>Typescript</h5>
              </div>

              <div className="skills">
                <img src={redux} alt="" className="img-fluid" />
                <h5>Redux Toolkit</h5>
              </div>
              <div className="skills">
                <img src={reduxsaga} alt="" className="img-fluid" />
                <h5>Redux Saga</h5>
              </div>
              <div className="skills">
                <img src={axios} alt="" className="img-fluid" />
                <h5>Axios</h5>
              </div>

              <div className="skills">
                <img src={reactnative} alt="" className="img-fluid" />
                <h5>React Native</h5>
              </div>
            </div>
          </div>
        </Container>

        <Container maxWidth="md" className="service_header text-dark">
          <h2 style={{ fontWeight: 700, marginTop: "50px" }}>Tools :</h2>
          <hr />
        </Container>
        <Container maxWidth="md">
          <div className="technical cf active">
            <div className="skills-bars skills-div">
              <div className="skills">
                <img src={git} alt="" className="img-fluid" />
                <h5>Git</h5>
              </div>
              <div className="skills">
                <img src={gitlab} alt="" className="img-fluid" />
                <h5>Gitlab</h5>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ProfesionalSkills;
