import React from "react";
import data from "Comp/menu/data/header";
import Item from "Comp/menu/item";

export default function MenuNav(props){
    let {showMenu} =props;
    return  showMenu ? <nav className={"col-lg-8"}>
            <ul>
                {
                    data.map((item,i)=><Item info={item} key={i} />)
                }
            </ul>
        </nav> : null
}