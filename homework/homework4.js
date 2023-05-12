// 1. Нарисуйте ромб
//          1
//         121
//        12321
//       1234321
//      123454321
//     12345654321
//    1234567654321
//   123456787654321
//  12345678987654321
// 1234567890987654321
//  12345678987654321
//   123456787654321
//    1234567654321
//     12345654321
//      123454321
//       1234321
//        12321
//         121
//          1
{
  let i = 0;
  let j;
  let max = 10;
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

{
  let line = "";
  let maxLine = 10;
  let space = " ";
  for (let i = 1; i <= maxLine - 1; i++) {
    line += space.repeat(maxLine - i);
    for (let j = 1; j <= i; j++) {
      if (j == 10) {
        line += 0;
      } else line += j;
    }
    for (let j = i - 1; j >= 1; j--) {
      line += j;
    }
    line += "\n";
  }
  for (let i = 1; i <= maxLine; i++) {
    line += space.repeat(i - 1);
    for (let j = 1; j <= maxLine + 1 - i; j++) {
      if (j == 10) {
        line += 0;
      } else line += j;
    }
    for (let j = maxLine - i; j >= 1; j--) {
      line += j;
    }
    line += "\n";
  }
  console.log(line);
}

// 2. Нарисуйте елочку
//     *
//    ***
//   *****
//  *******
// *********

let i = 0;
let j;
let max = 5; // The desired number of lines

while (i < max) {
  let space = "";
  let star = "";
  for (j = 0; j < max - i; j++) space += " ";
  for (j = 0; j < 2 * i + 1; j++) star += "*";
  console.log(space + star);
  i++;
}

let maxLine = 5; // The desired number of lines
let space = " ";
let pyramid = "";
for (let i = 1; i <= maxLine; i++) {
  pyramid += space.repeat(maxLine - i);
  for (let j = 1; j <= i; j++) {
    pyramid += j;
  }
  for (let j = i - 1; j >= 1; j--) {
    pyramid += j;
  }
  pyramid += "\n";
}
console.log(pyramid);

// 3. Нарисуйте треугольник
// 1
// 2 6
// 3 7 10
// 4 8 11 13
// 5 9 12 14 15
{
  let maxLine = 5;
  for (let i = 1; i <= maxLine; i++) {
    let str = "";
    let num = i;
    for (let j = 1; j <= i; j++) {
      str += num + " ";
      num = num + (maxLine - j);
    }
    console.log(str);
  }
}

// 4. Усовершенствуйте решение задачи про улитку с помощью  наиболее подходящего цикла.
function climb(hightOfWall) {
  let dayWayUp = 3;
  let nighWayDown = 2;
  let days = 0;
  if (hightOfWall <= 0) return days;
  for (let i = 0; hightOfWall > 0; i -= nighWayDown) {
    // i -= 2 descends at night after iteration
    i += dayWayUp; //If the height is not reached, climb during the day
    ++days; //Increases by 1 the counter of spent days
    if (i >= hightOfWall) break;
    // Next step will be i -= 2
  }
  return days;
}
console.log(climb(5));

// 5. Задача с интервью*
// У вас есть массив с тремя видами скобок, предположим
// [ ‘{‘, ‘)’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘]’, ‘)’] . Количество элементов и последовательность может быть разной.
// Нужно выяснить, все ли скобки являются парными  в правильной последовательности (открывающая и затем закрывающая). Также, скобки могут быть вложенными, но тем не менее, если последовательность соблюдена, то они считаются парными.
//  Пример:
// [ ‘)’, ‘{‘, ‘(’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘]’, ‘(‘ ] - у двух нет пары (нарушена последовательность)
// [ ‘{‘, ‘(’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘]’ ] - у всех есть пара
// [ ‘{‘, ‘(’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘[’, ‘)’ ] - у трех нет пары

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
