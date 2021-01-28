window.onload = function () {

    function init() {

        let box=ce("div");
        box.id="container"
        let inputs=ce("div");
        inputs.id="inputs";
        let form=ce("form");
        form.setAttribute("name", "addForm");

        let input=ce("input");
        input.setAttribute("name", "name");
        input.setAttribute("placeholder","ФИО")
        form.append(input);

        let input1=ce("input");
        input1.setAttribute("name", "ZP")
        input1.setAttribute("placeholder","ЗП")
        form.append(input1);

        let input2=ce("input");
        input2.setAttribute("name", "age")
        input2.setAttribute("placeholder","Возраст")
        form.append(input2);

        let okBut=ce("button","ok","click",addLine);
        form.append(okBut);
        inputs.append(form);

        let result=ce('div');
        result.id="results";
        let table=ce("table");
        table.id="tableRez"
        result.append(table);
        box.append(inputs);
        box.append(result);
        document.body.append(box);
        if (localStorage.getItem("counter") != null) {
            var counter = +localStorage.getItem("counter");
        } else {
            localStorage.setItem("counter", 0);
        }
    }
    init();
    var counter=+localStorage.getItem("counter");
        if (counter!==0){
            firstTD();
            reloadPage();

        }

    function addLine(e) {
        e.preventDefault();
        let input=document.querySelectorAll(`form[name="addForm"] input`);
        addTD(counter,input[0].value,input[1].value,input[2].value);
        addToLocaleStorage(counter,input[0].value,input[1].value,input[2].value)
        counter++
        localStorage.setItem("counter", `${counter}`);
    }
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
    function addTD(namber,name,ZP,age){
        counter!==0 ?  null : firstTD();
        let tr=ce("tr");
        tr.setAttribute("user-data",`${namber}`)
        let nameTd=ce("td",`${name}`);
        let ZPTd=ce("td",`${ZP}`);
        let ageTd=ce("td",`${age}`);
        let delTd=ce("td",`X`,"click",delTD);
        delTd.setAttribute("user-data",`${namber}`)
        tr.append(nameTd,ZPTd,ageTd,delTd);
        document.querySelector("#tableRez").append(tr);
    }
    function firstTD() {
            let tr=ce("tr");
            let nameTd=ce("td",`ФИО`);
            let ZPTd=ce("td",`ЗП`);
            let ageTd=ce("td",`Возраст`);
            tr.append(nameTd,ZPTd,ageTd);
            document.querySelector("#tableRez").append(tr);
    }
    function addToLocaleStorage(namber,name,ZP,age) {
        localStorage.setItem(`${namber}`,`${name};${ZP};${age}`);
    }
    function delTD() {
            let namb=this.getAttribute("user-data");
            this.parentElement.remove();
            localStorage.removeItem(namb);
    }

    function reloadPage() {
        for (i=0;i<localStorage.length;i++){
            if (localStorage.key(i)!=="counter")
            {
                let ls = localStorage.getItem(localStorage.key(i)).split(";")
                addTD(+localStorage.key(i),ls[0],ls[1],ls[2])
            }

        }
    }


}