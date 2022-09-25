import { Box, Typography } from "@mui/material";
import React from "react";
import Background from "../../assets/intro-background.jpeg"
import "./Intro.css"

const styles = {
    introBackground: {
        backgroundImage:
            `linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.2)), url(${Background})`,
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
                paddingBottom: "100px",
                paddingTop: "150px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}
        >
            <Typography
                component="h3"
                variant="h3"
                sx={{
                    fontFamily: "'Source Sans Pro', sans-serif",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    fontSize: { xs: "7vw", sm: "45px" },       
                    letterSpacing: 1.5,
                }}
            >I'm Aiden Phan</Typography>
            <Typography
                component="p"
                variant="p"
                sx={{
                    marginTop: "30px",
                    fontFamily: "'Source Sans Pro', sans-serif",
                    fontSize: "17px",
                    fontWeight: 300,
                    width: { xs: "90vw", md: "850px"},
                    lineHeight: 2
                }}
            >Frontend and backend developer, Javascript engineer, 
            <button
                className="buttonHover"
            >Badminton</button>
            lover, casual 
            <button
                className="buttonHover"
            >Pianist</button>
            who loves minimalistic and  
            <button
                className="buttonHover"
            >Buddhism teachings</button>
            and is enthusiastic about learning new things.</Typography>
            <Typography
                component="p"
                variant="p"
                sx={{
                    marginTop: "30px",
                    fontFamily: "'Source Sans Pro', sans-serif",
                    fontSize: "17px",
                    fontWeight: 300,
                    width: { xs: "90vw", md: "850px"},
                    lineHeight: 2
                }}
            >We have come from a world of pigeon post to a virtual reality. Let's make more magic happen in our real life together. View my
            <button
                className="buttonHover"
            >Projects</button>
            ,
            <button
                className="buttonHover"
            >Resume</button>
            ,
            <button
                className="buttonHover"
            >Contact Me</button>
            , or send me an email at
            <button
                className="buttonHover"
            >aiden.thanhp@gmail.com</button>
            .</Typography>
        </Box>
    )
}