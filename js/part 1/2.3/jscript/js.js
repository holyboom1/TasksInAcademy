'use strict'

var x=100;
var str = "";

    do {
        var y=x
        var ost=(y%10);
        y=(y-ost)/10;
        var ost2=(y%10);
        y=(y-ost2)/10;
        var ost3=(y%10)
        if (ost+ost2+ost3 == 15)
        {
            str+=x+ " ";
        }
        x++
    }while (x<1000)
console.log(str);
