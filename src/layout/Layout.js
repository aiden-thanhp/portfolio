import { Box } from "@mui/material";
import React from "react";
import AboutMe from "../components/AboutMe/AboutMe.components";
import Contact from "../components/Contact/Contact.components";
import Intro from "../components/Intro/Intro.components";
import NavBar from "../components/NavBar/NavBar.components";
import Projects from "../components/Projects/Projects.components";

export default function Layout() {
    return (
        <Box
            sx={{ backgroundColor: "#f6f4f4" }}
        >
            <NavBar />
            <Intro />
            <AboutMe />
            <Projects />
            <Contact />
        </Box>
    )
}