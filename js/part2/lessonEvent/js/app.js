window.onload = function(){
    document.addEventListener("mousemove",move);
    document.addEventListener("contextmenu",menu);
    document.addEventListener("keydown",key);
    document.addEventListener("click",addCircle);

    function move(e) {
        console.log(e.clientX,e.clientY)
    }

    function menu(e) {
        e.preventDefault();
        console.log(22222)
    }

    function key(e) {
        //e.preventDefault();
       if (e.which===32) clearInterval(runCircle);
    }



    let a = document.querySelectorAll("a");
    for (let i=0;i<a.length;i++){
        a[i].addEventListener("click",removeClick);
    }


    function removeClick(e) {
        e.preventDefault();

        location.replace("http://onliner.by")
    }

    function randomInteger(min, max) {
        // получить случайное число от (min-0.5) до (max+0.5)
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }
    
    function addCircle(e) {

        let x = randomInteger(0,document.body.offsetWidth)
        let y = randomInteger(0,document.body.offsetHeight)

        //console.log(x,y)

        //let x = e.clientX;
        //let y = e.clientY;
        let d =  randomInteger(35,60);
        let r = randomInteger(0,255)
        let g = randomInteger(0,255)
        let b = randomInteger(0,255)

        let div = document.createElement("div");
            div.className="circle";

            div.style.top=`${y}px`;
            div.style.left=`${x}px`;
            div.style.width=`${d}px`;
            div.style.height=`${d}px`;
            div.style.background=`rgb(${r},${g},${b})`;

            document.body.append(div);

            setTimeout(function () {
                div.remove()
            },3000)


    }

    let runCircle = setInterval(addCircle,10);


}