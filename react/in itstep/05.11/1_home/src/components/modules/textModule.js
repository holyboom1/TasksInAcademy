import React from "react";
import Item from "Comp/menu/item";
import data from "Comp/menu/data/header";

export default function Text(props) {
    let {status}=props;
    console.log(status,props);
    return <div>
        {
            status!=undefined && status==true ?
                props.children: null
        }
    </div>
}