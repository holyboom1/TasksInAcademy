 'use strict';
 window.onload = function() {

     let closeModel = document.getElementsByClassName("closeModel");
     closeModel[0].addEventListener("click", closeFn);

     function closeFn() {
         document.getElementsByClassName("selectElem show_item")[0].className = "selectElem hide_item"
         document.body.className = "unSelect"
         document.getElementsByClassName("gallery hide_item")[0].className = "gallery show_item"


     }

     let divSelect = document.getElementsByClassName("main");
     divSelect[0].addEventListener("click", clickOnImg);

     let gallery = document.getElementsByClassName("gallery")[0];
     let li = gallery.getElementsByTagName("li");
     let images = gallery.children[1].getElementsByTagName("img");
     let img = gallery.getElementsByClassName("main")[0].children[0];

     for (let i = 0; i < images.length; i++) {
         images[i].addEventListener("click", itemClick);
     }
     document.getElementsByClassName("nextImg")[0].addEventListener("click", nextImg)
      document.getElementsByClassName("prevImg")[0].addEventListener("click", prevImg);

     init(0);

     function clickOnImg() {
         show_select_item.setAttribute("src", select_item.getAttribute("src"))
         document.getElementsByClassName("selectElem hide_item")[0].className = "selectElem show_item"
         document.body.className = ""
         document.getElementsByClassName("gallery show_item")[0].className = "gallery hide_item"
         document.getElementsByClassName("textItem")[0].innerText = document.getElementById("text").innerText

     }

     function itemClick() {
         img.setAttribute("src", this.getAttribute("src"))
         document.getElementById("text").innerHTML = this.getAttribute("alt");
         document.getElementsByClassName("gallery")[0].getElementsByClassName("active")[0].removeAttribute("class");

         this.className = "active";
     }

     function init(index) {
         //img.src = images[index].src;
         img.setAttribute("src", images[index].getAttribute("src"));
         document.getElementById("text").innerHTML = images[index].getAttribute("alt");
         images[index].setAttribute("class", "active")
     }

//


     function nextImg() {
         const active = document.querySelector(".activeLi");
         var nextImg=active.nextElementSibling;
         if (nextImg==null){
             document.getElementsByClassName("active")[0].removeAttribute("class");
             document.getElementsByClassName("activeLi")[0].removeAttribute("class");
             show_select_item.setAttribute("src", images[0].getAttribute("src"));
             document.getElementsByClassName("textItem")[0].innerText = images[0].getAttribute("alt");
             document.getElementById("select_item").setAttribute("src", images[0].getAttribute("src"));
             document.getElementById("text").innerText = images[0].getAttribute("alt");
             images[0].setAttribute("class", "active");
             li[0].setAttribute("class", "activeLi");
         }
         else {
             document.getElementsByClassName("active")[0].removeAttribute("class");
             document.getElementsByClassName("activeLi")[0].removeAttribute("class");
             nextImg.getElementsByTagName("img")[0].setAttribute("class", "active");
             nextImg.setAttribute("class", "activeLi");
             show_select_item.setAttribute("src", nextImg.getElementsByTagName("img")[0].getAttribute("src"));
             document.getElementsByClassName("textItem")[0].innerText = nextImg.getElementsByTagName("img")[0].getAttribute("alt")
             document.getElementById("select_item").setAttribute("src", nextImg.getElementsByTagName("img")[0].getAttribute("src"));
             document.getElementById("text").innerText = nextImg.getElementsByTagName("img")[0].getAttribute("alt");
         }
     }

     function prevImg() {
         const active = document.querySelector(".activeLi");
         var nextImg=active.previousElementSibling;
         if (nextImg==null){
             document.getElementsByClassName("active")[0].removeAttribute("class");
             document.getElementsByClassName("activeLi")[0].removeAttribute("class");
             show_select_item.setAttribute("src", images[images.length-1].getAttribute("src"));
             document.getElementsByClassName("textItem")[0].innerText = images[images.length-1].getAttribute("alt");
             document.getElementById("select_item").setAttribute("src", images[images.length-1].getAttribute("src"));
             document.getElementById("text").innerText = images[images.length-1].getAttribute("alt");
             images[images.length-1].setAttribute("class", "active");
             li[images.length-1].setAttribute("class", "activeLi");
         }
         else {
             document.getElementsByClassName("active")[0].removeAttribute("class");
             document.getElementsByClassName("activeLi")[0].removeAttribute("class");
             nextImg.getElementsByTagName("img")[0].setAttribute("class", "active");
             nextImg.setAttribute("class", "activeLi");
             show_select_item.setAttribute("src", nextImg.getElementsByTagName("img")[0].getAttribute("src"));
             document.getElementsByClassName("textItem")[0].innerText = nextImg.getElementsByTagName("img")[0].getAttribute("alt")
             document.getElementById("select_item").setAttribute("src", nextImg.getElementsByTagName("img")[0].getAttribute("src"));
             document.getElementById("text").innerText = nextImg.getElementsByTagName("img")[0].getAttribute("alt");
         }
     }

 }