// Write your solution here!


// Initial array of cats
const cats = ["Milo", "Otis", "Garfield"];

// Destructive methods (modify original array)
function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Non-destructive methods (return a new array, keeping original unchanged)
function appendCat(name) {
  return [...cats, name]; // Creates a new array with name added at the end
}

function prependCat(name) {
  return [name, ...cats]; // Creates a new array with name added at the beginning
}

function removeLastCat() {
  return cats.slice(0, -1); // Returns a new array without the last cat
}

function removeFirstCat() {
  return cats.slice(1); // Returns a new array without the first cat
}

// Export functions for testing
module.exports = {
  cats,
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat
};

