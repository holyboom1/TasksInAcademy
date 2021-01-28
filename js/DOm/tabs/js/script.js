'use strict';
window.onload = function(){
	let tabs = document.getElementsByClassName("tabs")[0];
	let li = tabs.getElementsByTagName("li"); 	
	let div = tabs.getElementsByClassName("tabs_info")[0].children; 	

	for(let i=0;i<li.length;i++){
		li[i].addEventListener("click",tabClick);
		
	}

	init(0);


	function tabClick(){
		this.className="current";
		for(var i=0; i<li.length;i++){
			if(li[i].className=="current") break;
		}
		this.className="";
		init(i);
	}

	function init(index) {
		for(let i=0;i<li.length;i++){
			li[i].className="";
			div[i].className="";
		}	
		li[index].className="active";
		div[index].className="active";
	}
	
}




	



