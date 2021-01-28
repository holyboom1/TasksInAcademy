import React from "react";
import Copyright from "./sectionsParts/Copyright";
import InfoText from "./sectionsParts/InfoText";

export default function Footer(props) {
    return <section className={"container"}>
    <div className={"row"}>
        <Copyright />
        <InfoText/>
    </div>
    </section>

}