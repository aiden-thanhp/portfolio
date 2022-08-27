import { CssBaseline } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout"

export default function App() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Routes>
                <Route path="/" element={<Layout />} />
            </Routes>
        </React.Fragment>
    )
}