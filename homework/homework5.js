// Напишите функцию с калькулятором (используйте предыдущий код), в которую, в качестве параметров, передаются три переменные,
// две - числовые и третья отвечает за знак арифметической операции (*, /, -, +). Проверьте работу функции.
// example:  function calculate(a, b, operator){}

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

// Напишите функцию, которая создает и выводит в консоль кастомное приветствие с именем, которое вы передаете в функцию.
let helloClient = (name) => `Hello ${name}! \nWelcome to our cafe!`;
console.log(helloClient("Dana"));
