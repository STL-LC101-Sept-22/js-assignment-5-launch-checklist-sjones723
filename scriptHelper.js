// Write your helper functions here!
require("isomorphic-fetch");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  // Here is the HTML formatting for our mission target div.
  /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
  // validateInput() should take in a string as a parameter and return "Empty", "Not a Number", or "Is a Number" as appropriate.
  if (testInput === "") {
    return "Empty";
  } else if (isNaN(testInput) === false) {
    return "Is a Number";
  }

  return "Not a Number";
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  // formSubmission() will take in a document parameter and strings representing the pilot, co-pilot, fuel level, and cargo mass. Using the values in those strings and the document parameter for your HTML document, update the shuttle requirements


  //creating nicknames for elements by id 
  let launchStatusEle = document.getElementById("launchStatus");
  let cargoStatusEle = document.getElementById("cargoStatus");
  let fuelStatusEle = document.getElementById("fuelStatus");

  //Using template literals, update the li elements pilotStatus and copilotStatus to include the pilot's name and the co-pilot's name.
  document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready.`;
  document.getElementById(
    "copilotStatus"
  ).innerHTML = `Co-Pilot ${copilot} is ready.`;

  // If the user submits a fuel level that is too low (less than 10,000 liters), change faultyItems to visible with an updated fuel status stating that there is not enough fuel for the journey. The text of the h2 element, launchStatus, should also change to "Shuttle not ready for launch" and the color should change to red.
  if (fuelLevel < 10000) {
    list.style.visibility = "visible";
    fuelStatusEle.innerHTML = "There is not enough fuel for the journey.";
    launchStatusEle.style.color = "red";
    launchStatusEle.innerHTML = "Shuttle not ready for launch";
  }
  //If the user submits a cargo mass that is too large (more than 10,000 kilograms), change the list to visible with an updated cargo status stating that there is too much mass for the shuttle to take off. The text of launchStatus should also change to "Shuttle not ready for launch" and the color should change to red.
  if (cargoLevel > 10000) {
    list.style.visibility = "visible";
    cargoStatusEle.innerHTML =
      "There is too much mass for the shuttle to take off.";
    launchStatusEle.style.color = "red";
    launchStatusEle.innerHTML = "Shuttle not ready for launch";
  }
  //   If the shuttle is ready to launch, change the text of launchStatus to green and display "Shuttle is ready for launch".
  if (cargoLevel < 10000 && fuelLevel > 10000) {
    list.style.visibility = "visible";
    fuelStatusEle.innerHTML = "Fuel level high enough for launch";
    cargoStatusEle.innerHTML = "Cargo mass low enough for launch";
    launchStatusEle.style.color = "green";
    launchStatusEle.innerHTML = "Shuttle is ready for launch";
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch().then(function (response) {});

  return planetsReturned;
}

function pickPlanet(planets) {}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
