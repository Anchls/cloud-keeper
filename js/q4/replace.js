let myArray = [1, 2, 3, 1, 4, 1];
let numberToReplace = 1;
let newNumber = 99;
myArray = myArray.map(item => item === numberToReplace ? newNumber : item);
console.log(myArray); 
