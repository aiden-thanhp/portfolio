import { 
    Box, 
    Grid, 
    Typography
} from "@mui/material";
import React from "react";
import theme from "../Theme/theme.component";
import { indigo } from "@mui/material/colors";
import PortfolioCard from "../Card/Card.component"

export default function Portfolio() {
    return (
        <Grid
            container
            sx={{
                backgroundColor: indigo[800],
                pb: 10
            }}
        >
            <Grid item xs={12}>
                <Box
                    sx={{
                        mt: 10
                    }}
                >
                    <Typography
                        component="h3"
                        variant="h3"
                        sx={{
                            fontFamily: theme.fontFamily.join(','),
                            fontWeight: "900",
                            fontSize: "25px",
                            letterSpacing: 5,
                            textAlign: "center",
                            color: "#fff"
                        }}
                    >
                        MY RECENT WORKS
                    </Typography>
                    <Typography
                        component="p"
                        variant="p"
                        sx={{
                            fontFamily: theme.fontFamily.join(','),
                            fontWeight: "900",
                            fontSize: "15px",
                            textAlign: "center",
                            mt: 3,
                            color: "#fff"
                        }}
                    >
                        Here are a few past projects I've worked on
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <PortfolioCard 
                    label="S"
                    title="This is Title"
                    subheader="This is Subheader"
                    imageLink={"/"}
                    imgAlt="testing"
                    description="description for this is title"
                    githubLink="www.google.com"
                    siteLink="www.google.com"
                    detail="detail this detail this"
                />
            </Grid>
        </Grid>
    )
}