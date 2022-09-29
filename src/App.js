import { CssBaseline } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact/Contact.components";
import Footer from "./components/Footer/Footer.components";
import NavBar from "./components/NavBar/NavBar.components";
import Layout from "./layout/Layout"
import ProjectPage from "./layout/ProjectPages/ProjectPage.components";

export default function App() {
    return (
        <React.Fragment>
            <CssBaseline />
            <NavBar />
            <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="/projects/:projectId" element={<ProjectPage />} />
            </Routes>
            <Contact />
            <Footer />
        </React.Fragment>
    )
}