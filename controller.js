angular.module("GoldRush")
.controller("GoldController", goldFunction);

function goldFunction() {
	var gCtrl = this;
	gCtrl.greeting ="whatup bitches!"

	// create empty array for list of markers to display on page
	gCtrl.markers = [];

	// ngClick function 
	gCtrl.addMarker = function($event){
		var marker = {
			x: $event.clientX,
			y: $event.clientY,
			hide: false
		}
		console.log("Add a new marker to the list:", marker);

		// add the new marker into our list of markers
		gCtrl.markers.push(marker)
		console.log("The new markers list is: ", gCtrl.markers)
	}
	gCtrl.hideMarker = function($index){
		console.log("Trying to hide maker at: " + $index, gCtrl.markers[$index]);
		gCtrl.markers[$index].hide =true;
	}
	gCtrl.showMarkers = function(){
		for(var i = 0; i< gCtrl.markers.length; i++){
			gCtrl.markers[i].hide = false;
		}
	}
	gCtrl.hideAllMarkers = function(){
		for(var i = 0; i< gCtrl.markers.length; i++){
			gCtrl.markers[i].hide = true;
		}
	}
}

