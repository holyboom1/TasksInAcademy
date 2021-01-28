'use strict';
window.onload = function(){
	let tab = document.getElementsByClassName("tab");


 	for(let i=0;i<tab.length;i++){
		tab[i].addEventListener("click",tabClick);
	}

// 	init(0);

 	function tabClick() {
		if (this.className == "tab" ) {
			init();
			this.children[0].className = "active animate__bounceIn ";
			this.className = "tab block_active "
		}
		else {
			this.className="tab";
			this.children[0].className="";
		}
}

	function init() {
		for(let i=0;i<tab.length;i++){
			tab[i].className="tab";
			tab[i].children[0].className="";
		}
	}

 }
