import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../routes/Home/Home.Routes";

export default function WebRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}