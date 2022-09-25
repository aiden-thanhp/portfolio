import { 
    Box, 
    Grid, 
    Typography 
} from "@mui/material";
import React from "react";
import "./AboutMe.css"

export default function AboutMe() {
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
                        When it comes to business, first impressions matter, and good website design is the key to capitalizing on them. An excellent site is not judged solely on its looks, but on its functionality and usability as well. My experience as a programmer allows me to come up with intelligent solutions to technical challenges, while at the same time designing sleek and visually appealing websites. Aside from having extensive knowledge of recognized technical standards, I am conversant with modern building practices.
                    </Typography>
                    <button className="contactButton">Contact</button>
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
                    <Typography
                        component="p"
                        variant="p"
                        sx={{
                            fontFamily: "'Source Sans Pro', sans-serif",
                            fontSize: "17px"       
                        }}
                    >
                        When it comes to business, first impressions matter, and good website design is the key to capitalizing on them. An excellent site is not judged solely on its looks, but on its functionality and usability as well. My experience as a programmer allows me to come up with intelligent solutions to technical challenges, while at the same time designing sleek and visually appealing websites. Aside from having extensive knowledge of recognized technical standards, I am conversant with modern building practices.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}