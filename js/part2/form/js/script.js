window.onload = function () {

    console.log(document.forms)

    document.querySelector(`form[name="reg"]`).addEventListener("submit",getFormInfo);


    function getFormInfo(e) {
        e.preventDefault();
        let elems = document.querySelectorAll(`form[name="reg"] input, form[name="reg"] textarea`)
        let str = "";
        elems.forEach((item,i)=>{
            if(item.type!="submit") {
                str+=` ${item.getAttribute("data-name")} ---> ${item.value} \n`
                item.name=="username" ? item.disabled=true : null;
            }
        })

        console.log(str);
    }
}