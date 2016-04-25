// This will create a "page" and run the callback when your page is navigated to.

Page("Mammals", function(){ // Fill in your animal Type.

  $("img").attr("src", "http://ichef.bbci.co.uk/news/660/cpsprodpb/025B/production/_85730600_monkey2.jpg"); // Change img src to one of your animal image urls.

  $("h2").text("Mammals"); // Change h2 text to the type of your animals.

  var animals = [ // Make an array of animals.
    {name: "monkey", image: "http://ichef.bbci.co.uk/news/660/cpsprodpb/025B/production/_85730600_monkey2.jpg", info: "Monkeys are haplorhine ('dry-nosed') primates, a paraphyletic group generally possessing tails and consisting of approximately 260 known living species."}, // Fill in the name, info, and image url.
    {name: "giraffe", image: "http://animals.sandiegozoo.org/sites/default/files/juicebox_slides/giraffe_ugandan.jpg", info: "The giraffe (Giraffa camelopardalis) is an African even-toed ungulate mammal, the tallest living terrestrial animal and the largest ruminant. "},
    {name: "dolphin", image: "http://i1.wp.com/cdn.bgr.com/2015/10/dolphin.jpg?w=625", info: "Dolphins are a widely distributed and diverse group of fully aquatic marine mammals. They are an informal grouping within the order Cetacea, excluding whales and porpoises, so to zoologists the grouping is paraphyletic. "} // Make anywhere between 3 and 9 animals.
  ];

  for(var i = 0; i < animals.length; i++){ // Loop over your animals.
    addAnimal(animals[i]); // Pass each animal object into the addAnimal function.
  }

});
