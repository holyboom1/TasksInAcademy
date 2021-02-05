window.onload = function () {

	function clickFn (){
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



	class Ts{
		constructor(size,color,weight,maxSpeed,nowSpeed) {
			this.size = size;
			this.color = color;
			this.weight = weight;
			this.maxSpeed = maxSpeed;
			this.nowSpeed = nowSpeed;
		}
		stop(){
			this.nowSpeed = 0
			console.log(this.nowSpeed)
		}
		drive(){
			this.nowSpeed = 30
			console.log(this.nowSpeed)
		}
		speedUp(speedUpTo){
			if (this.nowSpeed<this.maxSpeed){
			this.nowSpeed=this.nowSpeed+speedUpTo}
			console.log(this.nowSpeed)
		}
		speedDown(speedDownTo){
			if(this.nowSpeed>0 && this.nowSpeed!==0){
			this.nowSpeed=this.nowSpeed+speedDownTo}
			console.log(this.nowSpeed)
		}
	}

	class Car extends Ts{
		constructor(wheels,volumeEngine,size,color,weight,maxSpeed,nowSpeed) {
			super(size,color,weight,maxSpeed,nowSpeed);
			this.wheels = wheels;
			this.volumeEngine= volumeEngine;
		}
		colorChange(color){
			this.color=color;
	}
		speedNow(){
			console.log(this.nowSpeed)
	}
	}

let x=new Car(4,1,2,"red",100,200,0)
	console.log(x)
	x.drive();
	console.log(x)
	x.speedUp(60)
	console.log(x)
	x.speedNow();
	x.stop();
	console.log(x)

	class Plane extends Car{
		constructor(namberOfPassagirs, wheels,volumeEngine,size,color,weight,maxSpeed,nowSpeed) {
			super(wheels,volumeEngine,size,color,weight,maxSpeed,nowSpeed);
			this.namberOfPassagirs=namberOfPassagirs;
		}
		toFly(){
			setInterval(()=>{
				if(this.nowSpeed<this.maxSpeed){this.speedUp(5)}
				if (this.nowSpeed>=this.maxSpeed){clearInterval(timerId)}
				}, 500);
			this.speedNow();
		}
		toDown(){
			setInterval(()=>{
				if(this.nowSpeed!==0){this.speedDown(5)}
				if (this.nowSpeed===0){clearInterval()}
			}, 500);
			this.speedNow();
		}

	}
//{wheels:4,ffff:6766,yyy:5}
	let y=new Plane(4, 3,4,4, "red", 4, 600,0);
	y.toFly();
	// создали класс TC базовый класс
	/*
	* props
	*   размер
	*   цвет
	*   масса
	*   max скорость
	*   now скорость 30
	*
	*method
	*   stop отст движения
	*   drive движение
	*   speedUp ускорение
	*   speedDown торможение
	* */
	// Car -> TC наследование
	/*
	*   props
	*   Количество колес
	*   Объем двигателя
	*
	*   method
	*     colorChange  менять цвет авто
	*     speedNow  Вывод скорости
	* */

	// car.speedUp(60) // car -> prop. now->110
	// car.speedNow() // car -> prop. now->110
	// car.stop() // car -> prop. now->0

	// Plane ->CAR наследование

	/*
	*   props
	*   Количество колес
	*   Объем двигателя
	*   количество-мест Number
	*
	*   method
	*     speedNow  Вывод скорости
	*     Взлет (х) SetInterval(+5) // limit -> 600
	*     Приземление (х) SetInterval(+5) limit -> 0
	*     Количество свободных мест () -> Number
	*
	* */



}
