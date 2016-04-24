/* The Page function creates a "page" for a type of animal. */
/* The first input is the type of animal as a String. */
/* The second input is a function that will run when the page is called. */

Page(/* Your animal type */, function(){

  /* Change $("img") src to one of your animals. */

  /* Change $(".type") text to the type of your animals. */

  /* Make an array of animals. */
  /* Fill in the name, info, and image url. */
  var animals = [
    {name: "", image: "", info: ""}
  ];

  /* Loop over your animals.*/
  for(var i = 0; i < animals.length; i++){
    /* Pass each animal object into the addAnimal function. */
    addAnimal(animals[i]);
  }
});
