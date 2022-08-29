import { 
    Box, 
    Container, 
    Typography 
} from "@mui/material";
import React from "react";
import ProfilePicture from "../../assets/profile-picture.JPG"
import theme from "../Theme/theme.component"

export default function About() {
    const secondLayer = {
        height: "100%",
        width: "100vw",
        backgroundColor: "#0f07ed",
    }

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                position: "relative"
            }}
        >
            <Box
                style={secondLayer}
                sx={{
                    position: "absolute",
                    zIndex: 1,
                    opacity: 0.5
                }}
            />
            <Container
                sx={{
                    mt: 15,
                    mb: { md: 15 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Box 
                    component="img"
                    sx={{
                        width: "450px",
                        height: "650px",
                        objectFit: "cover",
                        boxShadow: 20,
                        opacity: 0.7
                    }}
                    alt="Aiden Phan picture"
                    src={ProfilePicture}
                />
                <Box
                    sx={{
                        position: "absolute",
                        zIndex: 2
                    }}
                >
                    <Typography
                        component="h3"
                        variant="h3"
                        sx={{
                            fontFamily: theme.fontFamily.join(','),
                            fontWeight: "400",
                            fontSize: "70px",
                            letterSpacing: 5,
                            mb: -3,
                            mt: 20,
                            textAlign: "center"
                        }}
                    >
                        AIDEN
                    </Typography>
                    <Typography
                        component="h3"
                        variant="h3"
                        sx={{
                            fontFamily: theme.fontFamily.join(','),
                            fontWeight: "900",
                            fontSize: "70px",
                            letterSpacing: 5,
                            textAlign: "center"
                        }}
                    >
                        PHAN
                    </Typography>
                    <Typography
                        component="p"
                        variant="p"
                        sx={{
                            fontFamily: theme.fontFamily.join(','),
                            fontWeight: "900",
                            fontSize: "15px",
                            color: "#fff",
                            letterSpacing: 2
                        }}
                    >
                        DEVELOPER IN TRAINING @Thinkful
                    </Typography>
                </Box>
            </Container>
            <Container
                sx={{ 
                    mb: 15,
                    mt: { md: 15 },
                    zIndex: 2,
                    px: { md: 10 }
                }}
            >
                <Typography
                    component="h3"
                    variant="h3"
                    sx={{
                        fontFamily: theme.fontFamily.join(','),
                        fontWeight: "700",
                        fontSize: "30px",
                        letterSpacing: 5,
                        mt: 5
                    }}
                >
                    WHO AM I?
                </Typography>
                <Typography
                    component="p"
                    variant="p"
                    sx={{
                        fontFamily: theme.fontFamily.join(','),
                        fontWeight: "700",
                        fontSize: "18px",
                        mt: 5,
                        lineHeight: 1.2, 
                        color: "#fff",
                        pl: { lg: 15 }
                    }}
                >
                    I am a junior full-stack software developer in Northen Virginia area, proficient in using JavaScript, React, HTML, CSS, API implementing, Node.JS, Express, PostgreSQL, and frameworks like Bootstrap and Material UI.
                </Typography>
                <Typography
                    component="p"
                    variant="p"
                    sx={{
                        fontFamily: theme.fontFamily.join(','),
                        fontWeight: "450",
                        fontSize: "18px",
                        mt: 1.8,
                        lineHeight: 1.2, 
                        color: "#fff",
                        pl: { lg: 15 }
                    }}
                >
                    My love in coding started when I was in High School back in Vietnam. I felt thrilled and fulfilled every time I finished a coding assignment in the Technology class. However, I got lost in my path and parted with coding until recently when I realized my passion and started learning to code professionally.
                </Typography>
                <Typography
                    component="p"
                    variant="p"
                    sx={{
                        fontFamily: theme.fontFamily.join(','),
                        fontWeight: "450",
                        fontSize: "18px",
                        mt: 1.8,
                        lineHeight: 1.2, 
                        color: "#fff",
                        pl: { lg: 15 }
                    }}
                >
                    I tryly enjoyed the craftmanship and creationg in developing programs. I am looking to get my career moving forward, please check out my portfolio and resume below. Thank you for stopping by my website.
                </Typography>
            </Container>
        </Box>
    )
}