'use strict';
let table = document.getElementsByClassName("table");
let td = table[0].getElementsByTagName("td");
	for(let i=0;i<td.length;i++){
		td[i].addEventListener("click",tdClick);
		
	}



function tdClick(){
	/*
	if(this.style.backgroundColor.length==0){
		this.style.backgroundColor="#ccc";
	}
	else {
		this.style.backgroundColor="";
	}*/
	
	let x = +this.innerHTML+1;
	this.innerHTML=x;
	this.style.fontSize=`${x}px`
	
	for(let i=0;i<td.length;i++){
		td[i].style.backgroundColor="";
		
	}
	
	this.style.backgroundColor="#ccc";
	
}




	



