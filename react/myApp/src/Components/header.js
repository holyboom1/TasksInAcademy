import React, {Fragment} from "react"
import MenuUI from "./HeaderParts/menuUI";
import LoginBlock from "./HeaderParts/Login";

export default function Header(props) {



    return <Fragment>
            <MenuUI/>
{/*//    <Logo/>*/}
{/*//    <Search/>*/}
            <LoginBlock/>
        </Fragment>
}