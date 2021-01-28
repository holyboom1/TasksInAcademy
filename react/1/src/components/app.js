import React from "react";
import Header from "Comp/sections/header";
import Slider from "./sections/slider";
import Content from "./sections/Content";
import Footer from "./sections/Footer";

export default function App() {
    return <div>
        <Header showMenu={true} logo={"hello world"} />
        <Slider/>
        <Content />
        <Footer />
    </div>
}