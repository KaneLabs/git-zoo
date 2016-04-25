var routes = {}, // This will hold functions to run when pages are called.
  images = {}; // This will hold the src urls for all of the animal images.

$("nav").on("click", function(e){ // Nav click event handler.
  var tar = $(e.target); // Alias for event target.
  if(tar.hasClass("link") && !tar.hasClass("active")){ // If the target is a link and not active:
    if($(".active")[0]) $(".active").removeClass("active"); // If there is an active link, remove active class.
    tar.addClass("active"); // Add active class to target.
    routes[tar.text()](); // Run the route from the targets text.
  }
});

$("ul").on("click", function(e){ // List click event handler.
  var tar = $(e.target); //Alias for event target.
  if(tar.hasClass("animal") && !tar.hasClass("selected")){ // IF the target is an animal and not selected:
    if($(".selected")[0]) $(".selected").removeClass("selected"); // If there is a selected animal remove selected class.
    tar.addClass("selected"); // Add selected class to target.
    if($(".show")[0]) $(".show").removeClass("show"); // If there is a shown item remove show class.
    $("#" + tar.text()).addClass("show"); // Add show class to related info element.
    $("img").attr("src", images[tar.text()]); // Change image to stored animal image.
  }
});

function Page(type /*String*/, callback /*Function*/){
  type = capFirstLetter(type); // Capitalize the first letter of type.
  $("nav").append($("<div class='link'>" + type + "</div>")); // Create and append a link to the nav.
  routes[type] = function(){ // Set route for page.
    var list = $("ul")[0], // Alias for list element.
      aside = $("aside")[0]; //Alias for aside element.
    while(list.firstChild) list.removeChild(list.firstChild); // Remove all children from list.
    while(aside.firstChild) aside.removeChild(aside.firstChild); // Remove all children from aside.
    $("h2").text(""); // Empty title content.
    callback(); // Run the input callback.
  };
}

function addAnimal(animal){
  var name = capFirstLetter(animal.name), // Capitalize the first letter of animal name.
    li = $("<li class='animal'>" + name + "</li>"), // Create list element.
    info = $("<div class='info' id='" + name + "'>" + animal.info + "</div>"); // Create info element.
  $("ul").append(li); // Add list element to list.
  $("aside").append(info); // Add input and info into the aside.
  if(!images[name]) images[name] = animal.image; // Add image to object to be used later.
}

function capFirstLetter(text){ // Capitalize the first letter of text and return text.
  return text[0].toUpperCase() + text.slice(1);
}
