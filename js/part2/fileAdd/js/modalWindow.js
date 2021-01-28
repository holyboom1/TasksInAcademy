'use strict';

    function ce(name = "div", text, event, fn) {
        let x = document.createElement(name);
        if (text != undefined) {
            x.innerHTML = text;
        }

        if (event != undefined) {
            x.addEventListener(event, fn);
        }

        return x;
    }

    function showModal() {
        document.getElementById("modalWindow").classList.toggle("show_modal_window")

    }
    function madalAction() {
        if(+this.getAttribute("user-data") === 1){
            console.log(111)
        }
        else {
            console.log(1121)}

    }
    function init() {
        let box = ce("div");
        let box1 = ce("div");
        let box2 = ce("div");
        box1.id="modalInText"
        box1.innerText=`Удалить?`;
        box.append(box1);
        box.append(box2);
        box.id = "modalWindow";
        box.className="show_modal_window"
        let ok = ce("div", "OK","click", madalAction);
        ok.setAttribute("user-data","1")
        ok.className="modalWindowButton";
        let delBt = ce("div", "cancel","click", madalAction);
        delBt.setAttribute("user-data","0")
        delBt.className="modalWindowButton";
        box2.append(ok);
        box2.append(delBt);
        document.body.append(box)    }

    function closeModal() {
        document.getElementById("modalWindow").classList.toggle("show_modal_window");

    }

        init();