import React from "react";
import Header from "Comp/sections/header";
import Footer from "Comp/sections/footer";
import Content from "Comp/pages/index";


export default function App() {
    return <div>
        <Header showMenu={true} logo={"hello world"} />
        <Content />
        <Footer  />
    </div>
}