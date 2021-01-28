window.onload = function () {
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
    if (!checkCookie("visit")){
        let box = ce("div");
        let box1 = ce("div",`tut.by`, 'click', ()=>goTo("tut.by"));
        let box2 = ce("div", `onliner.by`,'click',()=>{goTo("onliner.by")});
        box.append(box1);
        box.append(box2);

        showModal(`куда пойдем???  `,box)
        document.querySelectorAll("#modalInText > div > div").forEach((i)=>{i.setAttribute("style", "border: 1px solid blue")})

    }
    if (checkCookie("visit")) {
        let visdate=new Date(+getCookie("firstTime"));
        let vis=ce("div",`вы уже посещали страницу ${getCookie("visit")}, в ${visdate.toLocaleString()}`);
        document.body.append(vis);
        let cl=ce("div", "еще раз!","click", letsTry)
        document.body.append(cl);
    }

    function goTo(url) {
        setCookie(`visit`,`${url}`,1)
        firstDate()
        window.open(`http://${url}`);
        showModal()
        location.reload();
    }

    function firstDate() {
        setCookie(`firstTime`, Date.now(), 1);
    }

    function checkCookie(name) {
        return document.cookie.indexOf(name)!=-1 ? true : false;
    }

    function setCookie(name, val , expires) {
        document.cookie=`${name}=${val};max-age=${expires * 3600}`;
    }

    function getCookie(name) {
        let cook = document.cookie.split(";");
        for (let i=0; i<cook.length;i++){
            if (cook[i].split("=")[0].trim()==name){
                return cook[i].split("=")[1];
            }
        }
    }

    function letsTry() {
        setCookie("firstTime","", 0);
        setCookie("visit","", 0);
        location.reload();
    }

    // if(checkCookie("user")) {
    //
    //     auth.remove();
    //     let user_name=getCookie("user");
    //     let div = document.createElement("div");
    //         div.innerHTML=`Привет, ${user_name}`;
    //
    //
    //     let exit = document.createElement("span");
    //         exit.addEventListener("click",exitUser);
    //         exit.innerHTML=`Выйти`;
    //         document.body.append(div);
    //         document.body.append(exit);
    //
    //
    //         if (!checkCookie("views")){
    //             setCookie("views","1",1);
    //             let views = document.createElement("div");
    //             views.innerHTML=`   количество просмотров ${getCookie("views")}`;
    //             document.body.append(views);
    //         }
    //         else {
    //             setCookie('views', `${+getCookie("views")+1}`, 1);
    //             let views = document.createElement("div");
    //             views.innerHTML=`   количество просмотров ${getCookie("views")}`;
    //             document.body.append(views);
    //         }
    //
    //     lastViewed();
    // }
    //
    // else {
    //     auth.addEventListener("submit", getFormData);
    //
    // }
    //
    // function lastViewed() {
    //     let lastDate = new Date().toString();
    //     setCookie(`lastTime`, `${lastDate}`);
    //     let dat = document.createElement("div");
    //     dat.innerHTML=`последний вход был : ${getCookie("lastTime")}`;
    //     document.body.append(dat);
    // }

    //
    // function exitUser() {
    //     setCookie("user","", 0);
    //     setCookie("views","", 0);
    //     setCookie(`lastTime`, ``, 0);
    //     setCookie(`firstTime`, ``, 0);
    //     location.reload();
    //
    // }
    //

    //
    // function getFormData(e) {
    //     e.preventDefault()
    //
    //     if(!checkCookie("user")) {
    //         setCookie("user",document.querySelector("#user_name").value,1);
    //
    //         location.reload();
    //     }
    //     else {
    //         console.log(getCookie());
    //     }
    // }
}