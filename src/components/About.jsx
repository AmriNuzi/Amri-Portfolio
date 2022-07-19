import React from "react";
import "./About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Grid } from "@material-ui/core";
import home from "../images/amri-logo.jpg";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <div className="about" id="about">
      <Container
        maxWidth="md"
        className="col d-flex   justify-content-between "
      >
        <div className="about_h3">
          <p style={{ fontWeight: "700", fontSize: "30px" }}>About Me</p>
          <hr />
        </div>
        <div className="about_h3"></div>
      </Container>

      <Container maxWidth="md" style={{ marginTop: "70px" }}>
        <div className="row d-flex  justify-content-between display__one">
          <Grid item lg={4} md={4} sm={4} className="img_grid">
            <img
              src={home}
              alt=""
              style={{ width: 300, height: 400, marginLeft: "-50px" }}
            />
          </Grid>
          <Grid item lg={8} md={8} sm={8} className="des">
            <motion.div
              className="about_desc"
              initial={{ x: 900 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", delay: 0.5, duration: 7 }}
            >
              <h3 style={{ fontWeight: "900", color: "#2b2b2c" }}>
                I'm Amri Nuzi
              </h3>
              <h5 style={{ color: "#2a63a3" }}>
                A React Developer based in Albania.
              </h5>
              <br />
              <h6>
                I am a
                <span style={{ fontWeight: 700, color: "#64acff" }}>
                  Front-end developer
                </span>
                , and I'm very passionate and dedicated to my work. With some
                months experience as a professional and creative front-end
                developer, I have acquired the skills and knowledge necessary to
                make your project a success. Check out my Portfolio below.
              </h6>
            </motion.div>
            <br />
            <br />
          </Grid>
        </div>
      </Container>
    </div>
  );
};
