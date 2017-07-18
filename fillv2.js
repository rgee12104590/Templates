/*

This was what I used to run question 1.

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
*/
//this is the new code that will loop through all the ids of the inputs and will check the name attribute to determine whether it is correct or wrong


$('.check').click(function(){

$('.refresh').removeClass('answerCorrect answerWrong');

for (counter= 0; counter <= 20; counter++){
	
	answer = $('#answer' + [counter]).attr('name');
	guess = $('#answer' + [counter]).val();

		if(guess === answer){
			$('#answer' + [counter]).addClass('answerCorrect');
		}
		else{
			$('#answer' + [counter]).addClass('answerWrong');
		}
}
		
});


























