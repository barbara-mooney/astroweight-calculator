// Write your JavaScript code here!
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
];
    
planets.forEach(addPlanetToList);
function addPlanetToList(item, index) {
    var option = document.createElement("option");
    var text = document.createTextNode(item[0]);
    option.appendChild(text);
    document.getElementById("planets").appendChild(option);
}

var userweight;
var planetName;

$(document).ready(function() {
    $("#calculate-button").click(handleClickEvent)
})

function handleClickEvent() {
    calculateWeight();
}

function calculateWeight() {
    var userWeight = document.getElementById("user-weight").value;
    console.log(userWeight);
    var planetName = document.getElementById("planets").value;
    console.log(planetName);
    
    for (var i = 0; i < planets.length; i++) {
        for (var j = 0; j < planets[i].length; j++) {
            if (planets[i][j] == planetName) {
                console.log(planets[i][j]);
                var planetCoeficient = planets[i][1];
                console.log(planetCoeficient);
                var result = userWeight * planetCoeficient;
                console.log(userWeight);
                console.log(result);
                return $("#output").append("<span>If you were on " + planetName + ", you would weight " + result + "lbs!</span>");
            }        
        }
    }
}
