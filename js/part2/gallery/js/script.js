'use strict';
window.onload = function(){
	let gallery = document.getElementsByClassName("gallery")[0];
	let li = gallery.getElementsByTagName("li"); 	
	let images = gallery.children[1].getElementsByTagName("img"); 	
	let img = gallery.getElementsByClassName("main")[0].children[0]; 	

	for(let i=0;i<images.length;i++){
		images[i].addEventListener("click",itemClick);
		
	}

	init(0);


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
	
}




	



