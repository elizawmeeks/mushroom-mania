"use strict";

var app = angular.module("MushroomApp", ["ngRoute"]);

app.config( ($routeProvider) => {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/mushroom-list.html',
		controller: 'MushroomCtrl'
	});
});

app.run(($location, FBCreds) => {
	let creds = FBCreds;
	let authConfig = {
		apiKey: creds.apiKey,
		authDomain: creds.authDomain
	};
	firebase.initializeApp(authConfig);
});