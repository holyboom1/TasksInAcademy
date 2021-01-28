$(document).ready(function(){
	$("#run").click(function(){
		$(this).remove();
		/*
		$(".content:first").show(500,function(){
			$(this).find("p").css("color","green")
		});*/
		//$(".content:first").hide(500);
		
		//$(".content:first").toggle(500);
		//$(".content:first").slideToggle(500);
		$(".content:first").fadeToggle(500);
		
		//https://www.bestjquery.com/
		//https://igorescobar.github.io/jQuery-Mask-Plugin/
		//https://jqueryui.com/
		
		$.ajax({
			url:"ssss",
			method:"GET",
			success:function(response){
				console.log(response)
			}
			
		})
	})
})