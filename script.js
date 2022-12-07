// Write your JavaScript code here!

window.addEventListener("load", function () {
  let form = document.querySelector("form");
  // storing element input keys
  let pilotNameInput = document.querySelector("input[name=pilotName]");
  let copilotNameInput = document.querySelector("input[name=copilotName]");
  let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
  let cargoMassInput = document.querySelector("input[name=cargoMass]");

  //The list of shuttle requirements, the div id=faultyItems
  let list = document.getElementById("faultyItems");

  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      //console.log('calling pick planet worked',pickPlanet(listedPlanets))
      let destination = pickPlanet(listedPlanets);
      addDestinationInfo(
        document,
        destination.name,
        destination.diameter,
        destination.star,
        destination.distance,
        destination.moons,
        destination.image
      );
    });

  form.addEventListener("submit", function (event) {
    //Use preventDefault() to prevent a request from being sent out and the page reloading.
    event.preventDefault();
    //validate The user entered something for every field.
    if (
      pilotNameInput.value === "" ||
      copilotNameInput.value === "" ||
      fuelLevelInput.value === "" ||
      cargoMassInput.value === ""
    ) {
      alert("All fields are required!");
    }
    //Validate - The user entered text for names and numbers for fuel and cargo levels.
      //https://www.w3resource.com/javascript/form/all-letters-field.php
      //https://www.w3resource.com/javascript/form/all-numbers.php
    let letters = /^[A-Za-z]+$/;
    let numbers = /^[-+]?[0-9]+$/
    if(!pilotNameInput.value.match(letters) || !copilotNameInput.value.match(letters)||
    !fuelLevelInput.value.match(numbers)||
    !cargoMassInput.value.match(numbers)){
      alert("Make sure to enter valid information for each field!");
    }else{
    formSubmission(
      document,
      list,
      pilotNameInput.value,
      copilotNameInput.value,
      fuelLevelInput.value,
      cargoMassInput.value
    );
  }
  });
});


 //