// This will create a "page" and run the callback when your page is navigated to.

Page("", function(){ // Fill in your animal Type.

  $("img").attr("src", ""); // Change img src to one of your animal image urls.

  $("h2").text(""); // Change h2 text to the type of your animals.

  var animals = [ // Make an array of animals.
    {name: "", image: "", info: ""}, // Fill in the name, info, and image url.
    {name: "", image: "", info: ""},
    {name: "", image: "", info: ""} // Make anywhere between 3 and 9 animals.
  ];

  for(var i = 0; i < animals.length; i++){ // Loop over your animals.
    addAnimal(animals[i]); // Pass each animal object into the addAnimal function.
  }

});
