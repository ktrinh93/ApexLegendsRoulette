var locations = [];
var legends = [];

var lastLocation = "";
var lastLegend = "";

$(document).ready(function() {

    createLocations();
    createLegends();

    pickDropLocation();
    pickLegend();

    $("#location-button").on("click", function() {
        pickDropLocation();
    });

    $("#legend-button").on("click", function() {
        pickLegend();
    });

    $("#reroll-button").on("click", function() {
        pickDropLocation();
        pickLegend();
    })

});

function pickDropLocation() {
    var location = locations[Math.floor(Math.random()*locations.length)];
    while(location == lastLocation) {
        location = locations[Math.floor(Math.random()*locations.length)];
    }
        
    $("#location").text(location.name);
    
    var rarity = location.rarity;
    var style = "color: " + location.color;

    $("#loot-rarity").attr("style", style);
    $("#loot-rarity").text(rarity + " Tier Loot");
    
    var circleID = location.name.toLowerCase();
    circleID = circleID.replace(" ", "-");
    circleID = circleID.replace("'", "");

    var imgURL = "assets/images/" + circleID + ".png";

    $("#locations").attr("src", imgURL);

    lastLocation = location;
}

function pickLegend() {
    var legend = legends[Math.floor(Math.random()*legends.length)];
    while(legend == lastLegend) {
        legend = legends[Math.floor(Math.random()*legends.length)];
    }

    $("#legend-name").text(legend.name);
    $("#legend-class").text(legend.lClass);
    $("#legend-portrait").attr("src", "assets/images/legends/" + legend.name.toLowerCase() + ".png");

    lastLegend = legend;
}

// object constructor for drop locations
function DropLocation(name, rarity) {
    this.name = name;
    this.rarity = rarity;
    this.color = null;

    if(this.rarity == "High") {
        this.color = "#C44EF8";
    }
    else if(this.rarity == "Mid") {
        this.color = "#60C2F5";
    }
    else {
        this.color = "gray";
    }
}

// function to create drop location objects and push them to array
function createLocations() {
    var artillery = new DropLocation("Artillery", "High");
    var slumlakes = new DropLocation("Slum Lakes", "Mid");
    var relay = new DropLocation("Relay", "High");
    var runoff = new DropLocation("Runoff", "High");
    var pit = new DropLocation("The Pit", "High");
    var cascades = new DropLocation("Cascades", "Mid");
    var wetlands = new DropLocation("Wetlands", "Mid");
    var airbase = new DropLocation("Air Base", "High");
    var bunker = new DropLocation("Bunker", "High");
    var swamps = new DropLocation("Swamps", "High");
    var bridges = new DropLocation("Bridges", "Mid");
    var hydrodam = new DropLocation("Hydro Dam", "Low");
    var market = new DropLocation("Market", "Low");
    var skulltown = new DropLocation("Skull Town", "Mid");
    var thunderdome = new DropLocation("Thunderdome", "High");
    var repulsor = new DropLocation("Repulsor", "High");
    var watertreatment = new DropLocation("Water Treatment", "High");
    
    // apexmap.io
    var artillerytunnel = new DropLocation("Artillery Tunnel", "Low");
    var artilleryunderpass = new DropLocation("Artillery Underpass", "Low");
    var watchtowernorth = new DropLocation("Watchtower North", "High");
    var farm = new DropLocation("The Farm", "Mid");
    var riversend = new DropLocation("River's End", "Mid");
    var westsettlement = new DropLocation("West Settlement", "Mid");
    var southsettlement = new DropLocation("South Settlement", "Mid");
    var eastsettlement = new DropLocation("East Settlement", "Low");
    var highdesert = new DropLocation("High Desert", "Low");
    var shatteredforest = new DropLocation("Shattered Forest", "Low");
    var landingpad = new DropLocation("Landing Pad", "Low");
    var watchtowersouth = new DropLocation("Watchtower South", "High");

    var supplyship = new DropLocation("Supply Ship", "High");
    var hotzone = new DropLocation("Hot Zone", "High");
    
    locations.push(artillery);
    locations.push(slumlakes);
    locations.push(relay);
    locations.push(runoff);
    locations.push(pit);
    locations.push(cascades);
    locations.push(wetlands);
    locations.push(airbase);
    locations.push(bunker);
    locations.push(swamps);
    locations.push(bridges);
    locations.push(hydrodam);
    locations.push(market);
    locations.push(skulltown);
    locations.push(thunderdome);
    locations.push(repulsor);
    locations.push(watertreatment)
    
    locations.push(artillerytunnel);
    locations.push(artilleryunderpass);
    locations.push(watchtowernorth);
    locations.push(farm);
    locations.push(riversend);
    locations.push(westsettlement);
    locations.push(southsettlement);
    locations.push(eastsettlement);
    locations.push(highdesert);
    locations.push(shatteredforest);
    locations.push(landingpad);
    locations.push(watchtowersouth);

    locations.push(supplyship);
    locations.push(hotzone);
}

// object constructor for legends
function Legend(name, lClass) {
    this.name = name;
    this.lClass = lClass;
}

// function to create legend objects and push them to array
function createLegends() {
    var pathfinder = new Legend("Pathfinder", "Support");
    var lifeline = new Legend("Lifeline", "Support");
    var bloodhound = new Legend("Bloodhound", "Tracker");
    var gibraltar = new Legend("Gibraltar", "Defense");
    var wraith = new Legend("Wraith", "Offense");
    var bangalore = new Legend("Bangalore", "Offense");
    var caustic = new Legend("Caustic", "Defense");
    var mirage = new Legend("Mirage", "Offense");
    
    legends.push(pathfinder);
    legends.push(lifeline);
    legends.push(bloodhound);
    legends.push(gibraltar);
    legends.push(wraith);
    legends.push(bangalore);
    legends.push(caustic);
    legends.push(mirage);
}