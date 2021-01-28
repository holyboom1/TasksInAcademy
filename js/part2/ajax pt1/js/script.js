window.onload = function () {
	function ce(name="div",text,event,fn){
		let x = document.createElement(name);
		if(text!=undefined){
			x.innerHTML=text;
		}

		if(event!=undefined){
			x.addEventListener(event,fn);
		}

		return x;
	}
	function init() {
		let select = ce("select", "", "change", changeSelect);
		select.name = "valuta";
		let option1 = ce("option", "$")
		let option2 = ce("option", "eur")
		let option3 = ce("option", "bun")
		option3.setAttribute("selected", "");
		select.append(option1);
		select.append(option2);
		select.append(option3);
		document.body.append(select);

	}
	init();
	getvalue("bun");
	var usd,eur,bun;
	rendercours()

	function getvalue(value){

		if (value=="$"){
			render(usd, value);
		}
		if (value=="eur"){
			render(eur, value)
		}
		if (value=="bun") {
			render(1, value)
		}

	}
	function changeSelect() {
			document.getElementById("app").remove()
			getvalue(this.value);
	}

	function rendercours() {

		let usd1 = new XMLHttpRequest();
		usd1.open("GET", `https://www.nbrb.by/api/exrates/rates/145`, true);
		usd1.send();
		usd1.responseType = "json";
		usd1.onload = function () {
			usd = usd1.response.Cur_OfficialRate;
			}
		let eur1 = new XMLHttpRequest();
		eur1.open("GET", `https://www.nbrb.by/api/exrates/rates/292`, true);
		eur1.send();
		eur1.responseType = "json";
		eur1.onload = function () {
			eur = eur1.response.Cur_OfficialRate;

		}
		bun = 1;
	}
	function render(x, value) {
		let items = new XMLHttpRequest();
		items.open("GET", "/data/items.json", true);
		items.send();
		items.onload = function () {
			let arr = JSON.parse(items.response)
			arr.forEach(item => {
				let main = document.createElement("div")
				main.id = "app"
				let div = document.createElement("div");
				let title = document.createElement("p");
				let preview = document.createElement("p");
				let price = document.createElement("p");
				title.innerHTML = item.title;
				preview.innerHTML = item.preview;
				let priceCalc = (+item.price) / (+x);
				console.log(priceCalc);
				price.innerHTML = `цена: ${priceCalc}${value}`;
				price.className = "price"
				div.className = "item";
				div.append(title);
				div.append(preview);
				div.append(price);
				document.body.append(main);
				document.querySelector("#app").append(div);

			})
		}
	}
}