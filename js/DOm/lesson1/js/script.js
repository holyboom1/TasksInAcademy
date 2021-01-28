'use strict';
let table = document.getElementsByClassName("table");
let td = table[0].getElementsByTagName("td");
	for(let i=0;i<td.length;i++){
		td[i].addEventListener("click",tdClick);
		td[i].addEventListener("contextmenu",tdContextMenu);
		td[i].innerText= randomInteger(0,9);
		td[i].style.backgroundColor = `rgb(${randomInteger(0,255)},${randomInteger(0,255)},${randomInteger(0,255)})`;
	}
let table1 = document.getElementsByClassName("sum");
let td1 = table1[0].getElementsByTagName("td");

function randomInteger(min, max) {
	let rand = min - 0.5 + Math.random() * (max - min + 1);
	return Math.round(rand);
}
	var sum=0
function tdClick() {

	if (this.style.backgroundColor != "rgb(204, 204, 204)") {
		this.style.backgroundColor = "#ccc";
		sum+=+this.innerText
	}
	td1[1].innerText=sum
}
function tdContextMenu() {

	if (this.style.backgroundColor == "rgb(204, 204, 204)") {
		this.style.backgroundColor = "";
		sum-=+this.innerText
	}
	td1[1].innerText=sum
}



//
	



