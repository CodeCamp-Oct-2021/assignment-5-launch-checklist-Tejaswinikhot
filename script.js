// Write your JavaScript code here!

//const { myFetch } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse=myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let selectedPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(this.window.document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);
   });

   list = document.getElementById("faultyItems").style.visibility="hidden";ß

   let form = document.querySelector("form");
      form.addEventListener("submit", function(event) {
         //let pilot = document.querySelector("input[name=pilotName]");
         let pilot = document.getElementById('pilotName');
         let copilot = document.querySelector("input[name=copilotName]");
         let fuelLevel = document.querySelector("input[name=fuelLevel]");
         let cargoMass = document.querySelector("input[name=cargoMass]");
         let list = [];
         let isValid =  true;
         if (validateInput(pilot.value ) === "Empty" || validateInput(copilot.value ) === "Empty" || 
                validateInput(fuelLevel.value ) === "Empty"  || validateInput(cargoMass.value ) === "Empty" ) {
            isValid =  false;
            alert("All fields are required!");
         }
         if (validateInput(fuelLevel.value ) === "Not a Number" ) {
            isValid =  false;
            alert("Fuel Level (L) should be number!");
         }
         if (validateInput(cargoMass.value ) === "Not a Number") { 
            isValid =  false;
            alert(" Cargo Mass (kg) should be number!");
         }
         event.preventDefault();
         
         if(isValid) {
            formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoMass.value);
         }
         
      });
   // });
   
});