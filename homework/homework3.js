// Напишите программу калькулятора со switch, обработайте возможные ошибки ввода

function calculation(leftOperand, operation, rightOperand) {
  let result;
  switch (operation) {
    case "+":
      result = leftOperand + rightOperand;
      break;
    case "-":
      result = leftOperand - rightOperand;
      break;
    case "/":
      if (rightOperand === 0) {
        console.log("can not be divided by 0");
      }
      result = leftOperand / rightOperand;
      break;
    case "*":
      result = leftOperand * rightOperand;
      break;
  }
  console.log(result);
}
calculation(10, "+", 7);
calculation(6, "-", 5);
calculation(6, "/", 2);
calculation(2, "*", 8);

// При помощи цикла for выведите чётные числа от 2 до 10

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// Задача с интервью
// У вас есть массив со скобками, предположим
// [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’] . Количество элементов и последовательность может быть разной.
// Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).

let array = ["(", ")", "(", ")", ")"];
let count = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] === "(") {
    count++;
  }
  if (array[i] === ")") {
    count--;
  }
}

if (count == 0) {
  console.log(true);
} else console.log(false);

// let arr = ["(", ")", "(", ")", ")"];
// let leftBrackets = [];
// let rightBrackets = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === "(") {
//     leftBrackets += arr[i];
//   } else if (arr[i] === ")") {
//     rightBrackets += arr[i];
//   }
// }
// if (leftBrackets.length === rightBrackets.length) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Имеется зашифрованное предложение
// “Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr”
// мы знаем, что оно означает “You are the best QA ever”.
// Нам нужно придумать программу дешифратор.

let text =
  "Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr";
text = text.split("br").join("");
console.log(text);

//Придумайте свой собственный шифр, а также программу, которая будет шифровать и затем дешифровщик к нему

function newArrayWithNegativeDigits(array) {
  return array.filter(function (num) {
    return num < 0;
  });
}
console.log(
  newArrayWithNegativeDigits((arr = [-1, 2, -5, 4, -3, 1, -7, 3, 2]))
);

// Нарисовать елочку с помощью циклов
let i = 0;
let j = 0;
let max = 5; // The desired number of lines

while (i < max) {
  let space = "";
  let star = "";
  for (j = 0; j < max - i; j++) space += " ";
  for (j = 0; j < 2 * i + 1; j++) star += "*";
  console.log(space + star);
  i++;
}

// Нарисовать ромб с помощью циклов
{
  let i = 0;
  let j = 0;
  let max = 5; // The desired number of lines

  while (i < max) {
    let space = "";
    let star = "";
    for (j = 0; j < max - i; j++) space += " ";
    for (j = 0; j < 2 * i + 1; j++) star += "*";
    console.log(space + star);
    i++;
  }

  while (i >= 0) {
    let space = "";
    let star = "";
    for (j = 0; j < max - i; j++) space += " ";
    for (j = 0; j < 2 * i + 1; j++) star += "*";
    console.log(space + star);
    i--;
  }
}
