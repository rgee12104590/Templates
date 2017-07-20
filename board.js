/*
$('#board').keyup(function(event){
	
		newText = event.target.value;
		$('#textfield').text(newText);
		
		
	
});

*/
$('#board').keyup(function(event){
	
	
    var inputStr = event.target.value;
  
    var regExp = /\{\{(.*?)\}\}/g;
 
    var matches, matchArray = [];
 
    while((matches = regExp.exec(inputStr)) !== null) {
     
      matchArray.push(matches); // creates an array off exec arrays.
     // cleanMatches.push(matches[1]); // this is the text betweent the {{ }}
      
      console.log(matchArray[matchArray.length-1][1]);
    }
	var blank = '<input type="text" id='+1+' size="6">';
	/////$('#textfield').html(blank); 
    var outputStr = inputStr.replace(regExp, blank);
  $('#textfield').html( outputStr.replace(/[\n\r?]/g, '<br />') );
  
	
});


























