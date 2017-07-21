$(function (){
	
	$('#draggables').children().draggable({
		containment: '.jumbotron',
		revert: 'invalid',
		helper: 'clone'
	});
	
	$('#question1').droppable({drop: checkAnswer});


	$('#question2').droppable( {drop: checkAnswer} );
	
	
	$('#question3').droppable({drop: checkAnswer});
	
	
});

function checkAnswer(event, ui)
{
	answerID = ui.draggable.attr('id');  //answer1
	questionID = this.id; // question1
	filteredAnswerID = answerID.match(/[0-9]+/g)[0]; // 1
	filteredQuestionID = questionID.match(/[0-9]+/g)[0]; //1
	$('#' + questionID).val( ui.draggable.data("answer") ); // Answer 1 New
	
	//Can add code to accept or reject or shiny colors when right or wrong
	
	if(filteredAnswerID == filteredQuestionID){
			$('#' + questionID).addClass('answerCorrect');
	}
	else{
		$('#' + questionID).addClass('answerWrong');
	}
}



