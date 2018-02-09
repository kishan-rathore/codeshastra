var charts = [];
charts.push(gengraph("chart" + 0, []));
charts.push(gengraph("chart" + 1, []));
charts.push(gengraph("chart" + 2, []));

function getgraphdata(subbut){
	var gid = subbut.id.substring(11);
    var gname = "chart" + gid;
    var data = {};
    data.gid = gid;
    data.ndiv = document.getElementById("ndiv" + gid).value;
    data.filters = [];

    var chartdiv = document.getElementById("chart" + gid);
    chartdiv.textContent = '';
    chartdiv.innerHTML = '<div class="chartload1"><div class="chartload2">Loading...</div></div>';

    var ftable = document.getElementById("filterstable" + gid);

    for(var x = 0, row; row = ftable.rows[x]; x++){
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

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (xhttp.readyState == 4 && xhttp.status == 200){
        	if(JSON.parse(xhttp.responseText).status == true){
        		var graphdata = JSON.parse(xhttp.responseText).data;
	            var chart = charts[gid];
	            chart.dataProvider = graphdata;
	            chartdiv.textContent = '';
	            chart.write(chartdiv);
	            chart.validateData();
        	}
        	else{
        		chartdiv.textContent = '';
    			chartdiv.innerHTML = '<div class="chartload1"><div class="chartload2">ERROR</div></div>';
        	}            
        }
    };
    xhttp.open("POST", "getgraphdata/", true);
    xhttp.send(JSON.stringify(data));
}

getgraphdata(document.getElementById("chartsubmit0"));
getgraphdata(document.getElementById("chartsubmit1"));
getgraphdata(document.getElementById("chartsubmit2"));

var submitbuttons = document.getElementsByClassName("chartsubmit");
for (var i = submitbuttons.length - 1; i >= 0; i--){
	submitbuttons[i].addEventListener("click", function(){ getgraphdata(this); });
}

function switchgraph(){
	var gid = document.getElementById("graphsel").selectedIndex;
	var chartconts = document.getElementsByClassName("chartcontdiv");
	for(var i = 0; i < chartconts.length; i++){
		chartconts[i].style.display = "none";
	}
	chartconts[gid].style.display = "block";
}

document.getElementById("graphsel").addEventListener("change", switchgraph);

switchgraph();

// Filters
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
	var fid = addfilterbutton.id.substring(9);
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
			if(JSON.parse(xhttp.responseText).status = true){
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
			else{
				filteroptdiv.textContent = '';
				filteroptdiv.innerHTML = '<div class="filteroptsloading">ERROR&nbsp;&nbsp;</div>';
			}			
		}
	};
	xhttp.open("GET", "getfilteropts/" + cid + "/", true);
	xhttp.send();
}
// END Filters