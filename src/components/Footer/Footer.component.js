import { 
    Box, 
    Typography 
} from "@mui/material";
import React from "react";
import StyledButton from "../StyledButton/StyledButton.component";
import theme from "../Theme/theme.component";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
    return (
        <Box
            sx={{
                backgroundColor: "#201918",
                pt: 15,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Typography
                component="h3"
                variant="h3"
                sx={{
                    fontFamily: theme.fontFamily.join(','),
                    fontWeight: "600",
                    fontSize: "40px",
                    letterSpacing: 3,
                    color: "#fff",
                    fontStyle: "italic",
                    mb: 3
                }}
            >
                My Resume!
            </Typography>
            <StyledButton
                variant="contained"
                sx={{
                    mt: 1.5,
                    fontSize: 16,
                    fontFamily: theme.fontFamily.join(','),
                    letterSpacing: 4,
                    py: 1.2,
                    px: 3
                }}
            >
                Download Here
            </StyledButton>
            <Typography
                component="h3"
                variant="h3"
                sx={{
                    fontFamily: theme.fontFamily.join(','),
                    fontWeight: "600",
                    fontSize: "15px",
                    letterSpacing: 3,
                    color: "#fff",
                    textAlign: "center",
                    mt: 5,
                    mb: 3
                }}
            >
                YOU CAN ALSO CONTACT ME THROUGH
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row"
                }}
            >
                <a href="https://www.linkedin.com/in/aidenthanhp">
                    <LinkedInIcon 
                        sx={{ 
                            color: "#fff",
                            fontSize: 35,
                            mx: 2
                        }}
                    />
                </a>
                <a href="https://github.com/aiden-thanhp">
                    <GitHubIcon 
                        sx={{ 
                            color: "#fff",
                            fontSize: 35,
                            mx: 2
                        }} 
                    />
                </a>
                <a href="mailto:aiden.thanhp@gmail.com?subject=Hi Aiden">
                    <EmailIcon 
                        sx={{ 
                            color: "#fff",
                            fontSize: 35,
                            mx: 2
                        }} 
                    />
                </a>
            </Box>
            <Typography
                component="h3"
                variant="h3"
                sx={{
                    fontFamily: theme.fontFamily.join(','),
                    fontWeight: "600",
                    fontSize: "13px",
                    color: "#fff",
                    pb: 8,
                    mt: 10,
                    fontStyle: "italic"
                }}
            >
                Crafted with love by Aiden Phan
            </Typography>
        </Box>
    )
}