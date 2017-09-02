"use strict";
console.log("shrooms crtl, yo!");

app.controller("MushroomCtrl", function ($scope, MushroomDirectory) {
    MushroomDirectory.getShrooms()
        .then(function (shroomCollection) {
            let shroomArray = [];
            let shrooms = Object.keys(shroomCollection);
            shrooms.forEach((item) => {
                shroomArray.push(shroomCollection[item]);
            });
            console.log("mushroomArray", shroomArray);
            $scope.shrooms = shroomArray;
        });

});