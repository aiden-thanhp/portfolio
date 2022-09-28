import { CssBaseline } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer.components";
import NavBar from "./components/NavBar/NavBar.components";
import Layout from "./layout/Layout"

export default function App() {
    return (
        <React.Fragment>
            <CssBaseline />
            <NavBar />
            <Routes>
                <Route path="/" element={<Layout />} />
            </Routes>
            <Footer />
        </React.Fragment>
    )
}