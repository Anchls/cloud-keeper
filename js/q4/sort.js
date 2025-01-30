let myArray = [5, 3, 8, 4, 2];

// Bubble Sort Algorithm
for (let i = 0; i < myArray.length - 1; i++) {
  for (let j = 0; j < myArray.length - 1 - i; j++) {
    if (myArray[j] > myArray[j + 1]) {
      let temp = myArray[j];
      myArray[j] = myArray[j + 1];
      myArray[j + 1] = temp;
    }
  }
}

console.log(myArray); 
