// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let innerHTML =`
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">`;
    document.getElementById('missionTarget').innerHTML = innerHTML;
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    }
    else if (isNaN(testInput)) {
        return "Not a Number";
    }
    else {
        return "Is a Number";
    }
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {


   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let h2 = document.getElementById("launchStatus");
   list = document.getElementById("faultyItems");

   // Shuttle should be not be ready for launch, fuel too low, cargo too high
  if (fuelLevel < 10000 && cargoLevel > 10000) {
   list.style.visibility="visible";
   h2.style.color = "rgb(199, 37, 78)";
   h2.textContent="Shuttle Not Ready for Launch";
   pilotStatus.textContent=`Pilot ${pilot} is ready for launch`;
   copilotStatus.textContent=`Co-pilot ${copilot} is ready for launch`;
   fuelStatus.textContent="Fuel level too low for launch";
   cargoStatus.textContent="Cargo mass too heavy for launch";
  }
  // Shuttle should be not be ready for launch, fuel too low
  else if (fuelLevel < 10000) {
    list.style.visibility="visible";
    h2.style.color = "rgb(199, 37, 78)";
    h2.textContent="Shuttle Not Ready for Launch";
    pilotStatus.textContent=`Pilot ${pilot} is ready for launch`;
    copilotStatus.textContent=`Co-pilot ${copilot} is ready for launch`;
    fuelStatus.textContent="Fuel level too low for launch";
    cargoStatus.textContent="Cargo mass low enough for launch";
  }
  // Shuttle should not be ready for launch, cargo too high
  else if (cargoLevel > 10000) {
   list.style.visibility="visible";
   h2.style.color = "rgb(199, 37, 78)";
   h2.textContent="Shuttle Not Ready for Launch";
   pilotStatus.textContent=`Pilot ${pilot} is ready for launch`;
   copilotStatus.textContent=`Co-pilot ${copilot} is ready for launch`;
   fuelStatus.textContent="Fuel level high enough for launch";
   cargoStatus.textContent="Cargo mass too heavy for launch";
  }
  else {
   // Check page before form submission to make sure everything is working
   list.style.visibility="visible";
   h2.style.color = "rgb(65, 159, 106)";
   h2.textContent="Shuttle is Ready for Launch";
   pilotStatus.textContent=`Pilot ${pilot} is ready for launch`;
   copilotStatus.textContent=`Co-pilot ${copilot} is ready for launch`;
   fuelStatus.textContent="Fuel level high enough for launch";
   cargoStatus.textContent="Cargo mass low enough for launch";
  }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let randomPlanetSelected = Math.floor(Math.random() * 6);
    return planets[randomPlanetSelected];

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
