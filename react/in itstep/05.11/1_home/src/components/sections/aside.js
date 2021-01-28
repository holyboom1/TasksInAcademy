import React from "react";

export default function Aside(props) {
    let {data,sub} =props;
    // console.log(logo,showMenu,data);
    return <aside className={"col-lg-3"}>
        <ul>
            {
                data.map((item,i)=><li key={i}>
                    <a href={item.url}>{item.title}</a>

                    {
                        sub && item.sub!=undefined ?
                            <ol>
                                {
                                    item.sub.map((child,j)=><li key={j}>
                                        <a href={child.url}>{child.title}</a>
                                    </li>)
                                }
                            </ol>
                        :null
                    }
                </li>)
            }
        </ul>
    </aside>

}