import React from "react";

import Logo from "./logo";
import MenuNav from "./menunav";

export default function Header(props) {
    let {logo,showMenu} =props;
    // console.log(logo,showMenu,data);
    return <header>
        <section className={"container"}>
            <div className={"row"}>
                <Logo logo={logo}/>
                <MenuNav showMenu={showMenu}/>
            </div>
        </section>
    </header>
}