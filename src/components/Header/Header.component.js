import React from "react";
import Logo from "../../assets/Logo.png"
import { Box } from "@mui/material";
import { TypeAnimation } from "react-type-animation";

export default function Header({ backgroundImg, headline }) {
    const headerStyle = {
        height: "100vh",
        backgroundImage: `url("${backgroundImg}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }

    return (
        <Box 
            style={headerStyle}
            sx={{
                opacity: 0.9,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Box 
                component="img"
                sx={{
                    width: "35vw",
                    maxWidth: 250
                }}
                alt="Logo of Aiden Phan Portfolio."
                src={Logo}
            />
            <TypeAnimation
                sequence={[
                    `${headline}.`  
                ]}
                wrapper="div"
                cursor={true}
                style={{ 
                    fontSize: "min(4vw, 27px)",
                    color: "white",
                    fontFamily: "serif",
                    fontWeight: "600"
                }}
            />
        </Box>
        
    )
}
