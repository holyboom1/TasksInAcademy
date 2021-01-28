'use strict';

var x = +prompt("Введите число 1",10);


if(!isNaN(+x)) {
		var nStr;
		var nalog_otd;
		var zp;
	if(x>=0 && x<=100) {
		nStr = 0.1;
		nalog_otd = x*0.001
		zp =  x - nalog_otd;
	}
	else if(x>=101 && x<=300) {
		nStr = 2;
		nalog_otd = x*0.02
		zp =  x - nalog_otd;
	}
	
	else if(x>=301 && x<=600) {
		nStr = 4;
		nalog_otd = x*0.04
		zp =  x - nalog_otd;
	}
	
	
	console.log("Грязными"+x + "\n"+
				"Налог" + nStr + "%\n"+
				"Вычит" + nalog_otd+ "\n"+
				"Чистыми"+zp)
}
else {
	console.error("Ошибка")
}