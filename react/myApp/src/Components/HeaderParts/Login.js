import React, {Fragment} from "react"

export default function LoginBlock(props) {
    function setCookie(name, val , expires) {
        document.cookie=`${name}=${val};max-age=${expires * 3600}`;
    }
    function getCookie(name){
        document.cookie.split(";").filter((item)=>{
            if (item.includes(name)){
                return item
            }
        })
    }
    setCookie("1111", 1111, 1)
    console.log(document.cookie)
    console.log(document.cookie.split(";").filter((item)=>{
        if (item.includes("key")) {
           return  item.split("=")


        }
        }

    ))

    return 231

}