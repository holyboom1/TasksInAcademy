window.onload = function() {

    function randomInteger(min, max) {
        // получить случайное число от (min-0.5) до (max+0.5)
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

    document.addEventListener("keydown", key);
    var left = 0;
    var top = 0;
    var maxWidth = document.body.offsetWidth;
    var maxHeigth = document.body.offsetHeight;

    function key(e) {
        console.log(e.which)
        if (e.which === 39 &&  left+50 < maxWidth) {
            let step = 0.1;
            let x = setInterval(function () {
                if (step < 50) {
                    step += 1
                    box.style.left = `${step + left}px`;
                    box.style.background=`rgb(${randomInteger(0,255)},${randomInteger(0,255)},${randomInteger(0,255)})`;
                } else {
                    clearInterval(x);
                    left += 50
                }
            }, 1)
        }
        if (e.which === 37 && left > 0) {
            let step = 0.1;
            let x = setInterval(function () {
                if (step < 50) {
                    step += 1
                    box.style.left = `${left - step}px`;
                    box.style.background=`rgb(${randomInteger(0,255)},${randomInteger(0,255)},${randomInteger(0,255)})`;

                } else {
                    clearInterval(x);
                    left -= 50

                } сщву
            }, 1)
        }
        if (e.which === 40 && top+50 < maxHeigth) { // down
            let step = 0.1;
            let x = setInterval(function () {
                if (step < 50) {
                    step += 1
                    box.style.top = `${top + step}px`;
                    box.style.background=`rgb(${randomInteger(0,255)},${randomInteger(0,255)},${randomInteger(0,255)})`;

                } else {
                    clearInterval(x);
                    top += 50
                }
            }, 1)
        }
        if (e.which === 38 && top > 0) { // up
            let step = 0.1;
            let x = setInterval(function () {
                if (step < 50) {
                    step += 1
                    box.style.top = `${top - step}px`;
                    box.style.background=`rgb(${randomInteger(0,255)},${randomInteger(0,255)},${randomInteger(0,255)})`;

                } else {
                    clearInterval(x);
                    top -= 50
                }
            }, 1)
        }
    }
}
    // function addElem() {
    //     let elem = document.createElement("p");
    //     elem.innerHTML="asdasda222222222";
    //     document.body.append(elem);
    //
    //
    // document.body.onclick = function (e) {
    //     if(e.target.tagName=="P") {
    //         runSomeFn(222,asda,23123,)
    //     }
    // }
    //
    // let z = document.querySelectorAll("p");
    // document.querySelectorAll("p").forEach((item,i)=>{
    //     item.addEventListener("click",()=>{
    //         console.log(22222);
    //     })
    // })