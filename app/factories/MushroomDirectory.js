"use strict";
console.log("Shroom Directory info handler");

app.factory("MushroomDirectory", function($q, $http){
    let getShrooms = () => {
        return $q ((resolve, reject)=>{
            $http.get(`https://exercisedb-20924.firebaseio.com/mushroom-mania/mushrooms.json`)
            .then((itemObject) =>{
                
                let itemCollection = itemObject.data;
                console.log("from factory", itemCollection);
                resolve(itemCollection);
            })
            .catch((error)=>{
                reject(error);
            });
        });
    };
    return {getShrooms};
});