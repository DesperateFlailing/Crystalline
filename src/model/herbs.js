var herbs = {
    data : [
        {
            id: "aloe",
            name: "Aloe",
            properties: ["protection", "luck"]
        },
        {
            id : "anise",
            name: "Anise",
            properties: ["protection", "purification", "youth"]
        },
        {
            id : "apple",
            name: "Apple",
            properties: ["love", "healing", "garden magic", "immortality"]
        },
        {
            id : "apricot",
            name: "Apricot",
            properties: ["love"]
        },
        {
            id : "basil",
            name: "Basil",
            properties: ["love", "healing", "protection"]
        },
        {
            id : "barley",
            name: "Barley",
            properties: ["love", "exorcism", "wealth", "flying", "protection"]
        },
        {
            id : "bay",
            name: "Bay",
            properties: ["protection", "psychic powers", 
"healing", "purification", "strength"]
        }
    ]
}
 
herbs.listHerbs = function() {
    var lst = [];
    for (var idx = 0; idx < herbs.data.length; ++idx) {
        lst.push({ id : herbs.data[idx].id, name : herbs.data[idx].name });
    }
    return lst;
}
 
herbs.getHerb = function(id) {
    for (var idx = 0; idx < herbs.data.length; ++idx) {
        if (herbs.data[idx].id === id) 
            return herbs.data[idx];
    }
    return null;
}
 
module.exports = herbs;