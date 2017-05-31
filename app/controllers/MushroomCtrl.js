"use strict";

app.controller("MushroomCtrl", function($scope, MushroomFactory){
	MushroomFactory.getMushrooms()
	.then(function(mushroomCollection){
		console.log("mushroomCollection", mushroomCollection);
		console.log(".shrooms", mushroomCollection.shrooms);
		$scope.shrooms = mushroomCollection.shrooms;
		return $scope.shrooms;
	})
	.then( (shrooms) => {
		$scope.edible = (value) => {
			let sortedShrooms = [];
			if ( value === "edible" ){
				shrooms.forEach(function(element){
					if (element.edible === true ){
						sortedShrooms.push(element);
					}
					$scope.shrooms = sortedShrooms;
				});
			} else if ( value === "inedible" ){
				shrooms.forEach(function(element){
					if (element.edible === false ){
						sortedShrooms.push(element);
					}
					$scope.shrooms = sortedShrooms;
				});
			} else {
				$scope.shrooms = shrooms;
			}
		};
	});
});