 'use strict';
 window.onload = function(){

let closeModel = document.getElementsByClassName("closeModel");
 closeModel[0].addEventListener("click", closeFn);

function closeFn() {
    document.getElementsByClassName("selectElem show_item")[0].className="selectElem hide_item"
    document.body.className="unSelect"
    document.getElementsByClassName("gallery hide_item")[0].className="gallery show_item"


}
let divSelect = document.getElementsByClassName("main");
    divSelect[0].addEventListener("click",clickOnImg);

let gallery = document.getElementsByClassName("gallery")[0];
let li = gallery.getElementsByTagName("li");
let images = gallery.children[1].getElementsByTagName("img");
let img = gallery.getElementsByClassName("main")[0].children[0];

for(let i=0;i<images.length;i++){
images[i].addEventListener("click",itemClick);
}
init(0);

function clickOnImg() {
    show_select_item.setAttribute("src", select_item.getAttribute("src"))
    document.getElementsByClassName("selectElem hide_item")[0].className="selectElem show_item"
    document.body.className=""
    document.getElementsByClassName("gallery show_item")[0].className="gallery hide_item"
    document.getElementsByClassName("textItem")[0].innerText= document.getElementById("text").innerText

}

 function itemClick(){
        img.setAttribute("src",this.getAttribute("src"))
        document.getElementById("text").innerHTML = this.getAttribute("alt");
        document.getElementsByClassName("gallery")[0].getElementsByClassName("active")[0].removeAttribute("class");

        this.className="active";
    }

    function init(index) {
        //img.src = images[index].src;
        img.setAttribute("src",images[index].getAttribute("src"));
        document.getElementById("text").innerHTML = images[index].getAttribute("alt");
        images[index].setAttribute("class","active")
    }
//
 }
