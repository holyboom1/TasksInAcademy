`use strict`;

    function ce(name="div",text,event,fn) {
        let x = document.createElement(name);
        if (text != undefined) {
            x.innerHTML = text;
        }

        if (event != undefined) {
            x.addEventListener(event, fn);
        }

        return x;
    }

    function load () {
        let win = ce("div");
        document.body.append(win);
    }
    load();
