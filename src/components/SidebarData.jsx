import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsFileEarmark } from "react-icons/bs";
import { RiShoppingBag2Line } from "react-icons/ri";

import { FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";

export const SidebarData = [
  {
    title: "About",
    path: "#about",
    icon: <AiOutlineUser />,
    cName: "nav-text",
  },
  {
    title: "Skills",
    path: "#skill",
    icon: <BsFileEarmark />,
    cName: "nav-text",
  },
  {
    title: "Portofolio",
    path: "#portofolio",
    icon: <RiShoppingBag2Line />,
    cName: "nav-text",
  },
];

export const IconSocialMedia = [
  {
    link: "",
    i: <FaInstagram className="text-light fs-5 " />,
  },
  {
    link: "",
    i: <FiGithub className="text-light fs-5 " />,
  },
  {
    link: "",
    i: <AiOutlineLinkedin className="text-light fs-5" />,
  },
];
