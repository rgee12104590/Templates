//This is the code to identify the correct answer. I copied it multiple times for each number and ID. This is a temporary question processor.

$('#button1').click(function(){
	
					answer = $('#answer1').val();
					//jquery.post(...) POST answer to server
					if(answer === 'ipsum') //ipsum is set as the correct answer
					{
						$('#answer1').addClass('answerCorrect');
						
					}
					else{
						$('#answer1').addClass('answerWrong');
					}
					});
					
//copied for the other 2 numbers to run
					
$('#button2').click(function(){
	
					answer = $('#answer2').val();
					//jquery.post(...) POST answer to server
					if(answer === 'Neque') //Neque is set as the correct answer
					{
						$('#answer2').addClass('answerCorrect');
						
					}
					else{
						$('#answer2').addClass('answerWrong');
					}
					});

$('#button3').click(function(){
	
					answer = $('#answer3').val();
					//jquery.post(...) POST answer to server
					if(answer === 'dolor') //dolor is set as the correct answer
					{
						$('#answer3').addClass('answerCorrect');
						
					}
					else{
						$('#answer3').addClass('answerWrong');
					}
					});