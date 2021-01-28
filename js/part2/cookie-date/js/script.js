window.onload = function () {

	if(checkCookie("count")) {
		let k = getCookie("count");
		let date = getCookie("first_visit");
		setCookie("count",++k,1);
		renderCount(k);
		checkCookie("first_visit") ? renderFirstVisit(date) : null;
	}	
	
	else {
		setCookie("count",1,1);
		renderCount(1);
		
	}


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

    }

    else {
        auth.addEventListener("submit", getFormData);

    }
	
	function renderCount(k) {
		let count = document.createElement("p");
			count.innerHTML=`Количество просмотров ${k}`;
			document.body.append(count);
	}
	
	function renderFirstVisit(value) {
		let date = document.createElement("p");
		
		let dateVisit =  new Date(+value);	
		console.log(dateVisit)
			date.innerHTML=`Первое посещение ${dateVisit.toLocaleString()}`;
			document.body.append(date);
	}

    function exitUser() {
        setCookie("user","", 0);
        setCookie("count","", 0);
        location.reload();
    }

    function checkCookie(name) {
        return document.cookie.indexOf(name)!=-1 ? true : false;
    }

    function setCookie(name, val , expires) {
        document.cookie=`${name}=${val};max-age=${expires * 3600}`;
    }

    function getCookie(name) {
        let x = document.cookie.split("; ")
		let val=null;
		x.forEach((item)=>{
			let res = item.split("=");
			if(res[0]==name) {
				val = res[1];
			}				
		})
		
		return val;
		
		//return document.cookie.split("=")[1];
    }

    function getFormData(e) {
        e.preventDefault()

        if(!checkCookie("user")) {
            setCookie("user",document.querySelector("#user_name").value,1);
			setCookie("first_visit", Date.now(),1);
			renderFirstVisit(Date.now());
            location.reload();
        }
        else {
            console.log(getCookie());
        }
    }
}