	var voice = "yoda";



	
	function pullTranslation(filterTranslate) {

		var userStatement = "This is test text";


		var replaced = userStatement.split(' ').join('%20');
		

		 var queryURL = "http://api.funtranslations.com/translate/" + filterTranslate + ".json?text=" + userStatement;

	        //
	    $.ajax({url: queryURL, method: 'GET'})
	 	.done(function(response) {

	             console.log (response);
	             var translatedState = response.contents.translated;
	             console.log (translatedState); 
	     });
 	}
	
	function pullGif(filterImage) {

        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + filterImage + "&api_key=dc6zaTOxFJmzC";

        $.ajax({
                url: queryURL,
                method: 'GET'
            })
         .done(function(response) {
                

        console.log(response)
    	});

	}

	pullGif(voice);