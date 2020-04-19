const fs = require("fs");

fs.readFile("animals.json", "utf8", function(err, data) {
  if (err) {
    throw err;
  }

  // Parse the JSON string to an object
  const animalJSON = JSON.parse(data);

  // Create two new arrays to contain the cats and dogs objects
  console.log(animalJSON.length);

  const dogs = [];
  const cats = [];
  animalJSON.forEach(element => {
    if (element.species === "dog") {
      dogs.push(element);
    }
    else {
      cats.push(element);
    }
  });
  console.log(dogs);
  const dogsArray = JSON.stringify(dogs);
  const catsArray = JSON.stringify(cats);
  fs.writeFile("dogs.txt", dogsArray, function(err){
    if (err) {
      throw err;
    }
    console.log("Dogs array written succesfully")
  })
  fs.writeFile("cats.txt", catsArray, function(err){
    if (err) {
      throw err;
    }
    console.log("Dogs array written succesfully")
  })

});
