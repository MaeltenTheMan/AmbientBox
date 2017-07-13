/*
*Global Array, Reglernamen
*0-8 wald
*9-16 stadt
*17-26 land
*27-33 wetter
*34-41 instrumente
*/
var Regler = ["wald_Atmosphaere","wald_Aeste","wald_Eule", "wald_Frosch", "wald_Hirsch","wald_Kuckuck","wald_Specht","wald_Unterholz", "wald_Wolf","stadt_Atmosphaere", "stadt_Autohupen", "stadt_Fluglaerm", "stadt_Gueterverkehr", "stadt_Kirchenglocken","stadt_Menschen", "stadt_Motorrad", "stadt_Sirenen", "land_Atmosphaere", "land_Gaense", "land_Grillen", "land_Hahn", "land_Katze", "land_Kirchenglocken", "land_Kuh", "land_Pferdewiehern", "land_Reiter", "land_Schweine","wetter_Sturm", "wetter_Donner", "wetter_Gewitter", "wetter_Gewitter-ueberdacht", "wetter_Regen-leicht", "wetter_Regen-stark", "wetter_Regen-ueberdacht","instrumental_Abstrakt","instrumental_chimes_warm", "instrumental_Chor","instrumental_Horror","instrumental_Koto","instrumental_Percussions", "instrumental_Synth" ]

/*
*
*Ausklappbare divs
*
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



/*
*erstellt Presets
*übergibt id des Buttons 
*wählt Preset  
*/
function gimmePS(id){
	
//reset aller aktuellen sounds	
pahoMessage("reset");
	
	if(id == "pW1"){
		
		//hier wird der Instrumentale Reiter ausgeklappt (Ausklappen der Reiter nicht vergessen!)
		document.getElementById('instrKont').style.display = "block";	
		
		
		//Hier wird der helper aufgerufen, Max 8
		hilfe("wald_Atmosphaere" , 50, "wald_Eule", 80, "wald_Frosch", 40, "instrumental_Synth" , 100);
		
			
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

/*
*
*Paho Reset + Alle Regler auf 0
*
*/
function resetAll()
{
		pahoMessage("reset");
		for (var i = 0; i <= Regler.length; i++){
		document.getElementById(Regler[i]).value = '0';
		
		}
		
}

/*
*
*Löschen einer Kategorie (Paho + Regler)
*
*/
function resetBlock(start , ende)
{
	for(var i =start; i<=ende; i++){
		document.getElementById(Regler[i]).value = '0';
		pahoMessage(Regler[i] + " 0");
	}
}

/*
*
*Helper zum erstellen der Presets
*Namen des Reglers + Wert eingeben
*Maximal 8 unterschiedliche Werte einfügen (Nummern der Kategorien überm Array aufgelistet)
*
*/
function hilfe(Schieber, Wert, Schieber2 , Wert2, Schieber3, Wert3, Schieber4, Wert4, Schieber5, Wert5, Schieber6, Wert6, Schieber7, Wert7, Schieber8, Wert8){
	
	for(var i =0; i<=Regler.length; i++){
		if(Regler[i] == Schieber){
			document.getElementById(Regler[i]).value = Wert;
			pahoMessage(Regler[i] + " " + Wert);
		}
		else if(Regler[i] ==Schieber2){
			document.getElementById(Regler[i]).value = Wert2;
			pahoMessage(Regler[i] + " " + Wert2);
		}
		else if(Regler[i] ==Schieber3){
			document.getElementById(Regler[i]).value = Wert3;
			pahoMessage(Regler[i] + " " + Wert3);
		}
		else if(Regler[i] ==Schieber4){
			document.getElementById(Regler[i]).value = Wert4;
			pahoMessage(Regler[i] + " " + Wert4);
		}
		else if(Regler[i] ==Schieber5){
			document.getElementById(Regler[i]).value = Wert5;
			pahoMessage(Regler[i] + " " + Wert5);
		}
		else if(Regler[i] ==Schieber6){
			document.getElementById(Regler[i]).value = Wert6;
			pahoMessage(Regler[i] + " " + Wert6);
		}
		else if(Regler[i] ==Schieber7){
			document.getElementById(Regler[i]).value = Wert7;
			pahoMessage(Regler[i] + " " + Wert7);
		}
		else if(Regler[i] ==Schieber8){
			document.getElementById(Regler[i]).value = Wert8;
			pahoMessage(Regler[i] + " " + Wert8);
		}
		else {
		document.getElementById(Regler[i]).value = '0';
		}
	}
	
}

/*
*
*Erstellung einer PahoMessage 
*übergebener wert wird gesendet
*
*/
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


