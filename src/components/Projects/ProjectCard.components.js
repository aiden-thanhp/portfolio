import { 
    Box,
    Grid, 
    Typography 
} from "@mui/material";
import React from "react";
import "../../layout/Layout.css";
import "./Projects.css"

export default function ProjectCard({ project }) {
    return (
        <Grid container sx={{ paddingX: "20px" }}>
            <Grid item xs={12} md={6}>
                <img href={`/projects/${project.id}`} alt={project.name} className="projectPic" src={project.image} />
            </Grid>
            <Grid item xs={12} md={6} 
                sx={{ 
                    display: "flex", 
                    flexDirection: "column",
                    alignItems: { xs: "center", md: "flex-start" }, 
                    justifyContent: "center"
                }}>
                <Typography
                    component="h4"
                    variant="h4"
                    sx={{
                        fontFamily: "'Source Sans Pro', sans-serif",
                        fontWeight: 900,
                        fontSize: "20px",
                        textAlign: { xs: "center", md: "left" }   
                    }}
                >
                    {project.name}
                </Typography>
                <Typography
                    component="p"
                    variant="p"
                    sx={{
                        marginY: "30px",
                        fontFamily: "'Source Sans Pro', sans-serif",
                        fontSize: "17px",
                        textAlign: { xs: "center", md: "left" }
                    }}
                >{project.description}</Typography>
                <Box sx={{ display: "flex" }}>
                    <a className="contactButton" href={`/projects/${project.id}`}>Case Study</a>
                    <a className="linkButton" href={project.link}>Live Link</a>
                </Box>
            </Grid>
        </Grid>
    )
}