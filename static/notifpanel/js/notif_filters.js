var filtercats;

function getfiltercats(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
        if (xhttp.readyState == 4 && xhttp.status == 200){
            filtercats = JSON.parse(xhttp.responseText).filtercats
        }
    };
    xhttp.open("GET", "getfiltercats/", true);
    xhttp.send();
}

getfiltercats();

function createfilter(addfilterbutton){
	var fid = addfilterbutton.id.charAt(addfilterbutton.id.length - 1);
	var fcell = document.getElementById("filterstable" + fid).insertRow(-1).insertCell(0);
	fcell.className = "filtercell";
	var filter = document.getElementById("filtertemplate").cloneNode(true);
	filter.style.display = "block";
	filter.id = "filtercopyx";
	fcell.appendChild(filter);

	for(var i = 0; i < fcell.childNodes[0].childNodes.length; i++) {
		if (fcell.childNodes[0].childNodes[i].className == "delfilter"){
			fcell.childNodes[0].childNodes[i].addEventListener("click", function(){ 
				deletefilter(this); 
			});
			break;
		}
	}

	var catsel;
	for(var i = 0; i < fcell.childNodes[0].childNodes.length; i++) {
		if (fcell.childNodes[0].childNodes[i].className == "catseldiv"){
			for(var j = 0; j < fcell.childNodes[0].childNodes[i].childNodes.length; j++){
				if (fcell.childNodes[0].childNodes[i].childNodes[j].className == "catsel"){			
					catsel = fcell.childNodes[0].childNodes[i].childNodes[j];
					break;
				}
			}
			break;
		}
	}
	for(var key in filtercats){
		var opt = document.createElement("option");
		opt.value = key;
		opt.innerHTML = filtercats[key];
		catsel.add(opt);
	}
	catsel.addEventListener("change", function(){ getfilteropts(this); });
}

function deletefilter(delfilterbutton){
	var row = delfilterbutton.parentNode.parentNode.parentNode;
	row.parentNode.removeChild(row);
}

var addfilterbuttons = document.getElementsByClassName("addfilter");
for (var i = addfilterbuttons.length - 1; i >= 0; i--){
	addfilterbuttons[i].addEventListener("click", function(){ createfilter(this); });
}

function getfilteropts(catsel){
	var cid = catsel.options[catsel.selectedIndex].value;
	var filteroptdiv;
	for(var i = 0; i < catsel.parentNode.childNodes.length; i++){
		if (catsel.parentNode.childNodes[i].className == "filteroptdiv"){
			filteroptdiv = catsel.parentNode.childNodes[i];
		}
	}
	filteroptdiv.textContent = '';
	filteroptdiv.innerHTML = '<div class="filteroptsloading">Loading...&nbsp;&nbsp;</div>';

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if (xhttp.readyState == 4 && xhttp.status == 200){
			opts = JSON.parse(xhttp.responseText).opts;
			var br = document.createElement("br");
			filteroptdiv.textContent = '';
			for(var key in opts){
				var p = document.createTextNode(" " + opts[key]);
				var opt = document.createElement("INPUT");
				opt.setAttribute("type", "checkbox");
				opt.value = key;
				filteroptdiv.appendChild(opt);
				filteroptdiv.appendChild(p);
				filteroptdiv.appendChild(br.cloneNode());
			}
		}
	};
	xhttp.open("GET", "getfilteropts/" + cid + "/", true);
	xhttp.send();
}

function getfiltersdata(){

	data = {};
    data.filters = [];

    var ftable = document.getElementById("filterstable" + 0);
    for(var x = 0, row; row =  ftable.rows[x]; x++){
    	var fdata = {};
    	fdata.fopts = [];
    	var filt = row.childNodes[0].childNodes[0];

    	var rdiv;
    	for(var i = 0; i < filt.childNodes.length; i++){
    		if(filt.childNodes[i].className == "catseldiv"){
    			rdiv = filt.childNodes[i];
    			break;
    		}
    	}
    	for(var i = 0; i < rdiv.childNodes.length; i++){
    		if(rdiv.childNodes[i].className == "catsel"){
    			fdata.fid = rdiv.childNodes[i].value;
    			break;
    		}
    	}
    	for(var i = 0; i < rdiv.childNodes.length; i++){
    		if(rdiv.childNodes[i].className == "filteroptdiv"){
    			rdiv = rdiv.childNodes[i];
    		}
    	}
    	for(var i = 0; i < rdiv.childNodes.length; i++){
    		if(rdiv.childNodes[i].tagName == "INPUT"){
    			if(rdiv.childNodes[i].checked){
    				fdata.fopts.push(rdiv.childNodes[i].value);
    			}
    		}
    	}
    	if(fdata.fid != "none") data.filters.push(fdata);
    }
	uname.value = JSON.stringify(data);
}