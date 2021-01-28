'use strict'

var x=+prompt("введите число", 1);
var str = "";
var k=0;
var kk=0;
    if (!isNaN(x)) {
        if (x==0){
            console.log ("вы ввели ноль");
        }
        if (x<0){console.log("число меньше нуля")}
        if (x>0) {
            kk = x;
            do {
                var kol = 0;
                do {
                    str += "*"
                    kol++
                } while (kol < kk)
                str += "\n";
                k++
                kk--
            } while (k < x)
        }
        }
    else {
        console.error("не число")
    }
console.log(str);
