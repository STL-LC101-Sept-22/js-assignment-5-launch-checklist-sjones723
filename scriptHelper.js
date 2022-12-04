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
  // formSubmission() will take in a document parameter and strings representing the pilot, co-pilot, fuel level, and cargo mass. Using the values in those strings and the document parameter for your HTML document, update the shuttle requirements as described below.
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
