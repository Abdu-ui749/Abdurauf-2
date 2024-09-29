//1
let name1='Abdurauf'
console.log(name1);
//2
let fruits=['peach','apricot','banana','orange','kiwi']
console.log(fruits);
//3
function Person(name, age) {
    this.name =name;
    this.age = age;
  }
  let person1 = new Person('Abdurauf', 11)
  console.log(person1);
//4
let number2=2
console.log(number2**2);
//5
for (var i = 1; i < 11; i = i + 1) { console.log(i); }
//6
let number4 = prompt("Enter a number: ");
let result = number4 % 2; // 0
if(number4 % 2 == 0) {
    console.log("The number is even.");
}
else {
    console.log("The number is odd.");
}
//7
let myArray = [1, 2, 3];
myArray.push(4);
console.log(myArray);
//8
let e='?';
console.log(e);
//9
var numbere = 5;
var numbert = 3;
var sum = numbere + numbert;
console.log("The sum of the two numbers is: " + sum);
//10

//11

//12
let myArray2 = [1, 2, 3, 4, 5];
myArray.shift(); 
console.log(myArray2);
//13
prompt("Hello");
alert ( "Hello Abdurauf");
console.log();
//14
let a=[1,2,3,4,5,6,7,8,9,10]
console.log(a);
//15
let ='Abdurauf';
Abdurauf='Hello';
alert(Abdurauf);
//16
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers2.filter(num => num % 2 === 0);
console.log(evenNumbers); 
//17
const sumArray = (arr) => {
    return arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0); 
};
const numbers = [1, 2, 3, 4, 5];
const totalSum = sumArray(numbers);

console.log(totalSum);
//18
const day = 'Monday';
switch (day) {
    case 'Monday':
        console.log("Start of the work week!");
        break;
    case 'Tuesday':
        console.log("Second day of the work week.");
        break;
    case 'Wednesday':
        console.log("Midweek already!");
        break;
    case 'Thursday':
        console.log("Almost there!");
        break;
    case 'Friday':
        console.log("Last workday of the week!");
        break;
    case 'Saturday':
        console.log("Enjoy your weekend!");
        break;
    case 'Sunday':
        console.log("Rest and recharge for the week ahead.");
        break;
    default:
        console.log("That's not a valid day!");
}
//19
let number = 10;
while (number >= 1) {
    console.log(number);
    number--; 
}
//20
const findMax = (arr) => {
    return arr.reduce((max, current) => {
        return current > max ? current : max;
    }, arr[0]); 
};

const numbers3 = [3, 5, 7, 2, 8, 1];
const highestNumber = findMax(numbers3);

console.log(highestNumber);
//21
const person = {
    firstName: 'Abdu',
    lastName: 'Rauf',
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};
//22
const doubleArray = (arr) => {
    return arr.map(element => element * 2);
};

const numbers4 = [1, 2, 3, 4, 5];
const doubledNumbers = doubleArray(numbers4);

console.log(doubledNumbers); 
//23
const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    start: function() {
        console.log('Car started');
    }
};
car.start();
//23
const numbers5 = [10, 25, 48, 55, 72, 30];

const firstGreaterThan50 = numbers5.find(num => num > 50);

console.log(firstGreaterThan50); 
//24
function mergeArrays(array1, array2) {
    return [...array1, ...array2];
}
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const mergedArray = mergeArrays(array1, array2);
console.log(mergedArray); 
//25
function mergeArrays(array1, array2) {
    return [...array1, ...array2];
}
const array13 = [1, 2, 3];
const array23 = [4, 5, 6];

const mergedArray3 = mergeArrays(array13, array23);
console.log(mergedArray3); 
//26
function reverseString(str) {
    return str.split('').reverse().join('');
}

const originalString = "13,96,27";
const reversedString = reverseString(originalString);
console.log(reversedString);
//27
function wordLengths(words) {
    return words.map(word => word.length);
}

const wordsArray = ["hello", "world", "JavaScript", "is", "fun"];
const lengths = wordLengths(wordsArray);
console.log(lengths)
//28
function getFirstThreeElements(arr) {
    return arr.slice(0, 3);
}

const exampleArray = [10, 20, 30, 40, 50];
const firstThree = getFirstThreeElements(exampleArray);
console.log(firstThree);
//29
function objectToArray(obj) {
    return Object.entries(obj);
}

const exampleObject = {
    name: 'Alice',
    age: 25,
    city: 'Wonderland'
};

const keyValuePairs = objectToArray(exampleObject);
console.log(keyValuePairs); 
//30
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };

const mergedObject = mergeObjects(object1, object2);
console.log(mergedObject); 





 


