$(document).ready(function(){
	$("#accordion").accordion({
		beforeActivate: function( event, ui ) {
			console.log(event, ui)
			ui.oldHeader.html("2222222")
		},
		active: 2
	});
	
	$("#draggable").draggable();
	$("#superMy").sortable();
	
	//https://bxslider.com/
	//https://datatables.net/
	//https://fotorama.io/
	//https://highlightjs.org/
})