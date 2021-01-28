window.onload = function () {
    let eee=new Date()
        console.log(eee.getTime())
    let reg =[
        ["firstname", /^[a-z-а-я]{2,10}$/gi],
        ["lastname", /^[a-z-а-я]{2,20}$/gi],
        ["email", /.by$|.бел$/gi],
        ["url", /^http|^https/gi],
        ["age", /^[1][8]$|^[1][9]$|^[2-9][0-9]$|^[1][0-1][0-9]$|^[1][2][0]$]/],
        ["pass", /(([a-z])+([A-Z])+([0-9])+(([!])*([#])*([?])*([&]))+)/],
        ["about", /^[a-z-а-я]{2,10}$/],
    ];

    let textElements = document.querySelectorAll(`form[name="reg"] input, form[name="reg"] textarea`);
    textElements.forEach((item)=>item.addEventListener("input",changeValue))

    function changeValue() {
        let re = getRegExp(this.name);
        let myid=this.getAttribute("id");
        let mytd=document.(` td user-data="${myid}"`);
        mytd.innerText=this.value;

        if(!re.test(this.value)) {
            showError(this,"обязательное поле!");
        }
        else {
            removeError(this);
        }
    }

    function getRegExp(name) {
        let data = [];
        reg.forEach((item)=>{
            if(name==item[0]) data.push(item[1]);
        })

        return data[0];
    }


    function showError(elem,message) {

        if(elem.nextElementSibling==null){
            let elemError = document.createElement("span");
                elemError.innerHTML = message;
                elemError.className="error-text";
                elem.parentElement.append(elemError);
                elem.className="form-error"
        }
        elem.focus();

    }

    function removeError(elem) {
        elem.classList.remove("form-error");
        elem.nextElementSibling!=null ? elem.nextElementSibling.remove() : null;
    }


}