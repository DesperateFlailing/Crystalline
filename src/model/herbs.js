var herbs = {
    data : [
        {
            name: "Aloe",
            properties: ["protection", "luck"]
        },
        {
            name: "Anise",
            properties: ["protection", "purification", "youth"]
        },
        {
            name: "Apple",
            properties: ["love", "healing", "garden magic", "immortality"]
        },
        {
            name: "Apricot",
            properties: ["love"]
        },
        {
            name: "Basil",
            properties: ["love", "healing", "protection"]
        },
        {
            name: "Barley",
            properties: ["love", "exorcism", "wealth", "flying", "protection"]
        },
        {
            name: "Bay",
            properties: ["protection", "psychic powers", "healing", "purification", "strength"]
        }
    ]
}

herbs.listHerbs = function() {
    var lst = [];
    for (var idx = 0; idx < herbs.data.length; ++idx) {
        lst.push(herbs.data[idx].name);
    }
    return lst;
}

herbs.getHerb = function(name) {
    for (var idx = 0; idx < herbs.data.length; ++idx) {
        if (herbs.data[idx].name === name) 
            return herbs.data[idx];
    }
    return null;
}

module.exports = herbs;