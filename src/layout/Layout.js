import { Box } from "@mui/material";
import React from "react";
import AboutMe from "../components/AboutMe/AboutMe.components";
import Intro from "../components/Intro/Intro.components";
import NavBar from "../components/NavBar/NavBar.components";

export default function Layout() {
    return (
        <Box
            sx={{ backgroundColor: "#f6f4f4" }}
        >
            <NavBar />
            <Intro />
            <AboutMe />
        </Box>
    )
}