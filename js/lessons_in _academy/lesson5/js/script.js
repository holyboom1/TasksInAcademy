'use strict';

var x = +prompt("Введите число 1",16489);
var sum=0;
var str="Исходное число "+x+"\n";
var newNumber="";
if(!isNaN(+x) && x>=10000 && x<=99999) {
	//16489
	var ost = x%10; //9
		sum+=ost; //sum=sum+ost //9
		x=(x-ost)/10 //x=parseInt(x/10)
		newNumber+=ost;
	//1648
	console.log(ost)
	
	var ost1 = x%10; //8
		sum+=ost1; //sum=sum+ost //17
		x=(x-ost1)/10 //x=parseInt(x/10)
		newNumber+=ost1;
	//164
	
	var ost2 = x%10; //4
		sum+=ost2; //sum=sum+ost //21
		x=(x-ost2)/10 //x=parseInt(x/10)
		newNumber+=ost2;
	
	// 16
	
	var ost3 = x%10; //6
		sum+=ost3; //sum=sum+ost //27
		x=(x-ost3)/10 //x=parseInt(x/10)
		newNumber+=ost3+""+x;
		sum+=x;

	// 1
	str+= x+ "+" + ost3 + "+" + ost2+ "+" + ost1+ "+" + ost+ "=" + sum; 
	console.log(str)
	console.log(newNumber)
}
else {
	console.error("Ошибка")
}