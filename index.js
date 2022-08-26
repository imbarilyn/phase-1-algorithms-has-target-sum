function hasTargetSum(array, target){
  for(let i = 0; i < array.length; i++){
    for(let j = i + 1; j < array.length; j++){
      let sum = (array[i] + array[j]);
      if(sum === target){
        return true;
      }
    }
  }
  return false;
  // Write your algorithm here
}

/* 
  Write the Big O time complexity of your function here
  my function is a quadratic kind of thing. It does two searches and compares 
  the two values to see if it gives a given summation.
*/

/* 
  Add your pseudocode here
  function hasTargetSum(array, target){
    for(does the first iteration){
      for(does iteration fron the second index)
      const sum = sums up two elements from every itreations
      if(checks whether sum  === target){
        return true if so
      }
      else{
        return false
      }
    }
  }
*/

/*
  Add written explanation of your solution here
  My code is doing big O notation of O(n*2) which is a quadratic kind of thing. 
  It has nested for loop one does first iteration and the other does second iteration
  the two elements are summed up to give a summation that is compared to the target value.
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
