'use strict';
let table = document.getElementsByClassName("table");
let td = table[0].getElementsByTagName("td");
	for(let i=0;i<td.length;i++){
		td[i].addEventListener("click",tdClick);
		
	}
let sum=0;


function tdClick(){
	
	if(this.className=="active") {
		this.className=""
		sum-=+this.innerHTML;
	}else {
		this.className="active"
		sum+=+this.innerHTML;
	}
	
	document.getElementById("rez").innerHTML=`Сумма = <b>${sum}</b>`
	
	
	
}




	



