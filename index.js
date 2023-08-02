function isPalindrome(word) {
  // Write your algorithm here
  let idxStart = 0;
  let idxEnd = word.length - 1;

  while (idxStart < idxEnd) {
    if (word[idxStart] !== word[idxEnd]) {
      return false;
    }
    idxStart++;
    idxEnd--;
  }

  return true;
}

/* 
  Add your pseudocode here
function isPalindrome(word) {
  idxStart = 0;
  idxEnd = word length -1;

  while (idxStart < idxEnd) {
    if (word[idxStart] !== word[idxEnd]) {
      return false;
    }
    idxStart++;
    idxEnd--;
  }
  return true;
}
*/

/*
  Add written explanation of your solution here
  =>
  A palindrome has a characteristic that the first character is 
  the same with the last character, and the second character is the 
  same with the second last character, and so on. We can make two 
  index variables, one starting from the beginning of a input string 
  and the other starting from the end of the string, and check if 
  characters that these two indexs point to are the same. If they are 
  not the same, this input string is not a palindrome. If they do, 
  then increment the first index variable by one and decrement the 
  second index variabe by one and perform the comparison again. Keep on 
  doing this work. If the first index variable becomes equal to or 
  greater than the seond index variable, the input string is a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("abcdecba"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abcddcba"));
}

module.exports = isPalindrome;
