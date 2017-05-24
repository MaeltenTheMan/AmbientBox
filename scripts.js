function div_hide_show(id){
	var actualDiv = document.getElementById(id);
	
	if(actualDiv.style.display == "none"){
		actualDiv.style.display = "block";
	}
	else{
		actualDiv.style.display = "none";
	}
}

