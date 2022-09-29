import { 
    Box, 
    Grid, 
    IconButton, 
    Typography 
} from "@mui/material";
import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                backgroundColor: "#000",
                paddingY: "45px",
                paddingX: "20px",
                position: "sticky",
                bottom: "0px",
                zIndex: -3
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={12} sm={8}>
                    <Typography
                        component="h6"
                        variant="h6"
                        sx={{
                            fontFamily: "'Source Sans Pro', sans-serif",
                            fontWeight: 900,
                            textTransform: "uppercase",
                            fontSize: "17px",
                            letterSpacing: 1.5,
                            color: "#fff",
                            marginBottom: "15px"
                        }}
                    >Aiden Phan</Typography>
                    <Typography
                        component="p"
                        variant="p"
                        sx={{
                            fontFamily: "'Source Sans Pro', sans-serif",
                            fontSize: "15px",
                            color: "#fff"
                        }}
                    >  
                        Frontend and backend developer, Javascript and Python engineer, Badminton lover building the Frontend and Backend of Websites and Web Applications.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography
                        component="h6"
                        variant="h6"
                        sx={{
                            fontFamily: "'Source Sans Pro', sans-serif",
                            fontWeight: 900,
                            textTransform: "uppercase",
                            fontSize: "17px",
                            letterSpacing: 1.5,
                            color: "#fff",
                            marginBottom: "15px"
                        }}
                    >Social</Typography>
                    <Box>
                        <IconButton
                            onClick={() => navigate("https://www.linkedin.com/in/aidenthanhp")}
                        >
                            <LinkedInIcon sx={{ color: "#fff" }} />
                        </IconButton>
                        <IconButton
                            onClick={() => navigate("https://github.com/aiden-thanhp")}
                        >
                            <GitHubIcon sx={{ color: "#fff" }} />
                        </IconButton>
                        <IconButton
                            onClick={() => window.open("mailto:aiden.thanhp@gmail.com")}
                        >
                            <EmailIcon sx={{ color: "#fff" }} />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
            <Typography
                sx={{
                    color: "#fff",
                    fontSize: "12px",
                    textAlign: "center",
                    marginTop: "25px"
                }}
            >
                @Copyright 2022. Made by <a style={{ fontWeight: 900 }}>Aiden Phan</a>
            </Typography>
        </Box>
    )
}