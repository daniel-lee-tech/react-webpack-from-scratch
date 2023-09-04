import React from 'react'
import {Child1} from "./components/Child1";
import {Child2} from "./components/Child2";
import {ImagePresenter} from "./components/ImagePresenter";

export function App() {
    return <div>
        <p>text in App with hot reload</p>
        <Child1 />
        <Child2 />
        <ImagePresenter defaultShow={false} />
    </div>
}
