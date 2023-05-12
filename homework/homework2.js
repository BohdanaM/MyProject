// Напишите программу по согласованию отпуска в зависимости от месяца.
// Если месяц “July” или “August”, то программа должна показать - ‘approved’, если другие месяцы, то - “denied”.

let month = "December";
if (month === "July" || month === "August") {
  console.log("approved");
} else {
  console.log("denied");
}

// Напишите простенький калькулятор (*, /, +, -). Проверьте ваш код на охват исключений для арифметических операций.
// У вас должны быть две переменные для исходных чисел и одна для оператора.
// В зависимости от оператора, должно происходить то или иное арифметическое действие и выводиться результат в консоль.

let leftOperand = 10;
let rightOperand = 0;
let operation = leftOperand / rightOperand;

if (leftOperand + rightOperand) {
  result = leftOperand + rightOperand;
} else if (leftOperand - rightOperand) {
  result = leftOperand - rightOperand;
} else if (leftOperand * rightOperand) {
  result = leftOperand * rightOperand;
}
if (rightOperand === 0) {
  console.log("Can not be divided by 0");
  result = leftOperand / rightOperand;
}

console.log(`Will be ${operation}`);

// Улитка ползёт вверх по стене высотой 5 метров.
// Каждый день она проползает вверх на 3 метра, а каждую ночь съезжает вниз на 2 метра.
// За сколько дней она доползёт до вершины стены.

let hightOfWall = 5;
let dayWayUp = 3;
let nighWayDown = 2;

distanceOfAllDay = dayWayUp - nighWayDown; //the distance which snail travels in a day
hightOfWallRemain = hightOfWall - dayWayUp; //the height of the pillar remaining after lifting after a day
finishDays = distanceOfAllDay + hightOfWallRemain;

console.log(finishDays);

//Напишите программу для расчета стоимости билетов.
//Для пассажиров старше 18 лет-полная цена,для младенцев младше 2 лет - 10% стоимости,
//для детей от 2-х до 18ти лет - 50 % стоимости, для пенсионеров старше 65 лет - 60% стоимости

let priceOfTicket = 10;
let age = 65;
let fullTicket = priceOfTicket;
let toddlerTicket = priceOfTicket * 0.1;
let kidsTicket = priceOfTicket * 0.5;
let olderTicket = priceOfTicket * 0.6;

if (age > 18 && age <= 65) {
  console.log(`Price for ticket is ${fullTicket}`);
} else if (age < 2) {
  console.log(`Price for ticket is ${toddlerTicket}`);
} else if (age >= 2 && age <= 18) {
  console.log(`Price for ticket is ${kidsTicket}`);
} else if (age > 65) {
  console.log(`Price for ticket is ${olderTicket}`);
}
