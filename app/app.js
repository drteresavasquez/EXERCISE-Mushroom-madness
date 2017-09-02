"use strict";

var app = angular.module("MushroomApp", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'app/partials/mushroomList.html',
        controller: "MushroomCtrl"
    }).
    otherwise('/');
});