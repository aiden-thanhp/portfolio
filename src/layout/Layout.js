import { Box } from "@mui/material";
import React from "react";
import Menu from "../components/Menu/Menu.component";
import Header from "../components/Header/Header.component";
import backgroundImg from "../assets/home-background.png"
import About from "../components/About/About.component";
import Portfolio from "../components/Portfolio/Portfolio.component";
import Footer from "../components/Footer/Footer.component";

export default function Layout() {
    return (
        <Box>
            <Box
                sx={{
                    position: "relative",
                    zIndex: 1,
                }}
            >
                <Menu />
                <Header 
                    backgroundImg={backgroundImg} 
                    headline="Full-stack Developer"
                    buttonName="MY RESUME"
                />
                <About />
                <Portfolio />
            </Box>
            <Box
                sx={{
                    position: "sticky",
                    bottom: 0,
                    left: 0,
                    placeItems: "center"
                }}
            >
                <Footer />
            </Box>
        </Box>
    )
}