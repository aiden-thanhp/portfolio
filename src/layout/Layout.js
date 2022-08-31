import { Box, Container } from "@mui/material";
import React from "react";
import Menu from "../components/Menu/Menu.component";
import Header from "../components/Header/Header.component";
import backgroundImg from "../assets/home-background.png"
import About from "../components/About/About.component";
import Portfolio from "../components/Portfolio/Portfolio.component";

export default function Layout() {
    return (
        <div>
            <Menu />
            <Header 
                backgroundImg={backgroundImg} 
                headline="Full-stack Developer"
                buttonName="MY RESUME"
            />
            <About />
            <Portfolio />
            <Container>
                <Box sx={{ my: 2 }}>
                {[...new Array(12)]
                    .map(
                    () => `Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                    )
                    .join('\n')}
                </Box>
            </Container> 
        </div>
    )
}