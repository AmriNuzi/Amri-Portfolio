/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Portofolio.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Grid } from "@material-ui/core";
import amazon from "../images/amazon.png";
import cars from "../images/cars-blog.png";
import junior from "../images/junior.png";
import pizza from "../images/pizza.png";
import drag from "../images/drag.png";
import blog from "../images/blog.png";
import bet from "../images/bet.png";
import crypto from "../images/crypto.png";
import casino from "../images/casino.png";
import movie from "../images/movie.png";
import test from "../images/test.png";

const Portofolio = () => {
  return (
    <div className="portofolio " id="portofolio">
      <Container maxWidth="xl" className="portofolio_header text-dark">
        <h6>TAKE A LOOK AT</h6>
        <h2 style={{ fontWeight: 700 }}>PROJECTS</h2>
        <hr />
      </Container>

      <div className="button__toggle">
        <button id="butt" className={"active"}>
          All
        </button>
      </div>

      <Container maxWidth="xl">
        <div className="row">
          <Grid item lg={4} md={6} sm={12}>
            <div>
              <a
                href="#"
                className="textStyle"
                target="_blank"
                rel="noreferrer noopener "
              >
                <img className="img_port" src={movie} alt="cars" />
                <h6>Movie/Quiz APP with Firebase</h6>
                <p>
                  (React + Typescript/ Firebase/ Redux-Toolkit / API / SASS )
                </p>
              </a>
            </div>
            <br />
          </Grid>

          <Grid item lg={4} md={6} sm={12}>
            <div>
              <a
                className="textStyle"
                href="#"
                target="_blank"
                rel="noreferrer noopener "
              >
                <img className="img_port" src={crypto} alt="cars" />
                <h6>Crypto-app</h6>
                <p>
                  (React Native / Typescript / Redux-Saga / Redux-Toolkit / API)
                </p>
              </a>
            </div>
          </Grid>
          <Grid item lg={4} md={6} sm={12}>
            <div>
              <a
                className="textStyle"
                href="#"
                target="_blank"
                rel="noreferrer noopener "
              >
                <img className="img_port" src={bet} alt="cars" />
                <h6>Betting</h6>
                <p>(React Js / Redux-Toolkit / API / SASS )</p>
              </a>
            </div>
            <br />
          </Grid>
          <Grid item lg={4} md={6} sm={6}>
            <div>
              <a
                className="textStyle"
                href="#"
                target="_blank"
                rel="noreferrer noopener "
              >
                <img className="img_port" src={test} alt="cars" />
                <h6>Typescript Test</h6>
                <p>(React + Typescript/ Redux-Toolkit / API / SASS )</p>
              </a>
            </div>
            <br />
          </Grid>
          <Grid item lg={4} md={6} sm={12}>
            <div>
              <a
                className="textStyle"
                href="#"
                target="_blank"
                rel="noreferrer noopener "
              >
                <img className="img_port" src={cars} alt="cars" />
                <h6>Blog</h6>
                <p>(React Js / Bootstrap 5 / CSS)</p>
              </a>
            </div>
            <br />
          </Grid>
          <Grid item lg={4} md={6} sm={12}>
            <div>
              <a
                className="textStyle"
                href="#"
                target="_blank"
                rel="noreferrer noopener "
              >
                <img className="img_port" src={casino} alt="cars" />
                <h6>Casino</h6>
                <p>(React Js / Bootstrap 5 / CSS)</p>
              </a>
            </div>
          </Grid>

          <Grid item lg={4} md={6} sm={12}>
            <div>
              <a
                className="textStyle"
                href="#"
                target="_blank"
                rel="noreferrer noopener "
              >
                <img className="img_port" src={blog} alt="cars" />
                <h6>Boostrap-blog</h6>
                <p>(HTML5 / Bootstrap 5 / CSS3)</p>
              </a>
            </div>
          </Grid>

          <Grid item lg={4} md={6} sm={12}>
            <div>
              <a
                className="textStyle"
                href="#"
                target="_blank"
                rel="noreferrer noopener "
              >
                <img className="img_port" src={pizza} alt="cars" />
                <h6>fast-food</h6>
                <p>(React Js / CSS3 )</p>
              </a>
            </div>
          </Grid>

          <Grid item lg={4} md={6} sm={12}>
            <div>
              <a
                className="textStyle"
                href="#"
                target="_blank"
                rel="noreferrer noopener "
              >
                <img className="img_port" src={drag} alt="cars" />
                <h6>card{}</h6>
                <p>(React Js / CSS3 / frammer-mottion )</p>
              </a>
            </div>
            <br />
          </Grid>

          <Grid item lg={4} md={6} sm={12}>
            <div>
              <a
                className="textStyle"
                href="#"
                target="_blank"
                rel="noreferrer noopener "
              >
                <img className="img_port" src={junior} alt="cars" />
                <h6>easy-blog</h6>
                <p>(React Js / CSS3 / frammer-mottion )</p>
              </a>
            </div>
          </Grid>

          <Grid item lg={4} md={6} sm={12}>
            <div>
              <a
                className="textStyle"
                href="#"
                target="_blank"
                rel="noreferrer noopener "
              >
                <img className="img_port" src={amazon} alt="cars" />
                <h6>amazon-clone</h6>
                <p>(React Js / Redux / CSS3)</p>
              </a>
            </div>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Portofolio;
