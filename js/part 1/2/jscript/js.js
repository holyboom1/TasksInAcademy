'use strict';
var user_namber = +prompt("введите число от 10000 до 99999", 10000);
var aftrem="";
if (!isNaN(user_namber)&& user_namber >= 10000 && user_namber < 100000){
    var x;
    var y;
    var z;
    var r;
    var u;
    var i;


    if (user_namber >= 10000 && user_namber < 100000) {

        x = parseInt(user_namber / 10000);
        y = parseInt(((user_namber / 10000) - x) * 10);
        z = parseInt(((((user_namber / 10000) - x) * 10) - y) * 10);
        r = parseInt(((((((user_namber / 10000) - x) * 10) - y) * 10) - z) * 10);
        u = parseInt((((((((((user_namber / 10000) - x) * 10) - y) * 10) - z) * 10) - r) * 10) + 0.1); // плюсую 0,1 тк какогото хрена он при деении теряеет 0,0000007 и нужно округлять число чтобы вышло как должно быть
        i = x + y + z + r + u;                                                                             //хотя когда руками считаю все ок .. видимо какая-то особенность js или хз что еще
        console.log("Ссума чисел =" + x + "+" + y + "+" + z + "+" + r + "+" + u + "=" + i);
        console.log("Старое число " + user_namber + "\n" + "Новое число " + u + y + z + r + x);

    }

    else {
        console.log("не число")
    }


    var del = +prompt("ВВедите число 1-10", 5);
    if (!isNaN(del) && del > 0 && del < 10) {
        if (del != x) {
            aftrem += x;
        }
        if (del != y) {
            aftrem += y;
        }
        if (del != z) {
            aftrem += z;
        }
        if (del != r) {
            aftrem += r;
        }
        if (del != u) {
            aftrem += u;
        }
    }
    else {
        console.log("удалить нуполучится")
    }
    console.log("число после удаления =" + aftrem);
    var lokmaxcount = 0;
    var lokmax = "";
    if (x > y) {
        lokmaxcount++;
        lokmax += x + " ";
    }
    if (y > (x + z)) {
        lokmaxcount++;
        lokmax += y + " ";
    }
    if (z > (y + r)) {
        lokmaxcount++;
        lokmax += z + " ";
    }
    if (r > (z + u)) {
        lokmaxcount++;
        lokmax += r + " ";
    }
    if (u > r) {
        lokmaxcount++;
        lokmax += u + " ";
    }
    console.log("колличество локальных максимумов = " + lokmaxcount + "\n" + "локальными максимумами являются = " + lokmax);
}

else {
    console.log("число вне диапазона")
}



var LackyNamber= +prompt("введите число", 123456);
    if (!isNaN(LackyNamber)&& LackyNamber>99999 && LackyNamber<1000000){
        var n1;
        var n2;
        var n3;
        var n4;
        var n5;
        var n6;

        n1=parseInt(LackyNamber/100000);
        n2=parseInt(((LackyNamber/100000)-n1)*10);
        n3=parseInt(((((LackyNamber/100000) -n1) * 10) - n2) *10);
        n4=parseInt(((((((LackyNamber/100000) -n1) * 10) - n2) *10) - n3) * 10);
        n5=parseInt(((((((((LackyNamber/100000) -n1) * 10) - n2) *10) - n3) * 10) - n4 ) *10);
        n6=parseInt((((((((((((LackyNamber/100000) -n1) * 10) - n2) *10) - n3) * 10) - n4 ) *10) -n5 ) *10) +  0.1);
        console.log("\n" +  "ваше число => "+n1 +n2 +n3 +n4 +n5 +n6);

        if ((n1+n2+n3)==(n4+n5+n6)){
            console.log ( "это число счастливое");
        }
        else  {
            console.log ( "попробуй еще раз")
        }
    }
    else {
        console.log (
            "неверное число"
        )
    }

var thet="Четные чиcла => ";
var nehet="Нечетные чиcла => ";

    if (n1 % 2 == 0) {
        thet += n1 + " ";
    }
    else {
        nehet+= n1 + " ";
    }
    if (n2 % 2 == 0) {
        thet += n2 + " ";
    }
    else {
        nehet+= n2 + " ";
    }
    if (n3 % 2 == 0) {
        thet += n3 + " ";
    }
    else {
        nehet+= n3 + " ";
    }
    if (n4 % 2 == 0) {
        thet += n4 + " ";
    }
    else {
        nehet+= n4 + " ";
    }
    if (n5 % 2 == 0) {
        thet += n5 + " ";
    }
    else {
        nehet+= n5 + " ";
    }
    if (n6 % 2 == 0) {
        thet += n6 + " ";
    }
    else {
        nehet+= n6 + " ";
}
        console.log(thet + "\n" + nehet);


    var krat="";
    var namderX=100;
    var k=0
    do {
        if (namderX % 3 == 0 && namderX % 5 == 0 && namderX % 10 == 0) {
            krat+=namderX+" ";

            k++

        }
        namderX++
    }while (namderX <=10000)
console.log(krat );
    console.log("количество = " + k);


var strnamb="";
var minNamber=0;
var maxNamber=0;

    do {
        var userNamber1 = +prompt("введите числдо = ", 1);
        if (!isNaN(userNamber1))
        strnamb+= userNamber1 +" ";
        while (true) {
            if(userNamber1==0) break
            if (minNamber!=0 && maxNamber!=0) break

            minNamber = userNamber1;
            maxNamber = userNamber1;
        }
        if (userNamber1>maxNamber){
            maxNamber=userNamber1
        }

        if (userNamber1<minNamber){
            minNamber=userNamber1
        }
    }while (confirm("еще?"))
console.log("Ваши числа =>" + strnamb + "\n" + "Минимальное = " + minNamber + "\n" + "Максимальное = " + maxNamber);
