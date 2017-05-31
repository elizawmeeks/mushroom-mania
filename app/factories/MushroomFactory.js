"use strict";

app.factory("MushroomFactory", function($q, $http, FBCreds){
	let getMushrooms = () => {
		return $q((resolve, reject) => {
			// $http.get(`${FBCreds.databaseURL}/mushrooms.json`)
			$http.get(`https://mushroom-mania-76a0b.firebaseio.com/mushrooms.json`)
			.then( (mushroomObj) => {
				let mushrooms = {};
				mushrooms.shrooms = [];
				for (let object in mushroomObj.data){
					mushrooms.shrooms.push(mushroomObj.data[object]);
				}
				resolve(mushrooms);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	return {getMushrooms};
});