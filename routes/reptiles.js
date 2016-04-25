// This will create a "page" and run the callback when your page is navigated to.

Page("Reptiles", function(){ // Fill in your animal Type.

  $("img").attr("src", "https://i.kinja-img.com/gawker-media/image/upload/tdikvy2lfceubj3j1wxc.jpg"); // Change img src to one of your animal image urls.

  $("h2").text("Reptiles"); // Change h2 text to the type of your animals.

  var animals = [ // Make an array of animals.
    {name: "Crocodile", image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Nile_crocodile_head.jpg", info: "Crocodiles (subfamily Crocodylinae) or true crocodiles are large aquatic reptiles that live throughout the tropics in Africa, Asia, the Americas and Australia. Crocodylinae, all of whose members are considered true crocodiles, is classified as a biological subfamily."}, // Fill in the name, info, and image url.
    {name: "Green sea turtle", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Green_turtle_swimming_over_coral_reefs_in_Kona.jpg/1280px-Green_turtle_swimming_over_coral_reefs_in_Kona.jpg", info: "The green sea turtle (Chelonia mydas), also known as the green turtle, black (sea) turtle, or Pacific green turtle,[3] is a large sea turtle of the family Cheloniidae. "},
    {name: "Sphenodon punctatus", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Sphenodon_punctatus_in_Waikanae%2C_New_Zealand.jpg/1280px-Sphenodon_punctatus_in_Waikanae%2C_New_Zealand.jpg", info: "Tuatara are reptiles endemic to New Zealand and which, although resembling most lizards, are part of a distinct lineage, the order Rhynchocephalia."} // Make anywhere between 3 and 9 animals.
  ];

  for(var i = 0; i < animals.length; i++){ // Loop over your animals.
    addAnimal(animals[i]); // Pass each animal object into the addAnimal function.
  }

});
