$(function (){
	
	$('#draggables').children().draggable({
		containment: '.jumbotron',
		helper: 'clone'
	});
	
	$('#d1, #d2, #d3').draggable('option', 'stack', '.ui-draggable');
	
});