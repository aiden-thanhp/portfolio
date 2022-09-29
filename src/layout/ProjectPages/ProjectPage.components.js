import { Box, Typography } from "@mui/material";
import React from "react";
import Background from "../../assets/intro-background.jpeg"
import "../Layout.css";
import "../../components/Projects/Projects.css";
import { projects } from "../../components/Projects/Projects.components";
import { useParams } from "react-router-dom";

const styles = {
    introBackground: {
        backgroundImage:
            `linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.2)), url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%"
    }
};

export default function ProjectPage() {
    const { projectId } = useParams();

    const project = projects.find(project => project.id === projectId);

    return (
        <Box>
            <Box
                id="home"
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
                >{project.name}</Typography>
                <Typography
                    component="p"
                    variant="p"
                    sx={{
                        marginTop: "30px",
                        fontFamily: "'Source Sans Pro', sans-serif",
                        fontSize: "19px",
                        width: { xs: "90vw", md: "850px"},
                        textAlign: "center",
                        paddingBottom: "50px"
                    }}
                >This page contains the case study of {project.name} Web App which includes the Project Overview, Tools Used, and Live Links to the official product.</Typography>
                <a className="contactButton" href={project.link}>Live Link</a>
            </Box>
            <Box sx={{ 
                backgroundColor: "#fbfbfb", 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center",
                paddingY: "50px"
                }}
            >
                <img className="projectPic" alt={project.name} src={project.image} />
                <Box sx={{ width: "80%", maxWidth: "800px" }}>
                    <Typography
                        sx={{
                            fontSize: "25px",
                            fontWeight: 900,
                            textAlign: "left"
                        }}
                    >
                        Project Overview
                    </Typography>
                    <Typography
                        component="p"
                        variant="p"
                        sx={{
                            marginTop: "30px",
                            fontFamily: "'Source Sans Pro', sans-serif",
                            fontSize: "16px",
                            width: { xs: "90%", md: "850px"},
                            textAlign: "left",
                        }}
                    >{project.description}</Typography>
                    <Typography
                        component="p"
                        variant="p"
                        sx={{
                            marginTop: "30px",
                            fontFamily: "'Source Sans Pro', sans-serif",
                            fontSize: "16px",
                            width: { xs: "90%", md: "850px"},
                            textAlign: "left",
                        }}
                    >{project.overview}</Typography>
                    <Typography
                        component="p"
                        variant="p"
                        sx={{
                            marginTop: "30px",
                            fontFamily: "'Source Sans Pro', sans-serif",
                            fontSize: "16px",
                            width: { xs: "90%", md: "850px"},
                            textAlign: "left",
                        }}
                    >Feel free to check out the Project by visiting the Live Link</Typography>
                    <Typography
                        sx={{
                            fontSize: "25px",
                            fontWeight: 900,
                            textAlign: "left",
                            paddingTop: "50px",
                            paddingBottom: "30px"
                        }}
                    >
                        Tools Used
                    </Typography>
                    <Box>
                        {project.tools.map((tool) => {
                            return (
                                <button key={tool} className="skillButton">{tool}</button>
                            )
                        })}
                    </Box>
                    <Typography
                        sx={{
                            fontSize: "25px",
                            fontWeight: 900,
                            textAlign: "left",
                            paddingTop: "50px",
                            paddingBottom: "30px"
                        }}
                    >
                        See Live
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                        <a className="contactButton" href={project.link}>Live Link</a>
                        <a className="linkButton" href="/">Go Back</a>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}