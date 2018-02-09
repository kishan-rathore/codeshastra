var map;
var carsdatajson;
var markers = [];
var myCenter = {lat: 19.1241666667, lng: 72.9224933333};

function createmarkers(){
	numcars = carsdatajson.data.length;
	var greenpin = new google.maps.MarkerImage("http://www.googlemapsmarkers.com/v1/7cfc00/")
	var redpin = new google.maps.MarkerImage("http://www.googlemapsmarkers.com/v1/ff0000/")
	for(var i = 0; i < numcars; i++){
		if(carsdatajson.data[i].ontrip == true){
			// for(var j = 0; j < 10000; j++){
			// var contentString = '<p> Device ID:'
			// 						+ carsdatajson.data[i] +
			// 					'</p>';
			// var infowindow = new google.maps.InfoWindow({
			//   content: contentString
			// });
			var marker = new google.maps.Marker({
				position: {lat: carsdatajson.data[i].lat, lng: carsdatajson.data[i].lon},
				icon: greenpin,
			});
			// marker.addListener('click', function() {
			//   infowindow.open(map, marker);
			// });
			markers.push(marker);
			// }
		}
		else{
			var marker = new google.maps.Marker({
				position: {lat: carsdatajson.data[i].lat, lng: carsdatajson.data[i].lon},
				icon: redpin,
			});
			markers.push(marker);
		}
	}
}

function showallcars(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if (xhttp.readyState == 4 && xhttp.status == 200){
			carsdatajson = JSON.parse(xhttp.responseText);
			console.log(carsdatajson);
			createmarkers();
			var markerCluster = new MarkerClusterer(map, markers, {
				imagePath: clusterimgpath,
				maxZoom: 12,
				zoomOnClick: false,
				minimumClusterSize: 6,
			});
		}
	};
	// xhttp.open("GET", "http://carnot-cloud.heokuapp.com/users/ICICI/get_carsdata/", true);
	xhttp.open("GET", "../get_carsdata/", true);
	xhttp.send();
}

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: myCenter,
		zoom: 5
	});

	showallcars();
}

// function showmarkers(arr_markers){
// 	for(var i = 0; i < arr_markers.length; i++){
// 		arr_markers[i].setMap(map);
// 	}
// }

// function hidemarkers(arr_markers){
// 	for(var i = 0; i < arr_markers.length; i++){
// 		arr_markers[i].setMap(null);
// 	}
// }
