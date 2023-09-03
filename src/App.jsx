import React from 'react'
import {Child1} from "./components/Child1.jsx";
import {Child2} from "./components/Child2.jsx";
import {ImagePresenter} from "./components/ImagePresenter.jsx";

export function App() {
    return <div>
        <p>text in App with hot reload</p>
        <Child1 />
        <Child2 />
        <ImagePresenter />
    </div>
}
