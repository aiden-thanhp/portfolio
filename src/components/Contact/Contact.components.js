import { 
    Box, 
    Typography 
} from "@mui/material";
import React from "react";
import "../AboutMe/AboutMe.css";
import "./Contact.css";

export default function Contact() {
    return ( 
        <Box sx={{ paddingY: "50px", display: "flex", flexDirection: "column", alignItems: "center" }}>
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
                >Feel free to Contact me by filling out the form below or check out my <a className="flip">Resume</a>.</Typography>
            </Box>
            <Box
                sx={{
                    backgroundColor: "#fff",
                    width: "80vw",
                    maxWidth: "900px",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    padding: "35px",
                    borderRadius: "10px"
                }}
            >
                <form id="contact" 
                    method="POST" 
                    action="https://docs.google.com/forms/u/3/d/e/1FAIpQLSfOovf3s5rtztZ8OYxr23OC5rKYC0QNAqoQcjxItFKnpBfttA/formResponse" 
                    target="_blank">
                    <label className="label" htmlFor="name">Name:</label><br />
                    <input 
                        className="input" 
                        type="text" 
                        id="name" 
                        name="entry.386668084" 
                        placeholder="Enter your name"
                        required
                    /><br />
                    <label className="label" htmlFor="email">Email:</label><br />
                    <input 
                        className="input" 
                        type="text" 
                        id="email" 
                        name="entry.1803035999" 
                        placeholder="Enter your email address"
                        required
                    /><br />
                    <label className="label" htmlFor="message">Message:</label><br />
                    <textarea 
                        className="textArea" 
                        type="textarea" 
                        id="message" 
                        name="entry.569755491" 
                        placeholder="Enter your message"
                        required
                    /><br />
                    <button type="submit" className="contactButton">Submit</button>
                </form>
            </Box>
        </Box>
    )
}