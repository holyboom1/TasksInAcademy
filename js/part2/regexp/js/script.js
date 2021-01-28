window.onload = function () {


    document.querySelector(`form[name="reg"]`).addEventListener("submit",getFormInfo);
    document.querySelector(`form[name="reg"] select`).addEventListener("change",changeColor);
    let re =[
        ["username", /^[a-z]{2,10}$/],
        ["city", /^[0-9]{5,10}$/]
    ];
        // onblur
        // onfocus
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


    let textElements = document.querySelectorAll(`form[name="reg"] input, form[name="reg"] textarea`);
    textElements.forEach((item)=>{
        if(item.type!="submit" && item.type!="file") {
            item.addEventListener("blur",blurFn)
        }

        if(item.tagName=="TEXTAREA") {
            //oninput
            //onchange
            item.addEventListener("input",inputFn)
        }

        if(item.type=="file") {
            //oninput
            //onchange
            item.addEventListener("change",fileFn)
        }
    })


    function blurFn() {


        let re = getRegExp(this.name);

        if(!re.test(this.value)) {
            showError(this,"Что-то не так");
        }
        else {
            removeError(this);
        }
    }

    function getRegExp(name) {
        let data = [];
        re.forEach((item)=>{
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

                //элемент_формы.focus()
                //элемент_формы.blur()
        }

        elem.focus();

    }
    
    function removeError(elem) {
        elem.classList.remove("form-error");
        elem.nextElementSibling!=null ? elem.nextElementSibling.remove() : null;
    }

    function inputFn() {
        //this.value

        if (this.value.length>20) {
            this.value =this.value.slice(0,20);
        }

        document.querySelector("#count").innerHTML = `${this.value.length} / 20`;
    }

    function changeColor() {
        document.body.style.background = this.value;
    }

    function fileFn() {
        console.log(this.files)
    }


    function initCount() {
        let textarea =  document.querySelector(`form[name="reg"] textarea`);
        let first =  document.querySelector(`form[name="reg"] input[name="username"]`);

        first.focus();
        let x = document.createElement("p");
            x.id="count";
            x.innerHTML=`0 / 20`;
            textarea.parentElement.append(x);
    }

    initCount();


}