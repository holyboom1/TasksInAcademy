'use strict';
window.onload = function (){
    let arr = [2,6,9,7,8,9,5,1,2,3];

    function addElem(){
        let x = +prompt("Введите число",5);
        if(!isNaN(x)) {
            arr.push(x);
            console.log(`Добавлено значение: ${x}`);
        }

        else {
            console.error(`${x} :( `);
        }
    }

    function showElems(){
        console.log(`Массив: ${arr.join(" ")}`);
    }

    function removeElems(){
        var x=+prompt("введите число для удаления ", 1 )
        if (!isNaN(x)){
            for (var i=0; i<arr.length; i++){
                if (x==arr[i])
                {
                    arr.splice(i,1)
                }
            }
        }
        else {console.error(`NaN =(`)}
        console.log(`Массив: ${arr.join(" ")}`);
        console.log(`удалили значени ${x}`);
    }
    function minElems(){
        var min=+Infinity

        for (var i=0; i<arr.length; i++) {
            if (arr[i]<min) min=arr[i]
        }
        console.log(`Массив: ${arr.join(" ")}`);
        console.log(`минимальное  ${min}`);
    }
    function maxElems(){
        var max=-Infinity

        for (var i=0; i<arr.length; i++) {
            if (arr[i]>max) max=arr[i]
        }
        console.log(`Массив: ${arr.join(" ")}`);
        console.log(`максимальное  ${max}`);
    }
    function sumElems(){
        var sum=0
        for (var i=0; i<arr.length; i++) {
            sum+=arr[i]
        }
        console.log(`Массив: ${arr.join(" ")}`);
        console.log(`сумма ${sum}`);
    }
    function sort_upElems(){
        console.log(`Массив до : ${arr.join(" ")}`);
        for(let i=0;i<arr.length;i++){
            for(let j=i;j<arr.length;j++){
                if(arr[i]<arr[j]){
                    let temp = arr[i];
                    arr[i]=arr[j]
                    arr[j]=temp;
                }
            }
        }
        console.log(`Массив после: ${arr.join(" ")}`);

    }
    function sort_downElems(){
        console.log(`Массив до: ${arr.join(" ")}`);
        for(let i=0;i<arr.length;i++){
            for(let j=i;j<arr.length;j++){
                if(arr[i]>arr[j]){
                    let temp = arr[i];
                    arr[i]=arr[j]
                    arr[j]=temp;
                }
            }
        }
        console.log(`Массив после : ${arr.join(" ")}`);

    }
    function uniqueElems(){
        var unique = [];
        var swap = 0;

        for (var i = 0; i < arr.length; i++) {
            for (var j = 1; j < arr.length - 1; j++) {
                if (arr[i] !== arr[j]) {
                }
                else {
                    swap = swap + 1;
                }
            }
            if (swap > 0) {
                swap = 0;
            } else {
                unique.push(arr[i]);
            }
        }
        console.log(`Массив : ${arr.join(" ")}`);
        console.log(`уникальное  ${unique.join(" ")}`);

    }
    function clearElems(){
        arr.length=0
        console.log(`массив пуст`);

    }

    function maxlocElems(){
        var max=-Infinity;
        var arraymax=[];
        for (let i=0; i<arr.length; i++){
            if (arr[i-1]+arr[i]+arr[i+1]>max){
                max=arr[i-1]+arr[i]+arr[i+1];
                arraymax.length=0;

                arraymax=arr.slice(i-1,i+2);
            }

        }
        console.log("наш массив " + arr.join(" "));
        console.log("самая большая комбинация " + arraymax.join(" "));
        console.log("сумма максимума " + max);
    }

    function maxseriesElems(){
        var ;
        var ;
        for (let i=0; i<arr.length; i++){
            if (arr[i]<arr[i+1]){

            }

        }
        console.log("наш массив " + arr.join(" "));
        console.log("самая большая комбинация " + arraymax.join(" "));
        console.log("сумма максимума " + max);
    }


    add.onclick = addElem;
    show.onclick = showElems;
    remove.onclick = removeElems;
    min.onclick= minElems;
    max.onclick= maxElems;
    sum.onclick= sumElems;
    sort_up.onclick= sort_upElems;
    sort_down.onclick= sort_downElems;
    unique.onclick= uniqueElems;
    clear.onclick= clearElems;
    maxloc.onclick= maxlocElems;
    maxseries.onclick= maxseriesElems;
 // максимальная серя
    // конверт 0-1
    // 0-1- to array

}