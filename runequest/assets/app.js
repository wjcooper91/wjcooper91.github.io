$(document).ready(function() {

var targetNumber = Math.floor(Math.random() * ((120-19)+1) + 19);

$("#number-to-guess").text(targetNumber);

var crystalnum1 = Math.floor(Math.random() * ((12-1)+1) + 1);
var crystalnum2 = Math.floor(Math.random() * ((12-1)+1) + 1);
var crystalnum3 = Math.floor(Math.random() * ((12-1)+1) + 1);
var crystalnum4 = Math.floor(Math.random() * ((12-1)+1) + 1);

var crystals = $("#crystals")

var counter = 0;
var win = 0;
var loss = 0;

// We begin by expanding our array to include four options.
var numberOptions = [crystalnum1, crystalnum2, crystalnum3, crystalnum4];

var images = ["/Users/williamcooper/workspace/homework/04/assets/images/rune1.png", "/Users/williamcooper/workspace/homework/04/assets/images/rune2.png", "/Users/williamcooper/workspace/homework/04/assets/images/rune3.png", "/Users/williamcooper/workspace/homework/04/assets/images/rune4.png"]

// Next we create a for loop to create crystals for every numberOption.
for (var i = 0; i < numberOptions.length; i++) {

  // For each iteration, we will create an imageCrystal
  var imageCrystal = $("<img>");

  // First each crystal will be given the class ".crystal-image".
  // This will allow the CSS to take effect.
  imageCrystal.addClass("crystal-image");

  // Each imageCrystal will be given a src link to the crystal image
  imageCrystal.attr('src', images[i]);

  // Each imageCrystal will be given a data attribute called data-crystalValue.
  // This data attribute will be set equal to the array value.
  imageCrystal.attr("data-crystalvalue", numberOptions[i]);

  // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  crystals.append(imageCrystal);
}

// This time, our click event applies to every single crystal on the page. Not just one.
crystals.on("click", ".crystal-image", function() {

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
  counter++;
    $("#score").html(counter);

  if (counter === targetNumber) {
    win++;
    $("#wins").html(win);
    reset();
  }

  else if (counter >= targetNumber) {
    loss++;
    $("#losses").html(loss);
    reset();
  }

  function genisis(){
  targetNumber = Math.floor(Math.random() * ((120-19)+1) + 19);
  $("#number-to-guess").text(targetNumber);
}

  function reset(){
      $("#score").empty();
      counter = 0;
      targetNumber = [];
      genisis();
  }

});
});