var playerChoice;
var computerChoice;
var win=0, lose=0, tie=0;
var pics = new Array();
pics[0] = "rock.jpg";
pics[1] = "paper.jpg";
pics[2] = "scissors.jpg";

function showChoice(choice)
{
	playerChoice = choice;
	document.getElementById("playerImage").innerHTML="<br /><img src='"+pics[playerChoice]+"'/>";
	
	computerChoice = Math.floor(Math.random()*3);
	document.getElementById("computerImage").innerHTML="<br /><img src='"+pics[computerChoice]+"'/>";
	
	results();
}

function results()
{
	//tie game code
	if ((playerChoice==0 && computerChoice ==0) || (playerChoice==1 && computerChoice ==1) || (playerChoice==2 && computerChoice ==2))
	{
	document.getElementById("gameResults").innerHTML = "TIE";
	}
	//win game code
	if ((playerChoice==0 && computerChoice ==2) || (playerChoice==1 && computerChoice ==0) || (playerChoice==2 && computerChoice ==1))
	{
	document.getElementById("gameResults").innerHTML = "WIN";
	win++;
	}
	//lose game code
	if ((playerChoice==0 && computerChoice ==1) || (playerChoice==1 && computerChoice ==2) || (playerChoice==2 && computerChoice ==0))
	{
	document.getElementById("gameResults").innerHTML = "NOOB";
	win--;
	}
	
	document.getElementById("scores").innerHTML=" wins: " + win; //+ " lose: " + lose + " ties: " + tie;
	
	
}