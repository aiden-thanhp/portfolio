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
                    githubLink="https://github.com/aiden-thanhp/social-frontend"
                    siteLink="https://social-frontend-six.vercel.app/"
                    detail={
                        <div>
                            <Typography paragraph>
                                Assembled the functionality for an application that allows users to create and manage their accounts, log in and log out, and create and manage posts. 
                            </Typography>
                            <Typography paragraph>
                                Developed frontend and backend systems that implement the functions using React, Express, and Node.JS for building the core system and make HTTP requests for all the accounts and posts creation and editing, and Bcrypt, JSON Web Tokens, and Universal Cookies to create and manage passwords and login tokens.
                            </Typography>
                            <Typography paragraph>
                                Utilized Material UI as a framework to create the frontend side with file management that minimizes duplicate components.
                            </Typography>
                        </div>
                    }
                />
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={{ mt: 4, display: "flex", justifyContent: "center", alignItems: "center" }} >
                <PortfolioCard 
                    label="R"
                    title="Restaurant Reservation"
                    subheader="Business reservation management"
                    imageLink={RestaurantPic}
                    imgAlt="Restaurant Reservation System"
                    description="A reservation management system for a restaurant for users to create, edit, and manage bookings."
                    githubLink="https://github.com/aiden-thanhp/starter-restaurant-reservation"
                    siteLink="https://restaurant-reservation-rust.vercel.app/dashboard"
                    detail={
                        <div>
                            <Typography paragraph>
                                Created a full-stack web application to create and manage reservation and table systems for a restaurant. 
                            </Typography>
                            <Typography paragraph>
                                Implemented React router for frontends and Node.JS and Express for the backend to manage HTTP requests for all the reservation data stored in the PostgreSQL database. 
                            </Typography>
                            <Typography paragraph>
                                Used Git to track progress and versions and Dotenv to keep sensitive information from being pushed to repositories. 
                            </Typography>
                        </div>
                    }
                />
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={{ mt: 4, display: "flex", justifyContent: "center", alignItems: "center" }} >
                <PortfolioCard 
                    label="W"
                    title="We Love Movies"
                    subheader="Database Management"
                    imageLink={WeLoveMoviePic}
                    imgAlt="We Love Movies"
                    description="A backend application that manage the movies, reviews, and theaters."
                    githubLink="https://github.com/aiden-thanhp/WeLoveMovies"
                    siteLink="https://starter-movie-front-end-puce.vercel.app/"
                    detail={
                        <div>
                            <Typography paragraph>
                                Created an application for users to gain access to data about movies, theaters, and reviews. 
                            </Typography>
                            <Typography paragraph>
                                Developed a backend to store data and built specific routes that worked with the frontend from another developer to implement the functions.
                            </Typography>
                            <Typography paragraph>
                                Used CRUD methods for reviews, and to view theaters and movies that are showing.
                            </Typography>
                            <Typography paragraph>
                                Applied middleware packages, routes, and query parameters to manage users’ specific requests. 
                            </Typography>
                            <Typography paragraph>
                                Used Knex migrations and seedings to create and manage the database stored with PostgreSQL.
                            </Typography>
                        </div>
                    }
                />
            </Grid>
        </Grid>
    )
}