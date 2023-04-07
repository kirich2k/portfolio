import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Contacts from "./Pages/Contacts";
import Error from "./Pages/Error";
import Main from "./Pages/Main";
import Project from "./Pages/Project";
import Skills from "./Pages/Skills";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />} errorElement={<Error />} />
            <Route
                path="/skills"
                element={<Skills />}
                errorElement={<Error />}
            />
            <Route
                path="/contacts"
                element={<Contacts />}
                errorElement={<Error />}
            />
            <Route
                path="/project/:id"
                element={<Project />}
                errorElement={<Error />}
            />
            <Route path="/error" element={<Error />} />
        </Routes>
    </BrowserRouter>
);
