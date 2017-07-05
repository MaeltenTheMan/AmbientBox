/*
*Ausklappbare divs
*/
function div_hide_show(id){
	var actualDiv = document.getElementById(id);
	if(actualDiv.style.display == "none"){
		actualDiv.style.display = "block";
		
	}
	else if(actualDiv.style.display == "block"){
		actualDiv.style.display = "none";
		
	}
	else {
		actualDiv.style.display = "none"
		div_hide_show(id);
	}
}

function showRegler(id){
	
	window.alert(id);
	/*
	if(id == "imgManuell"){
		actualDiv.style.display = "block";
	}
	//if(actualDiv.id)
}*/
}



//Hier muss noch an den presets geschraubt werden
//Hier erstelle ich die Presets, die je nach geklicktem Button Manuell eingestellt werden
//pS1 ist ein instrumentales
//pS2 ist ein wetterabhängiges
//pS3 ist komplett random

function gimmePS(id){
	var holder = id;
	
	
	
	if(holder == "pW1"){
		//hier wird der Instrumentale Reiter ausgeklappt
		wurst();
		window.alert(holder);
		document.getElementById('instrKont').style.display = "block";
		document.getElementById('instrWald').style.display = "block";
		
		//hier werden die Regler verschoben
			
	}
	else if(id == "pW2"){
		wurst();
		//Wetter Reiter ausgeklappt
		document.getElementById('wetterKont').style.display = "block";
		
		//hier werden die Regler verschoben
	}
	else if(id == "pW3"){
		
	}
	else if(id == "pL1"){
		//hier wird der Instrumentale Reiter ausgeklappt
		document.getElementById('instrKont').style.display = "block";
		
		//hier werden die Regler verschoben
	}
	else if(id == "pL2"){
		//Wetter Reiter ausgeklappt
		document.getElementById('wetterKont').style.display = "block";
		
		//hier werden die Regler verschoben
	}
	else if(id == "pL3"){
		
	}
	else if(id == "pS1"){
		//hier wird der Instrumentale Reiter ausgeklappt
		document.getElementById('instrKont').style.display = "block";
		
		//hier werden die Regler verschoben
	}
	else if(id == "pS2"){
		//Wetter Reiter ausgeklappt
		document.getElementById('wetterKont').style.display = "block";
		
		//hier werden die Regler verschoben
	}
	else if(id == "pS3"){
		
	}
}

function changeButton(id){
	var aktualDiv = document.getElementById(id);
	
	if(aktualDiv.style.borderTopLeftRadius=='0px'){
		aktualDiv.style.borderBottomRightRadius='0px';
		aktualDiv.style.borderTopLeftRadius='25px';	
	}
	else{
		aktualDiv.style.borderBottomRightRadius='25px';
		aktualDiv.style.borderTopLeftRadius='0px';
		
	}


}
/*
*RESET
*Hier Message, dass alle sounds auf null, sowie alle Reiter zu
*
*/


function wurst(){
	
	//alle Reiter zu
	document.getElementById('instrKont').style.display = "none";
	changeButton('Button_Instrumental');
	document.getElementById('waldKont').style.display = "none";
	document.getElementById('stadtKont').style.display = "none";
	document.getElementById('landKont').style.display = "none";
	document.getElementById('wetterKont').style.display = "none";
}