// This is the "homepage" for the website.

Page("Zoo", function(){

  $("img").attr("src", "http://i.imgur.com/bF4DV8c.jpg");

  $("h2").text("Zoo");

  var animals = [
    {name: "Pages", image: "http://www.ejphoto.com/images_MB/MB_ArcticFox04.jpg", info: "The pages change by removing everything in the main + aside elements and filling in the templates with animal data."},
    {name: "Animals", image: "https://i.ytimg.com/vi/3GjPYXgFXPQ/maxresdefault.jpg", info: "The animals are stored with name, image url, and an information property that can be filled in with anything."},
    {name: "Collaboration", image: "http://i.imgur.com/JGfY1ab.jpg", info: "I just wanted to make it easy to finish, hopefully I didn't do too much."}
  ];

  for(var i = 0; i < animals.length; i++){
    addAnimal(animals[i]);
  }
});

// This sets the first route as Zoo.
// Don't copy this part for other routes.
$(".link")[0].classList.add("active");
routes["Zoo"]();
