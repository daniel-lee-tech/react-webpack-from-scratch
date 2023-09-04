import React from 'react'
import {createBrowserRouter, RouterProvider, Route, createRoutesFromElements} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {AboutPage} from "./pages/AboutPage";
import {ImagePresenterPage} from "./pages/ImagePresenterPage";
import {RootLayout} from "./layouts/RootLayout";

const routes = createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/imagePresenter' element={<ImagePresenterPage />} />
    </Route>
)

const router = createBrowserRouter(routes)

export function App() {
    return (
        <RouterProvider router={router} />
    )
}
