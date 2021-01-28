window.onload = function () {
    function randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

    var n = randomInteger(20,26);
    var array = [];
    for(let i=0;i<n; i++){
        array.push(randomInteger(1,99));

    }
    let temp="";
    let temp1="";
    k=0;
    k1=0;
    let flag=true


    for (let i=0; i<array.length;i++){
       if (array[i+1]>array[i]){

           if(flag){
               temp+=array[i]+ " ";
               flag=false
           }
           temp+=array[i+1] + " ";
           k++
        }

       else if (k>k1){
           temp1=""
           temp1=temp;

           k1=k;
           temp=""
           k=0;
           flag=true
       }
       else {
           k=0
           temp=""
           flag=true
       }

       }
    let y=document.createElement("div");
    y.innerHTML=`наш массив ${array} \n максимальная последовательность(первая найденная!!!) ${temp1}`;
    document.body.append(y)

    let z=document.createElement("div");
    z.innerHTML=`задание 2`;
    document.body.append(z)

    let x=prompt("введите слово","sweqwe")
    if (x.length==0){
        document.body.innerHTML+=`вы не ввели ничего !!!!`
    }
    else {
        arr = x.split("");
        for (let i = 0; i < arr.length; i++) {
            for (let k = 0; k < i; k++) {
                document.body.innerHTML += "&nbsp; &nbsp;"
            }
            document.body.innerHTML += arr[i] + "</br>"

        }
    }
}