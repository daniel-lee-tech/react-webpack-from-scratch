import React, {Suspense} from 'react'
import {createBrowserRouter, RouterProvider, Route, createRoutesFromElements} from "react-router-dom";
import {RootLayout} from "./layouts/RootLayout";

const LazyHomePage = React.lazy(() => import('./pages/HomePage'))
const LazyAboutPage = React.lazy(() => import('./pages/AboutPage'))
const LazyImagePresenterPage = React.lazy(() => import('./pages/ImagePresenterPage'))

const routes = createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
        <Route path='/' element={<LazyHomePage />} />
        <Route path='/about' element={<LazyAboutPage />} />
        <Route path='/imagePresenter' element={<LazyImagePresenterPage />} />
    </Route>
)

const router = createBrowserRouter(routes)

export function App() {
    return (
        <Suspense fallback={<p>Loading</p>}>
            <RouterProvider router={router} />
        </Suspense>

    )
}
