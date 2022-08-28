import { Box, Container } from "@mui/material";
import React from "react";
import Menu from "../components/Menu/Menu.component";
import WebRoutes from "./WebRoutes";

export default function Layout() {
    return (
        <div>
            <Menu />
            <WebRoutes />
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