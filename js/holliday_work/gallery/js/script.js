'use strict';
window.onload = function() {
    var imagesCount=111; // количество изображений в нашем архиве
    var z=imagesCount/9;
    var pageesCount=parseInt(z);
    if (parseFloat(z)>0){
        pageesCount+=1
    }

    let img = document.getElementsByClassName("img");
    document.getElementById("nextPage").addEventListener("click",nextPage);
    document.getElementById("prevPage").addEventListener("click", prevPage);
    document.getElementById("close_button").addEventListener("click", closeFn);
    document.getElementById("nextImg").addEventListener("click", nextImg)
    document.getElementById("prevImg").addEventListener("click", prevImg);

    for (let i=0; i<img.length; i++){
        img[i].addEventListener("click",openImg);
        img[i].setAttribute("src",addSrcImg(i))
    }

    function addSrcImg(i) {
        var src=""
        if (i>0) {
            src += "images/img%20(" + (+(i) + 1) + ").jpg"
        }
        else {
            src="images/img%20(1).jpg"
        }
            return src;
    }

    function openImg() {
        if (this.getAttribute("src")=="img/lastimg.jpg"){}
        else {
            document.getElementById("show_select_item").setAttribute("src", this.getAttribute("src"))
            document.getElementById("selectElem").classList.toggle("show_item")
            this.classList.add("active")
        }
    }

    function nextPage() {
        let page = (+document.getElementById("page").innerText);
        if (pageesCount==page){
            console.log("last page");
        }
        else {
            for (let i = 0; i < img.length; i++) {
                img[i].setAttribute("src", addSrcImgNext(i))
            }

            function addSrcImgNext(i) {
                let x = (page * 9) + 1;
                if (x + i < imagesCount + 1) {
                    var src = "";
                    src += "images/img%20(" + (i + x) + ").jpg";
                    return src;
                } else {
                    var src = "";
                    src += "img/lastimg.jpg";
                    return src;
                }
            }
            document.getElementById("page").innerText=page+1
        }
    }

    function prevPage() {
        var pageNamber=(+document.getElementById("page").innerText)
        if (pageNamber==1){
                console.log("FIRST PAGE")
        }
        if(pageNamber==2){
            for (let i = 0; i < img.length; i++) {
                img[i].setAttribute("src", addSrcImgPrev(i))
            }
            function addSrcImgPrev(i) {
                var src = "";
                src += "images/img%20(" + (i + 1) + ").jpg";
                return src;
            }
            document.getElementById("page").innerText = pageNamber-1
        }
        if (pageNamber>1){
            for (let i = 0; i < img.length; i++) {
                img[i].setAttribute("src", addSrcImgPrev1(i))
            }
            function addSrcImgPrev1(i) {
                let x = ((pageNamber-2) * 9) + 1;
                var src = "";
                src += "images/img%20(" + (i + x) + ").jpg";
                return src;

            }
            document.getElementById("page").innerText = pageNamber -1
        }
    }

     function closeFn() {
         document.getElementById("selectElem").classList.toggle("show_item")
     }

     function nextImg() {
            var x=document.getElementById("show_select_item").getAttribute("src");
            var z=x.split("images/img%20(");
            var s=z+"";
            z=s.split(").jpg");
            s=z+"";
            z=s.split(",")
            if (z[1]<imagesCount) {
                var src = "images/img%20(" + ((+z[1]) + 1) + ").jpg"
                document.getElementById("show_select_item").setAttribute("src", src)
                if ((((+z[1])+1)%9)==1){
                    nextPage()
                }
            }
            else {
                console.log("end")
            }

     }

     function prevImg() {
         var x=document.getElementById("show_select_item").getAttribute("src");
         var z=x.split("images/img%20(");
         var s=z+"";
         z=s.split(").jpg");
         s=z+"";
         z=s.split(",")
         if (z[1]!=1) {
             var src = "images/img%20(" + ((+z[1]) - 1) + ").jpg"
             document.getElementById("show_select_item").setAttribute("src", src)
             if ((((+z[1])-1)%9)==0){
                 prevPage()
             }
         }
         else {
             console.log("start")
         }
     }

}