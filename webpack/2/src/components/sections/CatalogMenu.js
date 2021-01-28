import React from "react";
import catalog from  "Comp/menu/data/catalog.json";
import Item from "Comp/menu/item";

export default function CatalogMenu(props) {
    return <div>
        <ul>
            {
                catalog.map((item,i)=><Item info={item} key={i} />)
            }
        </ul>
    </div>
}