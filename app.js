$(document).ready(function(){
	
	//name entry
	
	var p1Name = prompt("Player 1 please enter your name:");
	var p2Name = prompt("Player 2 please enter your name:");

	function setNames(){
	$('#p1ScoreName').text(p1Name);
	$('#p2ScoreName').text(p2Name);
	document.getElementById('p1Throw').setAttribute("value", p1Name + "'s throw");
	document.getElementById('p2Throw').setAttribute("value", p2Name + "'s throw");
	}
	setNames();
	
	//dart logging
		
	$("td").on("click", function(){
		clickedDart = $(this).attr("data");
		clickedDart = parseInt(clickedDart);
			if($('#p1Score').is('.highlight') && clickedDart && ((document.getElementById('p1Score').innerHTML - clickedDart) > 50)){
				p1Current = document.getElementById('p1Score').innerHTML;
				p1Current = parseInt(p1Current);
				document.getElementById('p1Score').innerHTML = p1Current - clickedDart;
			}
			else if($('#p1Score').is('.highlight') && clickedDart && 2 < (document.getElementById('p1Score').innerHTML - clickedDart) && (document.getElementById('p1Score').innerHTML - clickedDart) <= 49 && !((document.getElementById("p1Score").innerHTML - clickedDart) % 2)) {
				p1Current = document.getElementById('p1Score').innerHTML;
				p1Current = parseInt(p1Current);
				document.getElementById('p1Score').innerHTML = p1Current - clickedDart;
				document.getElementById("p1Double").innerHTML = "x" + parseInt(document.getElementById("p1Score").innerHTML)/2;
				$('#p1Score').hide();
				$('#p1Double').show();
			}
			else if((document.getElementById('p1Score').innerHTML - clickedDart) === 50){
				p1Current = document.getElementById('p1Score').innerHTML;
				p1Current = parseInt(p1Current);
				document.getElementById('p1Score').innerHTML = p1Current - clickedDart;
				document.getElementById("p1Double").innerHTML = "Bull";
				$('#p1Score').hide();
				$('#p1Double').show();
			}
			else if($('#p1Score').is('.highlight') && clickedDart && 2 < (document.getElementById('p1Score').innerHTML - clickedDart) && (document.getElementById('p1Score').innerHTML - clickedDart) <= 49 && ((document.getElementById("p1Score").innerHTML - clickedDart) % 2)){
				p1Current = document.getElementById('p1Score').innerHTML;
				p1Current = parseInt(p1Current);
				document.getElementById('p1Score').innerHTML = p1Current - clickedDart;
			}
			else if($('#p2Score').is('.highlight') && clickedDart && ((document.getElementById('p2Score').innerHTML - clickedDart) > 50)){
				p2Current = document.getElementById('p2Score').innerHTML;
				p2Current = parseInt(p2Current);
				document.getElementById('p2Score').innerHTML = p2Current - clickedDart;
			} 
			else if($('#p2Score').is('.highlight') && clickedDart && 2 < (document.getElementById('p2Score').innerHTML - clickedDart) && (document.getElementById('p2Score').innerHTML - clickedDart) <= 49 && !((document.getElementById("p2Score").innerHTML - clickedDart) % 2)) {
				p2Current = document.getElementById('p2Score').innerHTML;
				p2Current = parseInt(p2Current);
				document.getElementById('p2Score').innerHTML = p2Current - clickedDart;
				document.getElementById("p2Double").innerHTML = "x" + parseInt(document.getElementById("p2Score").innerHTML)/2;
				$('#p2Score').hide();
				$('#p2Double').show();
			}
			else if((document.getElementById('p2Score').innerHTML - clickedDart) === 50){
				p2Current = document.getElementById('p2Score').innerHTML;
				p2Current = parseInt(p2Current);
				document.getElementById('p2Score').innerHTML = p2Current - clickedDart;
				document.getElementById("p2Double").innerHTML = "Bull";
				$('#p2Score').hide();
				$('#p2Double').show();
			}
			else if($('#p2Score').is('.highlight') && clickedDart && 2 < (document.getElementById('p2Score').innerHTML - clickedDart) && (document.getElementById('p2Score').innerHTML - clickedDart) <= 49 && ((document.getElementById("p2Score").innerHTML - clickedDart) % 2)){
				p2Current = document.getElementById('p2Score').innerHTML;
				p2Current = parseInt(p2Current);
				document.getElementById('p2Score').innerHTML = p2Current - clickedDart;
			}
			else if($('#p1Score').is('.highlight') && clickedDart && (document.getElementById('p1Score').innerHTML - clickedDart) < 2 && (document.getElementById('p1Score').innerHTML - clickedDart) != 0) {
				alert("Bust!");
			}
			else if($('#p2Score').is('.highlight') && clickedDart && (document.getElementById('p2Score').innerHTML - clickedDart) < 2 && (document.getElementById('p2Score').innerHTML - clickedDart) != 0) {
				alert("Bust!");
			}
			else if((document.getElementById('p1Score').innerHTML - clickedDart) === 0) {
				alert("Game " + p1Name + "!");
				$('#p1Score').text(0);
				$('#p1Double').hide();
				$('#p1Score').show();
				p1Win();
			}
			else if((document.getElementById('p2Score').innerHTML - clickedDart) === 0) {
				alert("Game " + p2Name + "!");
				$('#p2Score').text(0);
				$('#p2Double').hide();
				$('#p2Score').show();
				p2Win();
			}
	});
	
	//general buttons
	
	function resetScores(){
		document.getElementById('p1Score').innerHTML = "501";
		document.getElementById('p2Score').innerHTML = "501";
	}
	//game counter
	
	function p1Win(){
		document.getElementById('p1Games').innerHTML ++;
		resetScores();
	}
	
	function p2Win(){
		document.getElementById('p2Games').innerHTML ++;
		resetScores();
	}
	
	function newMatch(){
		resetScores();
		document.getElementById('p1Games').innerHTML = "";
		document.getElementById('p2Games').innerHTML = ""
	}
	
	$('#newGame').on("click", resetScores);
	
	$('#newMatch').on("click", newMatch);
	
	//player highlight
	
	$('#p1Throw').on("click", function(){
		$('.highlight').removeClass('highlight');
		$('#p1Score').addClass('highlight');
		$('#winmau').hide(1);
		$('#winmau').show(1);
		$('#winmau').addClass('rubberBand');
	});
	
	$('#p2Throw').on("click", function() {
		$('.highlight').removeClass('highlight');
		$('#p2Score').addClass('highlight');
		$('#winmau').removeClass('rubberBand');
		$('#winmau').hide(1);
		$('#winmau').show(1);
		$('#winmau').addClass('rubberBand');
	});
	
	//animations
	
	$('#board td').on("mouseenter", function(){
		$(this).animate({fontSize: "23px", opacity: "1.0"}, 200);
	});
	
	$('#board td').on("mouseleave", function(){
		$(this).animate({fontSize: "20px", opacity: "0.8"}, 200);
	});
	
	$('.bull').on("mouseenter", function(){
		$('#winmau').hide(1)
		$('#bully').show(200);
	});
	
	$('.bull').on("mouseleave", function(){
		$('#bully').hide(1);
		$('#winmau').show(200);
	});
	
	$('#t20').on('mouseenter', function(){
		$('#winmau').hide(1);
		$('#phil').show(200);
	});
	
	$('#t20').on("mouseleave", function(){
		$('#phil').hide(1);
		$('#winmau').show(200);
	});
	
	$('td').on("click", function(){if(!(document.getElementById('p1Score').innerHTML % 100) || !(document.getElementById('p2Score').innerHTML % 100)){
		$('#winmau').hide(1);
		$('#dyson').show(200);
	} else {
		$('#dyson').hide(1);
		$('#winmau').show(200);
	}
	});
	
	$('td').on("click", function(){
	if (document.getElementById('p1Score').innerHTML < 171 || document.getElementById('p2Score').innerHTML < 171){
	$('#checkout').show(1);
	setTimeout(function(){$('#checkoutCell').addClass('rubberBand')}, 500);
	} else {
	$('#checkout').hide(1)
	}
	});
	
	//end of document ready function		
	});
