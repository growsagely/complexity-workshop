// Clean Code: Chapter 2 - Meaningful Names
// Use names that reveal intent
//
// While this adheres to the meaningful name principle, it's inherently flawed.

const someArray = [1, 2, 3, 4, 5];

let currentPostionInTheLoop = 0;
const numberOfItemsInArray = someArray.length;

for (
  currentPostionInTheLoop;
  currentPostionInTheLoop < numberOfItemsInArray;
  currentPostionInTheLoop++
) {
  console.log(someArray, currentPostionInTheLoop);
}
