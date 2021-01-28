window.onload = function () {
	
	function clickFn(){
		console.log("clickFn")
	}
	
	class DOM {
		constructor(app){
			this.app = app;
		}
		
		
		render (elem) {
			document.querySelector(this.app).append(elem);
		}
		
		static ce(obj){
			let x = document.createElement(obj.name);
				x.innerHTML = obj.text;
				if("event" in obj) {
					x.addEventListener(obj.event,obj.fn);
				}
				
				return x;
		}
		
	}
	
	
	class User extends DOM {
		constructor(obj){
			super(obj.render)
			this.name = obj.name
			this.age = obj.age
			this.zp = obj.zp
			
		}	

		getInfo(){
			return `${this.name} \n ${this.age} \n ${this.zp}`
		}
		
		set info(obj){
			this.name=obj.name;
			this.age=obj.age;
			this.zp=obj.zp;
		}
	}
	
	
	
	
	let user = new User({
		name:"Test",
		age: 200,
		zp: 1000,
		render : "#app"
	});
		
	user.render(DOM.ce({
		name:"div",
		text : user.getInfo(),
		event: "click",
		fn : clickFn
	}))
	
	user.info={
		name:"22222",
		age:1111111,
		zp:0,
	}
	
	user.render(DOM.ce({
		name:"div",
		text : user.getInfo(),
		event: "click",
		fn : clickFn
	}))
	

	
}