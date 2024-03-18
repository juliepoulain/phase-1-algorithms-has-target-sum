function hasTargetSum(array, target) {
  for (let int1 = 0; int1 < array.length - 1; int1++) {
    for (let int2 = int1 + 1; int2 < array.length; int2++) {
      if (array[int1] + array[int2] == target) {
        return true;
      }
    }
  }
  return false;
}

/* 
 0(n)
*/

/* 
  The function should return true if any pair of numbers in the array adds up to the target number.
*/

/*
hasTargetSum takes an array and a target as arguments and returns false if any pair of integers in the array have a sum equal to the target.
It does this with 2 for loops to iterate through each integer once. within the loops, it checks wherther array 1 + array 2 = target.
If any iteration does, the function returns true and ends. otherwise, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
