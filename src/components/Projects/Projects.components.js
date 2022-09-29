import { 
    Box, 
    Typography 
} from "@mui/material";
import React from "react";
import ProjectCard from "./ProjectCard.components";

import GhostAppPic from "../../assets/project-ghost-app.png"

export const projects = [
    {
        name: "Ghost App",
        id: "1",
        image: GhostAppPic,
        link: "https://ghost-app-frontend.vercel.app/",
        description: "Ghost App is a standalone discussion application where pre-added users can join and discuss about a specific topic.",
        overview: "I started this app when I saw the job application for Ghost company. This is more like a function for a bigger project such as social media, forum.",
        tools: ["HTML", "CSS", "JavaScript", "React", "ExpressJS", "PostgreSQL", "Knex"]
    }
];

export default function Projects() {
    return (
        <Box id="projects" sx={{ paddingY: "50px", backgroundColor: "#fbfbfb" }}>
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
                    Projects
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
                >Here you will find some of the personal projects that I created with each project containing its own case study.</Typography>
            </Box>
            {projects.map((project) => {
                return <ProjectCard project={project} />
            })}
        </Box>
    )
}