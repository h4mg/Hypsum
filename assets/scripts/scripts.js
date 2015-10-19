
// Hypsum

// Coded by Hamsa Ganesh & Andrew Dyke Oct. 2015.

// Hypsum is a dummy text generator we made with a theme based on the people, community and lifestyle found at HackerYou.

// HackerYou is a professional centre located in Toronto, Ontario, Canada.
// We <3 HackerYou
// http://www.hackeryou.com 

// document ready
$(function() {

	// defaultList is our word library
	var defaultList = ["console", "inspector", "function", "method", "run our code when the form is submitted", "stoked", "coffee", "Sass", "Drew", "Christopher" , "Kristen" , "Heather", "Ryan", "Wes", "I'll refactor you", "Haris", "code", "sublime", "sketch", "script", "index", "cascade", "Pied Piper", "Hooli", "I'll just Google it", "Nat", "team", "love", "friends", "people", "fun", "raptorize it", "lab", "Mac", "make cool shit", "Uncle Drew", "T-Swift", "error", "hypertext", "gif", "jpg", "png", "don't let your dreams be dreams", "photoshop", "framer", "illustrator", "software", "let's go surfin' now everybody's learnin' how", "application", "sick scrolling marquee", "JavaScript", "fixed-width", "salad club", "alumni", "variable", "array", "object", "class", "id", "div", "header", "section", "semantic", "syntactically awesome", "Gulp", "Git", "GitHub", "Silicon Valley", "HTML5", "CSS3", "preprocessor", "append", "prepend", "parameter", "argument", "party", "front-end", "awesome", "my favourite tag was blink", "cool", "rad", "team", "together", "join", "alert", "animate", "jQuery", "Sketch", "DOM", "give yourself an auto high-five", "key", "value", "elements", "return", "span", "paragraph", "header", "footer", "toggle", "back-end", "document ready", "margin", "padding", "z-index", "what the flexbox", "Turrono", "Queen Street", "design", "development", "downtown", "the 6ix", "workshops", "scrum master", "gnarly", "terminal", "crew", "slackbot", "i think you mean gang", "loop", "condition", "data type", "Just JavaScript", "the future", "Cohort 8", "Octothorpe", "call me maybe", "see you on MySpace", "developer", "scrum-master", "box wine and brews", "show and tell"
	];

	// Form submit function
	$('#loremForm').on('submit', function(e) {
		// Prevent default submit action and insert submitted value from radio button into variable
		e.preventDefault();
		var desiredSize = ($('input[name="loremRadio"]:checked', '#loremForm').val());
		// If user submits form without an option selected they will get and alert instead of the program running
		if(desiredSize==null){
			window.alert("Erm.. I asked: How long would you like your paragraph to be?");
		}
		// Otherwise continue to run application as intended.
		else {

			// First we initialize an empty array. This is where each item we generate from our defaultList will be stored.
			var loremList = new Array();

			// Now loop for array items until we reach desiredSize
			for(var i = 0; i < desiredSize ; i++){

				// Generating a random number to serve as an index for the defaultList array
				var pickNumber = Math.floor(Math.random()*100); 

				// assigning a variable to the value retreived from the index of the defaultList array
				var loremWord = defaultList[pickNumber]; 

				// Adding the generated word to the new list
				loremList + loremList.push(loremWord);
			}

			// getting every 3rd item in the loremList array (starts at 3rd position)
			for(i = 2; i < desiredSize; i += 3){
				// adding a period to the end of every third item
				loremList[i] += '.';
			}

			// getting every 3rd item in the loremList array (starts at 4th position)
			for(i = 0; i < desiredSize; i += 3){
				// Replace first character of every sentence with uppercase
				loremList[i] = loremList[i][0].toUpperCase() + loremList[i].substring(1,loremList[i].length);
			}

			// Joining the new list of words with a space between all of them
			var yourPara = loremList.join(' ');
			
			// Get the last character in yourPara and store in variable
			var lastChar = yourPara.charAt(yourPara.length - 1);

			// if lastCharacter is not equal to a period, then concat a period to end of paragraph.
				if (lastChar !== '.'){
					yourPara += '.';
				}

			// Replace classes on button to toggle visible and invisible state
			$(".clipCopy").addClass("finalClip").removeClass("clipCopy");

			// Generate a div with a class of yourPara inside section with a class of hypsumText and insert yourPara inside
			$("section.hypsumText").html("<div class='yourPara'><p>" + yourPara + "</p></div>");

			// Copy to clipboard button
			new Clipboard('.btn');

		}

	});

});


