import { 
    Box, 
    Grid, 
    Typography
} from "@mui/material";
import React from "react";
import theme from "../Theme/theme.component";
import { indigo } from "@mui/material/colors";
import PortfolioCard from "../Card/Card.component"
import RestaurantPic from "../../assets/restaurant.png";
import SocialSitePic from "../../assets/social-site.png";
import WeLoveMoviePic from "../../assets/welovemovie.png"

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
            <Grid item xs={12} md={6} lg={4} sx={{ mt: 4, display: "flex", justifyContent: "center", alignItems: "center" }} >
                <PortfolioCard 
                    label="S"
                    title="Social Site"
                    subheader="Account Creation and Login"
                    imageLink={SocialSitePic}
                    imgAlt="Social Site"
                    description="This is a project that allows users to create accounts and posts and manage them through their logins."
                    githubLink="www.google.com"
                    siteLink="www.google.com"
                    detail="detail this detail this"
                />
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={{ mt: 4, display: "flex", justifyContent: "center", alignItems: "center" }} >
                <PortfolioCard 
                    label="R"
                    title="Restaurant Reservation"
                    subheader="Business reservation management"
                    imageLink={RestaurantPic}
                    imgAlt="Restaurant Reservation System"
                    description="This is a project that "
                    githubLink="www.google.com"
                    siteLink="www.google.com"
                    detail="detail this detail this"
                />
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={{ mt: 4, display: "flex", justifyContent: "center", alignItems: "center" }} >
                <PortfolioCard 
                    label="W"
                    title="We Love Movies"
                    subheader="Database Management"
                    imageLink={WeLoveMoviePic}
                    imgAlt="We Love Movies"
                    description="description for this is title"
                    githubLink="https://github.com/aiden-thanhp/WeLoveMovies"
                    siteLink="https://starter-movie-front-end-puce.vercel.app/"
                    detail="detail this detail this"
                />
            </Grid>
        </Grid>
    )
}