

//initialize all variables
var player = 0;
var dealer = 0;
var bust = "You drew over 21 and busted :^("
var blackJack = "You drew a black jack! Congrats!"


function drawCard(){
 return Math.ceil(Math.random()*11 + 1);
 }

function playerDraw(){
	player += drawCard();
	
	showPlayerTurn();
}

function dealerDraw(){
	dealer += drawCard();
	
	showDealerTurn();
}

function playAgain(){

	player = 0
	dealer = 0
	document.getElementById("playerhit").disabled = false;
	document.getElementById("playerstay").disabled = false;
	document.getElementById("dealerhit").disabled = false;
	document.getElementById("player").innerHTML = "You: " + player;
	document.getElementById("dealer").innerHTML = "Dealer: " + dealer;
	document.getElementById("winner").innerHTML = "";

}

function stay(){

document.getElementById("playerhit").disabled = true;
document.getElementById("playerstay").disabled = true;

}

function showPlayerTurn(){

document.getElementById("player").innerHTML = "You: " + player;
 
	if (player > 21){
		
		document.getElementById("player").innerHTML = "You: " + player + ".</br>" + bust;
		stay();
		document.getElementById("winner").innerHTML = "You LOST!";

	} else if (player == 21){
		
		document.getElementById("player").innerHTML = "You: " + player + ".</br>" + blackJack;
		stay();

	} else {

		document.getElementById("player").innerHTML = "You: " + player;
	}
}

function showDealerTurn(){

	document.getElementById("dealer").innerHTML = "Dealer: " + dealer;

	if (dealer >= 16 && dealer <= 21){
		document.getElementById("dealer").innerHTML = "Dealer: " + dealer + ".</br>He cannot draw again...";
		document.getElementById("dealerhit").disabled = true;

		if (player > dealer && player <= 21){
			
			document.getElementById("winner").innerHTML = "You WON!";
			
		} else if (player == dealer && player < 21 && dealer < 21){

			document.getElementById("winner").innerHTML = "You both TIE! You get your chips back.";

		} else {

			document.getElementById("winner").innerHTML = "You LOST!";
		}

	} else if (dealer > 21){
		
		document.getElementById("dealer").innerHTML = "Dealer: " + dealer + ".";
		document.getElementById("winner").innerHTML = "The dealer busted and you WON!";
		document.getElementById("dealerhit").disabled = true;
		stay();

	} else if (player == 21 && dealer == 21){

		document.getElementById("dealerhit").disabled = true;
		stay();
		document.getElementById("winner").innerHTML = "You both TIE! You get your chips back.";


	} else if (dealer == 21 && player < 21){

		document.getElementById("winner").innerHTML = "The dealer got a blackjack, you LOST!";

	} else {
		document.getElementById("dealer").innerHTML = "Dealer: " + dealer;
	}

}

