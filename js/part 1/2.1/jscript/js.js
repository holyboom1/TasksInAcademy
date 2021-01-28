'use strict'

var posled="";
var poloz="";
var otriz="";
var summpol=0;
var summotr=0;
var kp=0;
var ko=0;

    do {
        var userNamber1 = +prompt("введите числдо = ", 1);
        if (!isNaN(userNamber1) && userNamber1>0){
                poloz+= userNamber1 + " ";
                summpol+=userNamber1;
                kp++
                posled+=userNamber1 + " ";
            }

        if (!isNaN(userNamber1) && userNamber1 < 0) {
                otriz+= userNamber1 + " ";
                summotr+=userNamber1;
                ko++
                posled+=userNamber1 + " ";
            }
        if (userNamber1==0) {
            posled+=userNamber1+ " ";
        }

    }while (confirm("еще?"))
console.log("Ваши числа =>" + posled + "\n" +
    "отрицательные = " + otriz + "количество = "+ ko + " сумма= " + summotr + "\n" +
    "положительные = " + poloz + "количество = "+ kp + " сумма= " + summpol);
