import { 
    Box, 
    Typography 
} from "@mui/material";
import React from "react";
import "../AboutMe/AboutMe.css"

export default function Contact() {
    return (
        <Box sx={{ paddingY: "50px" }}>
            <Box
                sx={{ 
                    display: "flex", 
                    flexDirection: "column",
                    alignItems: "center"
                }}
            >
                <Typography
                    component="h4"
                    variant="h4"
                    sx={{
                        fontFamily: "'Source Sans Pro', sans-serif",
                        fontWeight: 900,
                        textTransform: "uppercase",
                        fontSize: "30px",       
                        letterSpacing: 1.5,
                        textAlign: "center"
                    }}
                >
                    Contact Me
                </Typography>
                <Box 
                    sx={{
                        marginTop: "15px",
                        width: "45px",
                        height: "8px",
                        borderRadius: 3,
                        backgroundColor: "#07528f"
                    }}
                />
                <Typography
                    component="p"
                    variant="p"
                    sx={{
                        marginTop: "30px",
                        fontFamily: "'Source Sans Pro', sans-serif",
                        fontSize: "17px",
                        width: { xs: "90vw", md: "850px"},
                        textAlign: "center",
                        paddingBottom: "50px"
                    }}
                >Feel free to Contact me by filling out the form below to send me an email or check out my <a className="flip">Resume</a>.</Typography>
            </Box>
        </Box>
    )
}

//Next step: Create a contact form to send email only.