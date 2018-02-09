var statsjson;

function assignvals(){
	if(statsjson.hasOwnProperty('status') && statsjson.status == true){
		document.getElementById('fleetdist').innerHTML = statsjson.data.fleetdist;
		document.getElementById('avespeed').innerHTML = statsjson.data.avespeed;
		document.getElementById('drivescore').innerHTML = statsjson.data.drivescore;
		document.getElementById('numtrips').innerHTML = statsjson.data.numtrips;
		document.getElementById('totaltime').innerHTML = statsjson.data.totaltime;
	}
	else{
		var fstable = document.getElementById('fleetstatstable');
		for(var i = 0, col; col = fstable.rows[i].cells[1]; i++){
			col.innerHTML = 'ERROR';
		}
	}
}

function getstats(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if (xhttp.readyState == 4 && xhttp.status == 200){
			statsjson = JSON.parse(xhttp.responseText);
			assignvals();			
		}
	};
	xhttp.open("GET", "fleetstats/", true);
	xhttp.send();
}	

getstats();