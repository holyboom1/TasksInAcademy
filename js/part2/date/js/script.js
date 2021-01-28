window.onload = function () {

    let dateNow = new Date();
    let dateNew = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate()+1);
    setInterval(()=>{
        let d = new Date();
        document.querySelector("#show").innerHTML=`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`

    },1000)

    console.log((dateNew-dateNow)/1000/60/60);

    console.log(dateNow.toDateString()) //Thu Sep 17 2020
    console.log(dateNow.toLocaleString('de-DE', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric' })
    ) //17.09.2020, 19:51:12
     console.log(dateNow.toLocaleString('de-DE', {
         hour: 'numeric',
         minute: 'numeric',
         second: 'numeric'})
    ) //17.09.2020, 19:51:12
    console.log(dateNow.toString().split(" ")) //Thu Sep 17 2020 19:48:39 GMT+0300 (Москва, стандартное время)

    document.querySelector("#time").innerHTML=`${dateNow}`



}