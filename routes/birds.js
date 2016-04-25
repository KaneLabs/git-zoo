// This will create a "page" and run the callback when your page is navigated to.

Page("birds", function(){ // Fill in your animal Type.

  $("img").attr("src", "http://www.audubon.org/sites/default/files/2548692902_73e058b662_z.jpg"); // Change img src to one of your animal image urls.

  $("h2").text("Birds"); // Change h2 text to the type of your animals.

  var animals = [ // Make an array of animals.
    {name: "Rhinoceros Hornbill", image: "http://www.audubon.org/sites/default/files/2548692902_73e058b662_z.jpg", info: "The rhinoceros hornbill is one of the largest hornbills, adults being approximately the size of a swan, 91–122 cm long and weighing 2–3 kg. In captivity it can live for up to 90 years."}, // Fill in the name, info, and image url.
    {name: "Königsgeier King Vulture", image: "http://kids.nationalgeographic.com/content/dam/kids/photos/articles/Other%20Explore%20Photos/R-Z/Wacky%20Weekend/Strange%20Birds/ww-birds-king-vulture.jpg.adapt.945.1.jpg", info: "The king vulture is a large bird found in Central and South America. It is a member of the New World vulture family Cathartidae. This vulture lives predominantly in tropical lowland forests stretching from southern Mexico to northern Argentina."}, // Fill in the name, info, and image url.
    {name: "Potoo", image: "https://s-media-cache-ak0.pinimg.com/736x/c0/f5/49/c0f5492d59cfe73265769f5234c1cadd.jpg", info: "Potoos are a group of near passerine birds related to the nightjars and frogmouths. They are sometimes called poor-me-ones, after their haunting calls. There are seven species in one genus, Nyctibius, in tropical Central and South America."},
    {name: "Shoebill", image: "http://www.crystalkiss.com/wp-content/uploads/2009/11/Bird-food1.jpg", info: "The shoebill also known as whalehead or shoe-billed stork, is a very large stork-like bird. It derives its name from its massive shoe-shaped bill."}, // Make anywhere between 3 and 9 animals.
    {name: "Strange Bird of Paradise", image: "http://img.turtlehurtled.com/strangest-animals/superb-bird-of-paradise.jpg", info: "The birds-of-paradise are members of the family Paradisaeidae of the order Passeriformes. The majority of species are found in eastern Indonesia, Papua New Guinea, and eastern Australia. The family has 42 species in 14 genera."}, // Make anywhere between 3 and 9 animals.
    {name: "Trump Bird", image: "http://www.postworks-janstel.nl/portfolio-thumbs/jan-stel_post-production_18t.jpg", info: "Talking birds mimic the spoken words of humans. The trump bird has so many words. The best words."} // Make anywhere between 3 and 9 animals.
  ];

  for(var i = 0; i < animals.length; i++){ // Loop over your animals.
    addAnimal(animals[i]); // Pass each animal object into the addAnimal function.
  }

});
