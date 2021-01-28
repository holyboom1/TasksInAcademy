import React from "react";
import ContentText from "../content/ContentText";
import CatalogMenu from "./CatalogMenu";

export default function Content(props) {

    return <main>
            <div className={"container"}>
                <div className={"row"}>

                        <CatalogMenu/>


                        <ContentText/>

                </div>
            </div>
    </main>
}