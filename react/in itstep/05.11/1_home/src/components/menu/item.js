import React from "react";

export default function Item(props){
    let {url,title,status} = props.info;

    return status ? <li>
        <a href={url}>{title}</a>
    </li> :null
}