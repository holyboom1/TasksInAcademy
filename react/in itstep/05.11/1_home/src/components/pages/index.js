import React from "react";
import Slider from "Comp/modules/slider";
import Aside from "Comp/sections/aside";
import items_json from "Comp/menu/data/aside_test";
import items_json2 from "Comp/menu/data/aside";

export default function Content(props) {
    //let {logo,showMenu} =props;
    // console.log(logo,showMenu,data);
    return <main>
        <section className={"container"}>
            <div className={"row"}>
                <Slider url={"http://www.rus-zona.net/wp-content/uploads/2015/03/zayats.jpg"} />
                <Aside data={items_json2} sub={true} />
                <section className={"col-lg-9"}>
                    <h1>index</h1>
                    {/*<Slider url={"http://www.rus-zona.net/wp-content/uploads/2015/03/zayats.jpg"} />*/}
                </section>
            </div>
        </section>
    </main>
}