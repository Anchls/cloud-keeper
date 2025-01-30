// Define the array
let myArray = [1, 2, 3, 4, 5];

let start = 0;
let end = myArray.length - 1;

while (start < end) {
  let temp = myArray[start];
  myArray[start] = myArray[end];
  myArray[end] = temp;

  start++;
  end--;
}
console.log(myArray); 