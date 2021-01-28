window.onload = function () {
    let k = 0;
    let x = document.createElement("div");
    x.innerHTML="Добавить";
    x.addEventListener("click", addElem);
    document.body.prepend(x);

    function addElem() {
        let x = document.createElement("div");
        x.innerHTML=`Элемент ${++k}`;
        document.body.append(x);
    }
}