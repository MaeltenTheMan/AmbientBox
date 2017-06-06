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
