import React from "react";

export default function Logo(props){
    let {logo} = props;

    return logo != undefined ? <section className={"col-lg-4"}>
        {logo}
    </section> : "non logo"
}