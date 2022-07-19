import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { SidebarData, IconSocialMedia } from "./SidebarData";
import "./Nav.css";
import { IconContext } from "react-icons";
import logo from "../images/amri-logo.jpg";
import { HashLink } from "react-router-hash-link";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import Portofolio from "./Portofolio";
import ProfesionalSkills from "./ProfesionalSkills";
import { About } from "./About";
import { Container, Grid } from "@material-ui/core";

const Nav = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <Container maxWidth="xl">
      <div className="row d-flex">
        <Grid item lg={3} md={12} sm={12} className=" w-100">
          <IconContext.Provider value={{ color: "#fff" }}>
            <div>
              <Link to="#" className="menu-bars" onClick={showSidebar}>
                <FaIcons.FaBars className="icon_bar bg-dark" />
              </Link>
            </div>
            <nav className="nav-menu">
              <ul
                className={sidebar ? "nav-menu active" : "nav-menu"}
                onClick={showSidebar}
              >
                <li className="navbar-toggle">
                  <Link to="#" className="menu-close">
                    <AiIcons.AiOutlineClose className=" icon_bar bg-darks  text-light" />
                  </Link>
                </li>
                <li className="imag_list mx-auto h-auto">
                  <img
                    style={{ height: 100 }}
                    className=" img_nav img-fluid  text-center"
                    src={logo}
                    alt="foto"
                  />
                  <h2 avriat="h1" className="py-3 fw-bolder text-white">
                    Amri Nuzi
                  </h2>
                  <div className="d-flex align-items-center mx-4 justify-content-center ">
                    {IconSocialMedia.map((icon, index) => (
                      <a
                        href={icon.link}
                        key={index}
                        className="text-decoration-none"
                      >
                        {icon.i}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </a>
                    ))}
                  </div>
                </li>

                <div className="nav-list">
                  {SidebarData.map((item, index) => {
                    return (
                      <li
                        style={{ marginLeft: -40 }}
                        key={index}
                        className={item.cName}
                      >
                        <HashLink to={item.path}>
                          {item.icon}
                          <span>{item.title}</span>
                        </HashLink>
                      </li>
                    );
                  })}
                </div>
              </ul>
            </nav>
          </IconContext.Provider>
        </Grid>
        <Grid item lg={9} md={12} sm={12} className=" w-100">
          <About />
          <ProfesionalSkills />
          <Portofolio />
        </Grid>
      </div>
    </Container>
  );
};

export default Nav;
