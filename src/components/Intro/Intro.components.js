import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Background from "../../assets/intro-background.jpeg"

const styles = {
    introBackground: {
        backgroundImage:
            `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%"
    }
};

export default function Intro() {
    return (
        <Box
            style={styles.introBackground}
            sx={{
                paddingY: "100px"
            }}
        >
            <Typography
                component="h3"
                variant="h3"
                sx={{
                    fontFamily: "'Source Sans Pro', sans-serif",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    fontSize: "8vw",
                    letterSpacing: 1.5,
                    textAlign: "center"
                }}
            >I'm Aiden Phan</Typography>
            <Typography
                component="h3"
                variant="h3"
                sx={{
                    fontFamily: "'Source Sans Pro', sans-serif",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    fontSize: "4vw",
                    letterSpacing: 1.5,
                    textAlign: "center"
                }}
            >Full-Stack Software Developer</Typography>
            <Typography
                component="p"
                variant="p"
                sx={{
                    marginTop: "30px",
                    fontFamily: "'Source Sans Pro', sans-serif",
                    fontSize: "17px",
                    textAlign: "center"
                }}
            >Frontend and backend developer, 
            <Button
                variant="contained"
                sx={{
                    marginX: "5px",
                    backgroundColor: "#e6e9e9",
                    color: "#000",
                    textTransform: "none"
                 }}
            >badminton </Button>
            lover, casual pianist who loves to learn and adapt to new things.</Typography>
        </Box>
    )
}