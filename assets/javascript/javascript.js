	var voice = "yoda";

	var languageSelect = "";

	var inputPhrase = "";


	function pullVoice () {

			languageSelect = $( "#language option:selected" ).val(); 

			inputPhrase = $(".inputPhrase").val();

			console.log ("Pull Voice");
			console.log ("------------");
			console.log (languageSelect);
		

	}

	
	function pullTranslation(filterTranslate, userStatement) {


		console.log (languageSelect);

		var replaced = userStatement.split(' ').join('%20');
		
		console.log ("----Phrase with %20-----");
		console.log (replaced);

		 var queryURL = "https://api.funtranslations.com/translate/" + filterTranslate + ".json?text=" + replaced + "&api_key=_8aMBjVm6VuS6l8C1H9H8geF";

	        //
	    $.ajax({url: queryURL, method: 'GET'})
	 	.done(function(response) {

	             console.log (response);
	             var translatedState = response.contents.translated;
	             console.log ("----New Sentence----")
	             console.log (translatedState); 
	     });
 	}
	
	function pullGif(filterImage) {

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + filterImage + "&api_key=dc6zaTOxFJmzC";

        $.ajax({
                url: queryURL,
                method: 'GET'
            })
         .done(function(response) {	

        console.log(response)




    	});

	}

	pullGif(voice);

	     $('.phraseLanguage').on('click', function() {



	     	pullVoice();

	     	console.log (inputPhrase);

	     	pullTranslation(languageSelect, inputPhrase);

	     	




	     });