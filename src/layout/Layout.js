import { Box } from "@mui/material";
import React from "react";
import AboutMe from "../components/AboutMe/AboutMe.components";
import Intro from "../components/Intro/Intro.components";
import Projects from "../components/Projects/Projects.components";

export default function Layout() {
    return (
        <Box
            sx={{ backgroundColor: "#f6f4f4" }}
        >
            <Intro />
            <AboutMe />
            <Projects />
        </Box>
    )
}