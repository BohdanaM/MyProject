// Дана строка; нужно написать функцию, которая позволяет вернуть значение true,
// если строка является палиндромом, и false — если нет. При этом нужно учитывать пробелы и знаки препинания.

function isPalindrome(str) {
  newStr = str.split(",", " ").join("");
  let reverse = str.split(",", " ").reverse().join("");
  return reverse.toUpperCase() === newStr.toUpperCase();
}
console.log(isPalindrome("Live no on evil"));

// Если вы решали задачку со скобками без методов, то сейчас решите с методами.
function checkSequence(braces) {
  let arr = [];

  for (let i = 0; i < braces.length; i++) {
    if (braces[i] == "[" || braces[i] == "(" || braces[i] == "{") {
      //if the brace is open at the input, then we add it to the arr
      arr.push(braces[i]);
    } else if (braces[i] == "]" || braces[i] == ")" || braces[i] == "}") {
      //if the brace is close at the input
      if (arr.length > 0) {
        // and arr not empty
        let last = arr[arr.length - 1]; //check the last brace and compare
        if (
          (last == "[" && braces[i] == "]") ||
          (last == "(" && braces[i] == ")") ||
          (last == "{" && braces[i] == "}")
        ) {
          arr.pop(); //if the brackets are of the same type, then we remove the last opened brace from arr
        }
      } else return false; //if closed brace on the input and arr is empty
    }
  }
  return !arr.length; //if the output array is empty, then the sequence is correct
}

console.log(checkSequence([")", "{", "(", "(", ")", ")", "}", "[", "]", "("])); //false
console.log(checkSequence(["{", "(", "(", ")", ")", "}", "[", "]"])); //true
console.log(checkSequence(["{", "(", "(", ")", ")", "}", "[", "[", ")"])); //false
