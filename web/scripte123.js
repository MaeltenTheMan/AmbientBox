//Global Array, der alle Reglernamen hält
var Regler = ['wald_Atmosphaere', 'wald_Kuckuck', 'wald_Eule', 'wald_Specht', 'wald_Wolf','wald_Aeste', 'wald_Laub', 'wald_Fallobst', 'wald_Frosch', 'wald_See','wald_Tiergetrappel', 'wald_Tropfen', 'stadt_Atmosphaere', 'stadt_Markt', 'stadt_Fluglaerm','stadt_Verkehr', 'stadt_Passanten', 'stadt_Baustelle', 'stadt_Sirenen', 'stadt_Kirche', 'stadt_Autobahn', 'land_Atmosphaere', 'land_Grille', 'land_Katze', 'land_Wasser','land_Schweine', 'land_Kuehe', 'land_Kinder', 'land_Pferde', 'land_Hahn', 'land_Traktor','land_Bahnschranke', 'land_Kirche', 'land_Lagerfeuer','instr_Gitarre','instr_Hall','instr_Glockenspiel','wetter_Regen-hart','wetter_Regen-weich','wetter_Gewitter','wetter_Sturm'];  


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

//Hier muss noch an den presets geschraubt werden
//Hier erstelle ich die Presets, die je nach geklicktem Button Manuell eingestellt werden
//pS1 ist ein instrumentales
//pS2 ist ein wetterabhängiges
//pS3 ist komplett random

function gimmePS(id){
	var holder = id;
	if(holder == "pW1"){
		
		window.alert(holder);
		//resetAll();
		//hier wird der Instrumentale Reiter ausgeklappt
		document.getElementById('instrKont').style.display = "block";	
		
		//hier werden die Regler verschoben
		document.getElementById("wald_Atmosphaere").value = '50';
		document.getElementById("wald_Kuckuck").value = '50';
		document.getElementById("instr_Gitarre").value = '100';
		
		//preset Messages
		pahoMessage("wald_Atmosphaere 50");
		pahoMessage("wald_Kuckuck 50");
		pahoMessage("instr_Gitarre 100");
		
		
		
	}
	else if(id == "pW2"){
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

//schickt paho message + Alle Regler auf 0
function resetAll(){
		
		for (var i = 0; i <= Regler.length; i++){
		document.getElementById(Regler[i]).value = '0';
		}
		
		pahoMessage("reset 1")
	
}
function pahoMessage(wert){
		message = new Paho.MQTT.Message(wert);
        message.destinationName = "haw/dmi/mt/its/ss17/ambientbox";
        client.send(message);
}
		

function closeDivs(){
	if(document.getElementById('stadtKont').style.display == "block")
	document.getElementById('stadtKont').style.display = "none";
	if(document.getElementById('landKont').style.display == "block")
	document.getElementById('landKont').style.display = "none";
	if(document.getElementById('waldKont').style.display == "block")
	document.getElementById('waldKont').style.display = "none";
	if(document.getElementById('instrKont').style.display =="block")
	document.getElementById('instrKont').style.display = "none";
	if(document.getElementById('wetterKont').style.display = "block")
	document.getElementById('wetterKont').style.display = "none";
}


