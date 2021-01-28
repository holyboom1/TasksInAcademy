window.onload = function () {
	
	const xhr=(params)=> new Promise((resolve, reject)=>{
		//code
		let items = new XMLHttpRequest();
		items.open(params.method,params.url,true);
		items.responseType=params.response!=undefined ? params.response : "json"
		items.send();
		items.onload= function(){
			resolve(items.response);
		}	
		
		items.onerror = function(){
			reject(items.response);	
		}
		
	});
	
	
	let x = xhr({
		method:"GET",
		url:"/data/items.json"
	})
		.then(data=>{
			data.forEach(item=>{
				item.price = item.price+20
			})
			
			return data;
		})
		.then(info=>{
			console.log(info)
			return xhr({
				method:"GET",
				url:"https://www.nbrb.by/api/exrates/currencies"
			})
			/*
			xhr({
				method:"GET",
				url:"https://www.nbrb.by/api/exrates/currencies"
			}).then().catch()*/
		})
		.then(bnrb=>{
			console.log(bnrb)
		})
		.catch(error=>console.log(error))
	
	console.log("hello")
	console.log(x)
	
	
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