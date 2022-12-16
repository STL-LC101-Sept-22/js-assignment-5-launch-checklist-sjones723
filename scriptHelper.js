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
  let missionTargetEle = document.getElementById("missionTarget");
  missionTargetEle.innerHTML = `
    <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
    `;
}

function validateInput(testInput) {
  // validateInput() should take in a string as a parameter and return "Empty", "Not a Number", or "Is a Number" as appropriate.
  if (testInput.trim() === "") {
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

  // GRADING DOM MANIPULATION TEST:  Launch Checklist when fuel too low for launch Message: Expected 'red' to equal 'rgb(199, 37, 78)'.
  //setting red to test expectation of red

  let testRed = "rgb(199, 37, 78)";

  //Using template literals, update the li elements pilotStatus and copilotStatus to include the pilot's name and the co-pilot's name.
  document.getElementById(
    "pilotStatus"
  ).innerHTML = `Pilot ${pilot} is ready for launch`;
  document.getElementById(
    "copilotStatus"
  ).innerHTML = `Co-pilot ${copilot} is ready for launch`;

  // If the user submits a fuel level that is too low (less than 10,000 liters), change faultyItems to visible with an updated fuel status stating that there is not enough fuel for the journey. The text of the h2 element, launchStatus, should also change to "Shuttle not ready for launch" and the color should change to red.
  /* //turning into a else if 
    if (fuelLevel < 10000) {
    list.style.visibility = "visible";
    fuelStatusEle.innerHTML = "Fuel level too low for launch";
    launchStatusEle.style.color = testRed;
    launchStatusEle.innerHTML = "Shuttle Not Ready for Launch";
  }
  */
  //If the user submits a cargo mass that is too large (more than 10,000 kilograms), change the list to visible with an updated cargo status stating that there is too much mass for the shuttle to take off. The text of launchStatus should also change to "Shuttle not ready for launch" and the color should change to red.
  /*
  if (cargoLevel > 10000) {
    list.style.visibility = "visible";
    cargoStatusEle.innerHTML = "Cargo mass too heavy for launch";
    launchStatusEle.style.color = testRed;
    launchStatusEle.innerHTML = "Shuttle Not Ready for Launch";
  }
  */
  //   If the shuttle is ready to launch, change the text of launchStatus to green and display "Shuttle is ready for launch".
  if (cargoLevel < 10000 && fuelLevel >= 10000) {
    list.style.visibility = "hidden";
    fuelStatusEle.innerHTML = "Fuel level high enough for launch";
    cargoStatusEle.innerHTML = "Cargo mass low enough for launch";
    launchStatusEle.style.color = "rgb(65, 159, 106)";
    launchStatusEle.innerHTML = "Shuttle is Ready for Launch";
  } else if (cargoLevel >= 10000 && fuelLevel >= 10000) {
    list.style.visibility = "visible";
    fuelStatusEle.innerHTML = "Fuel level high enough for launch";
    cargoStatusEle.innerHTML = "Cargo mass too heavy for launch";
    launchStatusEle.style.color = testRed;
    launchStatusEle.innerHTML = "Shuttle Not Ready for Launch";
  } else if (cargoLevel >= 10000 && fuelLevel < 10000) {
    list.style.visibility = "visible";
    fuelStatusEle.innerHTML = "Fuel level too low for launch";
    cargoStatusEle.innerHTML = "Cargo mass too heavy for launch";
    launchStatusEle.style.color = testRed;
    launchStatusEle.innerHTML = "Shuttle Not Ready for Launch";
  } else if (cargoLevel < 10000 && fuelLevel < 10000) {
    list.style.visibility = "visible";
    fuelStatusEle.innerHTML = "Fuel level too low for launch";
    cargoStatusEle.innerHTML = "Cargo mass low enough for launch";
    launchStatusEle.style.color = testRed;
    launchStatusEle.innerHTML = "Shuttle Not Ready for Launch";
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    return response.json();
  });

  return planetsReturned;
}

function pickPlanet(planets) {
  return planets[Math.floor(Math.random() * planets.length)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
