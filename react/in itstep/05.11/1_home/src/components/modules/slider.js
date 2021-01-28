import React from "react";

export default function Slider(props) {
    let {url} =props;
    // console.log(logo,showMenu,data);
    return <section className={"col-lg-12 slider"}>
            <img src={url} />
        </section>

}