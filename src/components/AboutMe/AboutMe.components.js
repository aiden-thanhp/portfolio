import { 
    Box, 
    Grid, 
    Typography 
} from "@mui/material";
import React from "react";
import "./AboutMe.css";
import "../../layout/Layout.css"
import { useNavigate } from "react-router-dom";
import { openResume } from "../Intro/Intro.components"
const skills = ["HTML", "CSS", "JavaScript", "Python", "React", "Bootstrap", "Material UI", "NodeJS", "ExpressJS", "RESTful APIs", "PostgreSQL", "Mocha", "Chai", "Node Package Manager", "Visual Studio Code", "Postman", "DBeaver", "Heroku", "Vercal", "Git", "GitHub", "Knex", "JSON Web Tokens", "Bcrypt", "Dotenv", "Universal Cookies"]

export default function AboutMe() {
    const navigate = useNavigate();
    function handleScroll(id) {
        const item = document.getElementById(id);
        console.log(item)
        window.scrollTo({
            top: item.offsetTop - 80,
            behavior: "smooth"
        })
    }

    return (
        <Box sx={{ paddingY: "50px" }} id="about" >
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
                    About Me
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
                >Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.</Typography>
            </Box>
            <Grid container sx={{ paddingX: { xs: "25px", lg: "100px" } }} >
                <Grid item xs={12} md={6} sx={{ paddingBottom: "50px", width: { md: "80%" } }} >
                    <Typography
                        component="h5"
                        variant="h5"
                        sx={{
                            fontFamily: "'Source Sans Pro', sans-serif",
                            fontWeight: 900,
                            fontSize: "25px",
                            paddingBottom: "25px"      
                        }}
                    >
                        Get to know me!
                    </Typography>
                    <Typography
                        component="p"
                        variant="p"
                        sx={{
                            fontFamily: "'Source Sans Pro', sans-serif",
                            fontSize: "17px",
                            width: { xs: "90vw", sm: "500px", md: "90%" },
                            paddingBottom: "25px"   
                        }}
                    >
                        I'm a <a className="flip" onClick={() => handleScroll("projects")}>Full-stack Software Developer</a> building the Front-end and Back-end of websites and web applications. I reside in Northen Virginia area, proficient in using JavaScript, React, HTML, CSS, API implementing, NodeJS, Express, PostgreSQL, and frameworks like Bootstrap and Material UI. Check out some of my work in the <a className="flip" onClick={() => handleScroll("projects")}>Projects</a> section.
                    </Typography>
                    <Typography
                        component="p"
                        variant="p"
                        sx={{
                            fontFamily: "'Source Sans Pro', sans-serif",
                            fontSize: "17px",
                            width: { xs: "90vw", sm: "500px", md: "90%" },
                            paddingBottom: "25px"   
                        }}
                    >
                        I like to adapt to <a className="flip">new technologies</a> and learn <a className="flip">new things</a> in life. I didn't join the coding environment as early as other people, but I have worked twice as hard to learn in a shorter time. I am a self-learner who will continue to be better. You can connect with me through <a className="flip" href="https://www.linkedin.com/in/aidenthanhp">LinkedIn</a>, also check out my <a className="flip" href="https://github.com/aiden-thanhp">GitHub</a> for more projects.
                    </Typography>
                    <Typography
                        component="p"
                        variant="p"
                        sx={{
                            fontFamily: "'Source Sans Pro', sans-serif",
                            fontSize: "17px",
                            width: { xs: "90vw", sm: "500px", md: "90%" },
                            paddingBottom: "25px"   
                        }}
                    >
                        I'm open to <a className="flip" onClick={(e) => openResume(e)}>Job</a> opportunities where I can contribute, learn, and grow. If you read through this right here, I believe that I have applied for your job posting, thank you very much for spending your valuable time on my application, I would love to become part of your organization. If you have any questions, please feel free to <a className="flip" onClick={() => handleScroll("contact")}>contact me</a> any time.
                    </Typography>
                    <button className="contactButton" onClick={() => handleScroll("contact")}>Contact</button>
                </Grid>
                <Grid item xs={12} md={6} sx={{ width: { md: "80%" } }} >
                    <Typography
                        component="h5"
                        variant="h5"
                        sx={{
                            fontFamily: "'Source Sans Pro', sans-serif",
                            fontWeight: 900,
                            fontSize: "25px",
                            paddingBottom: "25px"      
                        }}
                    >
                        My Skills
                    </Typography>
                    <Box>
                        {skills.map((skill) => {
                            return (
                                <button key={skill} className="skillButton">{skill}</button>
                            )
                        })}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}