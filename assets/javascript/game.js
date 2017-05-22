
$(document).ready(function() {
  console.log('game.js loaded');

  // we first define a random number generator function
  function generateRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  var winTally = 0;
  var loseTally = 0;
  
  // here we set the counter
  var counter = 0;

  // here we set the target number by calling the random number generator
  var targetNumber = generateRandom(19, 120);
  $("#number-to-guess").text(targetNumber);
  console.log('target number is: ' + targetNumber);

  // Now we generate 4 unique random number values for the 4 crystals.
  var firstNumber = generateRandom(1, 12);
  console.log('first number is: ' + firstNumber);

  var secondNumber = generateRandom(1, 12);
  console.log('second number is: ' + secondNumber)

  while (secondNumber === firstNumber) {
  secondNumber = generateRandom(1,12);
  console.log('second number is regenerated to: ' + secondNumber);
  }

  var thirdNumber = generateRandom(1, 12);
  console.log('third number is: ' + thirdNumber)

  while (thirdNumber === firstNumber || thirdNumber === secondNumber) {
  thirdNumber = generateRandom(1, 12);
  console.log('third number is regenerated to: ' + thirdNumber);
  }

  var fourthNumber = generateRandom(1, 12);
  console.log('fourth number is: ' + fourthNumber)

  while (fourthNumber === firstNumber || fourthNumber === secondNumber || fourthNumber === thirdNumber) {
  fourthNumber = generateRandom(1, 12);
  console.log('fourth number is regenerated to: ' + fourthNumber);
  }
 
//  var numberOptions = [];
  // Next we create a for loop to create crystals for every numberOption.
//  for (var i = 0; i < numberOptions.length; i++) {
//  for (var i = 0; i < 4; i++) {

// we will then create 4 imageCrystals
  var redCrystal = $("<img>");
  var blueCrystal = $("<img>");
  var yellowCrystal = $("<img>");
  var greenCrystal = $("<img>");
  // First each crystal will be given the class ".crystal-image".
  // This will allow the CSS to take effect.
  redCrystal.addClass("crystal-image");
  blueCrystal.addClass("crystal-image");
  yellowCrystal.addClass("crystal-image");
  greenCrystal.addClass("crystal-image");
  // Each imageCrystal will be given a src link to the crystal image
  redCrystal.attr("src", "./assets/images/red.png");
  blueCrystal.attr("src", "./assets/images/blue.png");
  yellowCrystal.attr("src", "./assets/images/yellow.png");
  greenCrystal.attr("src", "./assets/images/green.png");
  // Each imageCrystal will be given a data attribute called data-crystalValue.
  // This data attribute will be set equal to the array value.
  redCrystal.attr("data-crystalvalue", firstNumber);
  blueCrystal.attr("data-crystalvalue", secondNumber);
  yellowCrystal.attr("data-crystalvalue", thirdNumber);
  greenCrystal.attr("data-crystalvalue", fourthNumber);
  // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  $("#crystals").append(redCrystal);
  $("#crystals").append(blueCrystal);
  $("#crystals").append(yellowCrystal);
  $("#crystals").append(greenCrystal);

  // This time, our click event applies to every single crystal on the page. Not just one.
  $(".crystal-image").on("click", function() {
    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;
    // All of the same game win-lose logic applies. So the rest remains unchanged.
    $("#score").text(counter);
    if (counter === targetNumber) {
      $("#win-lose-notice").text("You win!!");
      winTally = winTally + 1;
      counter = 0;
      $("#score").text(counter);
      $("#number-of-wins").text(winTally);
      targetNumber = generateRandom(19, 120);
      $("#number-to-guess").text(targetNumber);
    }
    else if (counter >= targetNumber) {
      $("#win-lose-notice").text("You lose!!");
      loseTally = loseTally + 1;
      $("#number-of-losses").text(loseTally);
      counter = 0;
      $("#score").text(counter);
      targetNumber = generateRandom(19, 120);
      $("#number-to-guess").text(targetNumber);
    }
  });
});
