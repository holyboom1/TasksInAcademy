window.onload = function () {
		const wheatheGet=()=> new Promise((resolve, reject)=> {
			let wheather = new XMLHttpRequest();
			wheather.open("GET", "http://api.openweathermap.org/data/2.5/forecast?q=minsk&units=metric&lang=ru&appid=9c1b998af157fe0bf1db53040c70da0b", true);
			wheather.responseType = "json";
			wheather.send();
			wheather.onload = () => {
				console.log(wheather.response)
				resolve(wheather.response)

			};
			wheather.onerror = () => {
				reject(wheather.response)

			};
		});
		var firstDate="";
		var acc=0;
		wheatheGet()
			.then(wheather=>{
				wheather.list.forEach(item=> {
					if (firstDate===""){
						firstDate=item.dt_txt.split(" ")[0]
						let dt=ce("dt", `дата : ${item.dt_txt}`, "click", showWheather);
						let accord=ce("dd");
						accord.id="acc0"
						dt.append(accord)
						document.getElementById("accordion").append(dt);
					}

					if (firstDate===item.dt_txt.split(" ")[0]){
						let date_txt = ce("div", `дата : ${item.dt_txt}`);
						let description = ce("div", `Ожидаемые осадки : ${item.weather[0].description}`);
						let icon=ce("div", `<img src="http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png">`)
						let temp_min = ce("div", `Минимальная температура :${item.main.temp_min} C\t°`);
						let temp_feels = ce("div", `Ощущается как : ${item.main.feels_like} C\t°`);
						let temp_max = ce("div", `Максимальная температура : ${item.main.temp_max} C\t°`);
						let temp = ce("div", `Средняя Температура : ${item.main.temp} C\t°`);
						let wheather_toTime = ce("div");
						wheather_toTime.className="blockOfWheather"
						wheather_toTime.append(date_txt);
						wheather_toTime.append(icon);
						wheather_toTime.append(description);
						wheather_toTime.append(temp_min);
						wheather_toTime.append(temp_feels);
						wheather_toTime.append(temp_max);
						wheather_toTime.append(temp);
						document.getElementById(`acc${acc}`).append(wheather_toTime)
					}
					else {
						firstDate=item.dt_txt.split(" ")[0];
						acc++
						let dt=ce("dt", `дата : ${item.dt_txt}` , "click", showWheather);
						let accord=ce("dd");
						accord.id=`acc${acc}`;
						dt.append(accord)
						document.getElementById("accordion").append(dt);

						let date_txt = ce("div", `дата : ${item.dt_txt}`);
						let description = ce("div", `Ожидаемые осадки : ${item.weather[0].description}`);
						let icon=ce("div", `<img src="http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png">`)
						let temp_min = ce("div", `Минимальная температура :${item.main.temp_min} C\t°`);
						let temp_feels = ce("div", `Ощущается как : ${item.main.feels_like} C\t°`);
						let temp_max = ce("div", `Максимальная температура : ${item.main.temp_max} C\t°`);
						let temp = ce("div", `Средняя Температура : ${item.main.temp} C\t°`);
						let wheather_toTime = ce("dd");
						wheather_toTime.className="blockOfWheather"
						wheather_toTime.append(date_txt);
						wheather_toTime.append(icon);
						wheather_toTime.append(description);
						wheather_toTime.append(temp_min);
						wheather_toTime.append(temp_feels);
						wheather_toTime.append(temp_max);
						wheather_toTime.append(temp);
						document.getElementById(`acc${acc}`).append(wheather_toTime)
					}



				})
			})
			.catch(wheather=>console.log(wheather));


		function init() {
			let main=ce("div");
			main.id="main";
			let dl=ce("dl");
			dl.id="accordion"
			main.append(dl)
			document.body.append(main);

		}
		init();

		function showWheather() {
			this.lastChild.classList.toggle("active");
		}

	function ce(name = "div", text, event, fn) {
		let x = document.createElement(name);
		if (text != undefined) {
			x.innerHTML = text;
		}

		if (event != undefined) {
			x.addEventListener(event, fn);
		}

		return x;
	}
	// const xhr=(params)=> new Promise((resolve, reject)=>{
	// 	//code
	// 	let items = new XMLHttpRequest();
	// 	items.open(params.method,params.url,true);
	// 	items.responseType=params.response!=undefined ? params.response : "json"
	// 	items.send();
	// 	items.onload= function(){
	// 		resolve(items.response);
	// 	}
	//
	// 	items.onerror = function(){
	// 		reject(items.response);
	// 	}
	//
	// });
	//
	//
	// let x = xhr({
	// 	method:"GET",
	// 	url:"/data/items.json"
	// })
	// 	.then(data=>{
	// 		data.forEach(item=>{
	// 			item.price = item.price+20
	// 		})
	//
	// 		return data;
	// 	})
	// 	.then(info=>{
	// 		console.log(info)
	// 		return xhr({
	// 			method:"GET",
	// 			url:"https://www.nbrb.by/api/exrates/currencies"
	// 		})
	// 		/*
	// 		xhr({
	// 			method:"GET",
	// 			url:"https://www.nbrb.by/api/exrates/currencies"
	// 		}).then().catch()*/
	// 	})
	// 	.then(bnrb=>{
	// 		console.log(bnrb)
	// 	})
	// 	.catch(error=>console.log(error))
	//
	// console.log("hello")
	// console.log(x)
	//
	//
	/*
	let items = new XMLHttpRequest();
		items.open("GET","/data/items.json",true);
		items.send();
		items.onload= function(){
			let arr = JSON.parse(items.response)
			arr.forEach(item=>{
				let div = document.createElement("div");
				let title = document.createElement("p");
				let price = document.createElement("p");
					title.innerHTML = item.title;
					price.innerHTML = item.price;
					
					div.className="item";
					div.append(title);
					div.append(price);
					
					document.querySelector("#app").append(div);
				
			})
			
			let currency =  new XMLHttpRequest();
				currency.open("GET","https://www.nbrb.by/api/exrates/currencies", true);
				currency.send();
				currency.responseType="json";
				currency.onload = function(){
					//this => XMLHttpRequest Object
					// currency.response => this.response
					currency.response.forEach(item=>{
						let div = document.createElement("div");
							div.className="item-cur";
							div.innerHTML=`${item.Cur_Code} -- ${item.Cur_Name}`
							
							document.querySelector("#app").append(div);
						
					})
				}
		}*/
}