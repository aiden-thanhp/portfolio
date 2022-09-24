import { Box } from "@mui/material";
import React from "react";
import Intro from "../components/Intro/Intro.components";
import NavBar from "../components/NavBar/NavBar.components";

export default function Layout() {
    return (
        <Box
            sx={{ backgroundColor: "#e6e9e9" }}
        >
            <NavBar />
            <Intro />
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </Box>
    )
}