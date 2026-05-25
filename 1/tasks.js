//1st Створити змінну, яка містить рядок з вашим ім'ям. Використовуючи метод .charAt(), вивести перший символ вашого імені в консоль.

const myName = "Artur Yurkov";

console.log(myName.charAt(2));

//2nd Створити змінну, яка містить рядок з вашим ім'ям. Використовуючи метод .replace(), замінити першу літеру вашого імені на символ "@" та вивести результат в консоль.

console.log(myName.replace("A", "@"));

//3d Створити змінну, яка містить рядок зі словом "JavaScript". Використовуючи метод .substring(), вивести підстроку, яка містить перші 4 символи слова "Java".

const word = "JavaScript is good";

const sub = word.substring(0, 3);

console.log(sub);

//4th Напиши скрипт який виведе рядок в форматі: “Гість x y поселяється в n номер g”, підставивши замість x, y, n, g значення змінних.

const name = "Artur";
const lastName = "Yurkov";
const hotel = "номер";
const roomNumber = 4;

console.log(`Гість ${name} ${lastName} поселяється в ${hotel} ${roomNumber}`);

//5th Створи програму яка буде обрізати повідомлення від лишніх пропусків з обох сторін.

const message = "         Привіт, як справи        ";
const cutMessage = message.trim();

console.log(cutMessage);

//6th Створи змінну яка буде зберігати рядок “Ваш баланс поповнено на 1”. Додай в кінець рядка довільну кількість нулів. Довжину рядка дізнайся за допомогою властивості.

const orderMsg = `Ваш баланс поповнено на 15.`;

console.log(orderMsg.includes(15)); //true
console.log(orderMsg.indexOf("1"));

//7th Написати скрипт пошуку в рядку. Дано:
const blacklistedWord1 = "Спам";
const blacklistedWord2 = "розпродаж";

const string1 = "Привіт, я Ілон Маск, це не спам, пропоную тобі мільйон!";
const string2 = "Найбільший РОЗПРОДАЖ цього тижня, не пропустіть!";
const string3 = "Рекламна кампанія #jsIsAwesome";

console.log(blacklistedWord1.toUpperCase());
console.log(string1.toUpperCase());

console.log(string1.toUpperCase().includes(blacklistedWord1.toUpperCase()));
console.log(string2.toUpperCase().includes(blacklistedWord1.toUpperCase()));
console.log(string3.toUpperCase().includes(blacklistedWord1.toUpperCase()));

console.log(string1.toUpperCase().includes(blacklistedWord2.toUpperCase()));
console.log(string2.toUpperCase().includes(blacklistedWord2.toUpperCase()));
console.log(string3.toUpperCase().includes(blacklistedWord2.toUpperCase()));
