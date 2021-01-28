window.onload = function () {

    document.getElementById("ok").addEventListener("click", okDate);

    function okDate() {
        let re = /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/
        //"2017-01-25"
        let datein = document.getElementById("dateIN").value;
        if (re.test(datein)) {
            removeError(document.getElementById("youBD"))

            let dateBD=new Date(datein);

            showError(document.getElementById("youBD"), `ваш день рождение был : ${dateBD.toLocaleString('ru-RU', {weekday:"long"})}`);

        } else {
            showError(document.getElementById("youBD"), "неверная дата");
        }
    }

    var flag;
    function showError(elem, message) {
        if (!flag) {
            let elemError = document.createElement("span");
            elemError.innerHTML = message;
            elemError.className = "error-text";
            elem.parentElement.append(elemError);
            elem.className = "form-error"
            flag = true;
        }
    }
    function removeError(elem) {
        elem.classList.remove("form-error");
        elem.nextElementSibling!=null ? elem.nextElementSibling.remove() : null;
    }
}
    // let dateNow = new Date();
    // let dateNew = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate()+1);
    // setInterval(()=>{
    //     let d = new Date();
    //     document.querySelector("#show").innerHTML=`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
    //
    // },1000)
    //
    // console.log((dateNew-dateNow)/1000/60/60);
    //
    // console.log(dateNow.toDateString()) //Thu Sep 17 2020
    // console.log(dateNow.toLocaleString('de-DE', {
    //     weekday: 'long',
    //     year: 'numeric',
    //     month: 'long',
    //     day: 'numeric' })
    // ) //17.09.2020, 19:51:12
    //  console.log(dateNow.toLocaleString('de-DE', {
    //      hour: 'numeric',
    //      minute: 'numeric',
    //      second: 'numeric'})
    // ) //17.09.2020, 19:51:12
    // console.log(dateNow.toString().split(" ")) //Thu Sep 17 2020 19:48:39 GMT+0300 (Москва, стандартное время)
    //
    // document.querySelector("#time").innerHTML=`${dateNow}`


