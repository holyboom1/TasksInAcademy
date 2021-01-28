window.onload = function () {

    let countFiles=0;
    document.querySelector(`form[name="addFiles"]`).addEventListener("submit",addFile);

    function ce(name="div",text,event,fn) {
        let x = document.createElement(name);
        if (text != undefined) {
            x.innerHTML = text;

        }return x;
    }

    function addFile(e) {
        e.preventDefault();
        let parent= ce("div");
        let delFile =  ce("img");
        delFile.addEventListener("click", delFiles)
        delFile.setAttribute("src","img/close.png");
        delFile.setAttribute("user-data",`File#${countFiles}`);
        let addElem = ce("input");
        addElem.type="file"
        addElem.name=`File#${countFiles}`;
        addElem.addEventListener("change",changeAddFile);
        parent.append(delFile);
        parent.append(addElem);
        this.parentElement.append(parent);
        let li=ce("li");
        li.setAttribute("user-data",`File#${countFiles}`);
        let delli =  ce("img");
        delli.addEventListener("click", delFiles)
        delli.setAttribute("src","img/close.png");
        delli.setAttribute("user-data",`File#${countFiles}`);
        li.append(delli);
        document.querySelector("ul").append(li);
        countFiles++

    }

    function delFiles() {
        if (showModal()){
       let numberOf = this.getAttribute("user-data").split(`File#`)[1]
       let li = document.querySelectorAll("li");
       let file= document.querySelectorAll(`div > input`)
        for (let i=0; i<file.length;i++) {
            if (numberOf == file[i].getAttribute("name").split(`File#`)[1]) {
                file[i].parentElement.remove();
            }
        }

       for (let i=0; i<li.length;i++){
           if(numberOf==li[i].getAttribute("user-data").split(`File#`)[1]){
               li[i].remove();
           }
       }
        this.parentElement.remove();
    }}

    function changeAddFile() {
        let numberOfFile = this.getAttribute("name").split(`File#`)[1]
        let size = (this.files[0].size) / 1024
        let li = document.querySelectorAll("li");
        for (let i = 0; i < li.length; i++) {
            if (numberOfFile == li[i].getAttribute("user-data").split(`File#`)[1]) {
                let delFile = ce("img");
                delFile.addEventListener("click", delFiles)
                delFile.setAttribute("src", "img/close.png");
                delFile.setAttribute("user-data", `File#${numberOfFile}`);
                li[i].innerText = `Имя "${this.files[0].name}" , Размер ${size.toFixed(2)} Kb`;
                li[i].prepend(delFile);
            }

        }

        console.log(this, numberOfFile, size)
        console.log(this.files)
    }


}