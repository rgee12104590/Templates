$('.check').click(function(){
	
	$('.refresh').removeClass('answerCorrect answerWrong');
	
	answer = $('#answer1').attr('name');
	guess = $('#answer1').val();
	
	//question1.1
	if(guess == answer){
		$('#answer1').addClass('answerCorrect');
	}
	else{
		$('#answer1').addClass('answerWrong');
	}
	
	answer = $('#answer2').attr('name');
	guess = $('#answer2').val();
	
	//question1.2
	if(guess == answer){
		$('#answer2').addClass('answerCorrect');
	}
	else{
		$('#answer2').addClass('answerWrong');
	}
	
});