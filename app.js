// <<<<<<<<<<<<<<<<< DATA SET <<<<<<<<<<<<<<<<<
let dishes = [
  {
    id: 1,
    name: "Pizza",
    cuisine: "Italian",
    servings: 8,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 2,
    name: "Spaghetti",
    cuisine: "Italian",
    servings: 2,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 3,
    name: "Ravioli",
    cuisine: "Italian",
    servings: 2,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 4,
    name: "Enchiladas",
    cuisine: "Mexican",
    servings: 6,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 5,
    name: "Tacos",
    cuisine: "Mexican",
    servings: 4,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 6,
    name: "Burrito Supreme",
    cuisine: "Mexican",
    servings: 1,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 7,
    name: "Elote",
    cuisine: "Mexican",
    servings: 4,
    ingredients: ["corn", "cheese"],
  },
  {
    id: 8,
    name: "Crepes",
    cuisine: "French",
    servings: 1,
    ingredients: ["flour", "sugar"],
  },
  {
    id: 9,
    name: "Corned Beef & Cabbage",
    cuisine: "Irish",
    servings: 10,
    ingredients: ["beef", "cabbage"],
  },
  {
    id: 10,
    name: "Beef Stew",
    cuisine: "Irish",
    servings: 8,
    ingredients: ["beef", "tomato"],
  },
  {
    id: 11,
    name: "Lasagna",
    cuisine: "Vegetarian",
    servings: 8,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 12,
    name: "Falafel",
    cuisine: "Vegetarian",
    servings: 1,
    ingredients: ["chickpea", "parsley"],
  },
  {
    id: 13,
    name: "Chili",
    cuisine: "Vegetarian",
    servings: 13,
    ingredients: ["tomato", "chickpea"],
  },
  {
    id: 14,
    name: "Goulash",
    cuisine: "Hungarian",
    servings: 15,
    ingredients: ["beef", "tomato"],
  },
];

// <<<<<<<<<<<<<<<<< EXAMPLE FUNCTION <<<<<<<<<<<<<<<<<

function findMexicanFood() {
  let results = dishes.filter(function (el) {
    if (el.cuisine === "Mexican") {
      return true;
    } else {
      return false;
    }
  });

  //Debug tip: Place a Breakpoint on the return AFTER the filter, then hover over "results" to see results of filter without having to step through the whole thing!

  return results;
}

// let mexicanFood = findMexicanFood();
// console.log("Mexican Foods: ", mexicanFood);

// <<<<<<<<<<<<<<<<< PROBLEMS <<<<<<<<<<<<<<<<<

//1. Create a function that will return all dishes with the cuisine type of "vegetarian"
//Filter
function problemOne(){

  let results = dishes.filter(function(el){
    if(el.cuisine === "Vegetarian"){
      return true;
    }
  })

  return results;
}

// let problemOne_result = problemOne()
// console.log(problemOne_result)


//2. Create a function that will return all dishes with the cuisine type of "Italian" and a serving size greater than 5.
//Filter
function problemTwo(callback){
  let results = dishes.filter(function(dish){
    if(dish.cuisine === "Italian" && (callback(dish.servings))){
      return true;
    }
  })
  return results;
}

  function servGreaterThanFive(num){
    if(num > 5){
      return true;
    }
  }

  // let problemTwoResults = problemTwo(servGreaterThanFive)
  // console.log(problemTwoResults)


//3. Create a function that will return only dishes whose serving id number matches their serving count.
//Filter
function problemThree(){
  let results = dishes.filter(function(dish){
    if(dish.id === dish.servings){
      return true;
    }
  })
  return results;
}

// let problemThreeResults = problemThree()
// console.log(problemThreeResults)


//4. Create a function that will return only dishes whose serving count is even.
//Filter
function evenServingCounts(callback){
  let results = dishes.filter(function(dish){
    if(callback(dish.servings)){
      return true;
    }
  })
  return results;
}


function findEven(num){
  if(num % 2 == 0){
    return true;
  }
}

// let evenServings = evenServingCounts(findEven)
// console.log(evenServings)


//5. Create a function that will return dishes whose ingredients array is "tomato" and "cheese".
//Filter
function problemFive(){
  let results = dishes.filter(function(dish){
    if(dish.ingredients.includes("tomato" && "cheese")){
      return true;
    }
  })
  return results;
}

// let problemFiveResults = problemFive()
// console.log(problemFiveResults)


//6a. Create a function that will return an array of only the names of the cuisine types. Ie ['Italian', 'Mexican', ...]
//Map
function problemSixA(){
 let cuisineTypes = dishes.map(function(dish){
    return `${dish.cuisine}`;
 })
 return cuisineTypes;
}

// let newArray = problemSixA()
// console.log(newArray)


// BONUS: (come back to this after finishing all)
//6b. Use the filter method to eliminate duplicates, leaving only distinct values in the array
function problemSixB(){
  let cuisineTypes = dishes.map(function(dish){
     return `${dish.cuisine}`;
  })
  let removeDups = cuisineTypes.filter((item, index) => cuisineTypes.indexOf(item) === index);
  return removeDups;
}

// let uniqueCuisineTypes = problemSixB()
// console.log(uniqueCuisineTypes)


//7. Create a function that will append the cuisine type to the start of the dish's name. Ie, "Italian Pizza"
//Map
function newNames(){
  let newNames = dishes.map(function(dish){
    return `${dish.cuisine} ${dish.name}`;
  })
  return newNames;
}

// console.log(newNames())


//8. Create a function that will append the cuisine type to the start of the dish's name. Then, return only the Vegetarian dish objects. So this function should return objects 11-13 with their names changed to "Vegetarian Lasagna", "Vegetarian Falafel", "Vegetarian Chili"
//Map, Filter
function vegAppendedCuisine(){ 
  let vegAppended = dishes.filter(function(el){
      return el.cuisine === "Vegetarian";
    })
    .map(function(el){
      return`${el.cuisine} ${el.name}`
    })
  return vegAppended;
}

// let vegAppendedCuisineResults = vegAppendedCuisine()
// console.log(vegAppendedCuisineResults)






// <<<<<<<<<<<<<<<<< BONUS <<<<<<<<<<<<<<<<<
//9. Create a function that will return dishes whose ingredients array INCLUDES "chickpea".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Filter
function foodFinder(callback){
  let results = dishes.filter(function(dish){
    if(callback(dish.ingredients)){
      return true;
    }
  })
  return results;
}

function findChickpea(ingredients){
  if(ingredients.includes("chickpea")){
    return true;
  }
}

// let foodFinderResult = foodFinder(findChickpea)
// console.log(foodFinderResult)


//10. Create a function that will return the total serving count of all dishes.
//Must use Reduce, not a loop.

//11. Create a function that will return an array of any objects that do not share a cuisine type with any other objects.
