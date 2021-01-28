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

    function init() {
        let box = ce("div");
        let box1 = ce("div");
        let box2 = ce("div");
        box1.id="modalInText"
        box.append(box1);
        box.append(box2);
        box.id = "modalWindow";
        box.className="show_modal_window"
        let ok = ce("div", "OK","click", okFnModal);
        ok.className="modalWindowButton";
        let delBt = ce("div", "cancel","click", closeWindow);
        delBt.className="modalWindowButton";
        box2.append(ok);
        box2.append(delBt);
        document.body.append(box)
    }
    function closeWindow() {
        document.getElementById("modalWindow").classList.toggle("show_modal_window")
        let del= document.getElementsByClassName("active");
        for(let i=0 ;i<del.wwwwwwwwwwwwwwwwwwwwwst.remove("active")
        }
    }
    function okFnModal() {
        let del= document.getElementsByClassName("active");
        for(let i=0 ;i<del.length; i++){
            del[i].remove()
        }
        document.getElementById("modalWindow").classList.toggle("show_modal_window")
    }

    init();
