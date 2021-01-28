import React from "react";
import Header from "Comp/sections/header";
import Content from "Comp/sections/content";
import Slider from "./sections/slider";
import Footer from "./sections/footer";

export default function App() {
    return <div>
        <Header showMenu={true} logo={"hello world"} />
        <Slider/>
        <Content />
        <Footer/>
    </div>
}