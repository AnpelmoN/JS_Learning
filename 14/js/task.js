// Императивный подход (цикл for)

const numbers = [1, 2, 3];
const squares = [];

for (let i = 0; i < numbers.length; i++) {
  squares.push(numbers[i] * numbers[i]);
}

console.log(squares); // [1, 4, 9]

// Декларативный подход (метод map)

const numbers = [1, 2, 3]
const squares = numbers.map(num => num * num)

console.log(squares);
