import React from "react";
import Text from "Comp/modules/textModule";


export default function Footer(props) {
    let {logo,showMenu} =props;
    // console.log(logo,showMenu,data);
    return <footer>
        <section className={"container"}>
            <div className={"row"}>
                <section className={"col-lg-6"}>
                    <Text status={true} asdas={123123} asda={12312}>
                        <div className={"2222"}>
                            123123
                            <p>asdas</p>
                        </div>
                    </Text>
                </section>
                <section className={"col-lg-6"}>
                    <Text status={false} asdas={123123} asda={12312}>
                        <ol>
                            <li>1111</li>
                            <li>1111</li>
                        </ol>
                    </Text>
                </section>
            </div>
        </section>
    </footer>
}