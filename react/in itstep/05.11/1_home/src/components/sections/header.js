import React from "react";
import Item from "Comp/menu/item";
import data from "Comp/menu/data/header";

export default function Header(props) {
    let {logo,showMenu} =props;
    // console.log(logo,showMenu,data);
    return <header>
        <section className={"container"}>
            <div className={"row"}>
                <section className={"col-lg-4"}>
                    {logo}
                </section>
                {
                    showMenu ? <nav className={"col-lg-8"}>
                        <ul>
                            {
                                data.map((item,i)=><Item info={item} key={i} />)
                            }
                        </ul>
                    </nav> : null
                }
            </div>
        </section>
    </header>
}