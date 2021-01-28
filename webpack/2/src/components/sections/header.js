import React from "react";
import Item from "Comp/menu/item";
import data from "Comp/menu/data/header";
import Logo from "./sectionsParts/logo";
import MenuNav from "./menunav";

export default function Header(props) {
    let {logo,showMenu} =props;
    return <header>
        <section className={"container"}>
            <div className={"row"}>
                <section className={"col-lg-4"}>
                   <Logo logo={logo}/>
                </section>
                <MenuNav showMenu={showMenu}/>
            </div>
        </section>
    </header>
}