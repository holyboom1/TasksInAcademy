'use strict';
let button = document.getElementsByClassName("button");
	for(let i=0;i<button.length;i++){
		button[i].addEventListener("click",divsClick);
		}

function divsClick() {
	for(let i=0;i<button.length;i++){
		button[i].className="button"
	}
		this.className="button select"

	}


let text = document.getElementsByClassName("text");
for(let i=0;i<text.length;i++){
	text[i].addEventListener("click",textActive);
}


console.log(button)
function textActive() {

	if(this.className=="text active") {
		this.className="text"

	}else {
		this.className="text active"

	}

}



//
	



