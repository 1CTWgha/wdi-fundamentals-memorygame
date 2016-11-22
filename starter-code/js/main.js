// console.log("JS file is connected to HTML! Woo!")

// var cardOne = 'queen';
// var cardTwo = 'queen';
// var cardThree = 'king';
// var cardFour = 'king';


// if ( cardOne === cardThree){
// 	alert('You found a match!');
// } else {
// 	alert('Sorry, try again.');
// }

document.addEventListener('DOMContentLoaded', function (){
	function createBoard() { //
		for (var c = 0; c < cards.length; c++) {
			var newCard = addCard(gameBoard); // get new card/div added to board
			newCard.setAttribute('data-card', cards[c]); // setting data-card attribute to the cards[c] which is the name of the card rank 
			//Now each new div has been appended to their parent div.
			newCard.addEventListener('click', isTwoCards); // establich function isTwoCards to run on click
		}
		document.getElementsByTagName("button")[0].addEventListener('click', clearBoard);//clear board function/ here we are just finfding it
	}
	function addCard (board) {
		var cardDiv = document.createElement('div'); //creating a new div element
		cardDiv.className += ' card'; // giving that div a class of card
		board.appendChild(cardDiv); // it is inserting that div to the end of the board div (gameBoard)
		return cardDiv; // returning the new card(div)
	}
	function isMatch (cardArray) {
		// for ( var i = 0; i < cardArray.length; i++ ) { //
		// 	for ( var j = 0; j < cardArray.length; j++ ) { //
		// 		if ( i === j ) continue; // checking if its the same card in this iteration
		// 		if (cardArray[i] == cardArray[j]) return true; // never true if the two card array values are different
		// 	}

		// }
		// return false;
		return cardArray[0] == cardArray[1];
	}
	function isTwoCards() {
	if (cardsInPlay.length === 2) return; //if the length is 2 stop 

		flipCards(this);// else run (this) function. "this": represents the card div that was clicked 

		cardsInPlay.push(this.getAttribute('data-card'));// cardsInPlay is initialy an empty array used to gather card value that have been clicked. keeps track of if its king or queen
		cardElements.push(this);//keeps track of the card div associated with the above king/queen
			//We do the above so that we can run the function isMatch on the cards to unflip them

		if (cardsInPlay.length === 2) {//this is when the pair of cards has been selected so that we may do the match. After this occurs the button is made visible

			if (isMatch(cardsInPlay)) {
				document.getElementById('message').innerHTML = "Congrads, it's a match!"//Insert this string if isMatch() function is true
			} else {
				document.getElementById('message').innerHTML = "Sorry, it's not a match!"//Insert this string if isMatch() function is false
			}
			document.getElementsByTagName("button")[0].style.display = "block";//Show the play aganin button
		}
	}
	function flipCards(card){ // card is the div that was clicked
			var cardType = card.getAttribute('data-card'); // getting the attribute from the div(card). (card type is king or queen from cards array)
			card.innerHTML = '<img src="images/' + cardType + '-clubs.png"/>'; // adding the html for the image(if its king or queen)
			
	}
	function clearBoard() {// called when the button is clicked
		cardElements[0].innerHTML = "";//replacing the string set with an image when card was flipped to nothing
		
		cardElements[1].innerHTML = "";

		cardElements = [];//There are no flipped or chosen cards now. Back to intital conditions
		cardsInPlay = [];
		document.getElementById('message').innerHTML = "&nbsp;";//Getting rid of the message from the previous game. Keeoing the vertical space in the DOM.
	}
	// Execution starts here
	var gameBoard = document.getElementById('game-board');
	var cardsInPlay = [];
	var cardElements = [];
	var cards = ['queen', 'queen', 'king', 'king'];
	createBoard(); 
});


