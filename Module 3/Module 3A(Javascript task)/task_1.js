// Calculate the sum of numbers within an array.

function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  const numbers = [5, 10, 15, 20];
  const sum = calculateSum(numbers);
  console.log("Sum:", sum); // Output: Sum: 50
  

