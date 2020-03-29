// Code your solution here!

function printString(myString) {
    console.log(myString[0]);
   
    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      printString(mySubString);
    } else {
      return true;


    }
  }
// printString()
function addUpTo(array,num){
    if(num===undefined || num <1){ 
        return array[0]
        }
      else{
      //decrement num/index --num
      return array[num] + addUpTo(array, --num)
      }

}
function isPalindrome(string){
      // make string a uniform case
  string = string.toLowerCase();

  // base case: if string has a length of 1, it's a palindrome
  if (string.length === 1) {
    return true;
  }

  // second base case: if string has length of 2, it's a palindrome if the two letters are equal
  if (string.length === 2) {
    return string[0] === string[1];
  }

  // recursive case: string.length must get closers to 1 or 2
  // check if first and last letters are different
  let firstLetter = string[0];
  let lastLetter = string.slice(-1);

  // if the first and last letters are different...
  if (firstLetter !== lastLetter) {

    // ...the string can't be a palindrome; return false
    return false;
  }

  // else, have to see if the rest of the string (excluding first and last letters is a palindrome)
  let remainingStringIsPalindrome = isPalindrome(string.slice(1, -1));

  // if the remaining string is a palindrome, return true; else return false, which can be shortened to...
  return remainingStringIsPalindrome;
}
function reverseString(string){
    if (string.length < 2) {
        return string
    } 
    else {
        return string.slice(-1)+reverseString(string.slice(0,-1))
    }
}
function maxOf(arr){
    if(arr.length===1){
        return parseInt(arr[0])
    }

    let elem=parseInt(arr[0])
    let elem1=maxOf(arr.slice(1,arr.length))
    // if(parseInt(arr[0])>maxOf(arr.slice(1,arr.length))){
        // return parseInt(arr[0])
    if(elem>elem1){
        return elem
    }
    else{
        return elem1
        // return maxOf(arr.slice(1,arr.length))
    }

}
function includesNumber(arr,num){
    if(arr.length<1){
        return false
    }
    if(arr[0]===num){
        return true
    }
    else{
        return includesNumber(arr.slice(1),num)
    }
}