

$('.answer').click(function()
					 {
						answer = this.id;
						//jquery.post(...) POST answer to server
						if( answer === 'answer1-2' || answer === 'answer2-1' || answer === 'answer3-3' )
						{
							$('#' + this.id).addClass('btn-success');
						}
						else
						{
							$('#' + this.id).addClass('btn-danger');
						}

						question = $('#' + this.id).data('question');
						$('.submitted' + question).prop( "disabled", true ); //code to disable buttons after selecting answer
					 }
                     );

