"use strict";
console.log("Shroom Directory info handler");

app.factory("MushroomDirectory", function($q, $http){
    let getShrooms = () => {
        return $q ((resolve, reject)=>{
            $http.get('data/shrooms.json')
            .then((itemObject) =>{
                let itemCollection = itemObject.data;
                console.log("from factory", itemCollection);
                resolve(itemCollection.mushrooms);
            })
            .catch((error)=>{
                reject(error);
            });
        });
    };
    return {getShrooms};
});