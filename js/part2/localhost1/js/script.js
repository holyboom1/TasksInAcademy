window.onload = function () {

    if(checkCookie("user")) {

        auth.remove();
        let user_name=getCookie("user");
        let div = document.createElement("div");
        div.innerHTML=`Привет, ${user_name}`;


        let exit = document.createElement("span");
        exit.addEventListener("click",exitUser);
        exit.innerHTML=`Выйти`;
        document.body.append(div);
        document.body.append(exit);


        if (!checkCookie("views")){
            setCookie("views","1",1);
            let views = document.createElement("div");
            views.innerHTML=`   количество просмотров ${getCookie("views")}`;
            document.body.append(views);
        }
        else {
            setCookie('views', `${+getCookie("views")+1}`, 1);
            let views = document.createElement("div");
            views.innerHTML=`   количество просмотров ${getCookie("views")}`;
            document.body.append(views);
        }

        lastViewed();
    }

    else {
        auth.addEventListener("submit", getFormData);

    }

    function lastViewed() {
        let lastDate = new Date().toString();
        setCookie(`lastTime`, `${lastDate}`);
        let dat = document.createElement("div");
        dat.innerHTML=`последний вход был : ${getCookie("lastTime")}`;
        document.body.append(dat);
    }
    function firstDate() {
        let first = new Date().toString();
        setCookie(`firstTime`, `${first}`);
        let dat = document.createElement("div");
        dat.innerHTML=`first date : ${getCookie("firstTime")}`;
        document.body.append(dat);
    }

    function exitUser() {
        setCookie("user","", 0);
        setCookie("views","", 0);
        setCookie(`lastTime`, ``, 0);
        setCookie(`firstTime`, ``, 0);
        location.reload();

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

    function getFormData(e) {
        e.preventDefault()

        if(!checkCookie("user")) {
            setCookie("user",document.querySelector("#user_name").value,1);

            location.reload();
        }
        else {
            console.log(getCookie());
        }
    }
}