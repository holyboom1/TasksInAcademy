'use strict';
window.onload = function(){
	let dt = document.querySelectorAll(".accordion > dt");
	let dd = document.querySelectorAll(".accordion > dd");
	// document.querySelector(".accordion > dt");
	

	for(let i=0;i<dt.length;i++){
		dt[i].addEventListener("click",dtClick);
		
	}

	init(0);


	function dtClick(){
		let dt = document.querySelector(".accordion > dt.active");
		let dd = document.querySelector(".accordion > dd.active");
			dt.removeAttribute("class");
			dd.removeAttribute("class");
			this.className="active";
			//this.nextSibling.nextSibling.className="active";
			//previousElementSibling
			//nextElementSibling
		document.querySelector(".accordion > dt.active + dd").className="active"

			//this.nextElementSibling.className="active";
	}

	function init(index) {
		
		dt[index].className="active";
		dd[index].className="active";
	}
	
}




	



