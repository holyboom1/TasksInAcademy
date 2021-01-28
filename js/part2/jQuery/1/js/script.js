//$(selector).method();

//$("#app > ul > li").html("22");

/*$("#app > ul > li")
	.css("color","red")
	.css("background","#000");*/
/*	
$("#app > ul > li")
	.css({
		color: "red",
		background :"#000"
	})*/
// getter console.log($("#app > ul > li").css("color"))	

/*
$("#app > ul > li").each(function(){
	console.log($(this),this);
	if($(this).html()==22) {
		$(this).css("color","green")
	}
})*/
/*
$("#app > ul > li").html("2222").css("color","red").addClass("active");

document.querySelectorAll("#app > ul > li").forEach(function(item){
	item.innerHTML="22222";
	item.style.color="red";
	item.classList.add("active");
})*/

$("#app > ul > li").html("2222").click(activeLi)

$("#add").click(function(){

	//let x = $("<li />").html("ddd").click(activeLi);
	$("<li />").html("ddd").click(activeLi).appendTo($("#app > ul:eq(0)"));
})



function activeLi(){

	$(this).toggleClass("current");
}