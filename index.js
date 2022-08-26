function isPalindrome(word) {
  let i = 0;
  let j = word.length - 1;
  while (i < j) {
    if (word[i] !== word[j]) {
      return false;
    }
    ++i;
    --j;
  }
  return true;

}

/* 
  Add your pseudocode here
  initialize i = 0
  initialize j = len(word) - 1
  while i < j:
    if word[i] is equal to word[j]:
      return false
    i += 1
    j -= 1
  return true
*/

/*
  Add written explanation of your solution here
  1. Have two indices that point to the start and end of the string, (i) and (j) respectively.
  2. Compare the characters at (i) and at (j) of the string.
  3. If they are the same continue to step 4. Otherwise the string is not a palindrome.
  4. Increment (i) and decrement (j) indices of the string.
  5. If (i) becomes greater than or equal to (j) of the string terminate
     and return true since the string is a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
