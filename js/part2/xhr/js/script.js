window.onload = function () {
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
		}
}