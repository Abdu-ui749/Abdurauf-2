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
    name: 'Abdurauf',
    age: 11,
    city: 'BAku'
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
//31
function flattenArray(arr) {
    return arr.reduce((acc, val) => acc.concat(val), []);
}

const twoDArray = [[1, 2], [3, 4], [5]];
const flattenedArray = flattenArray(twoDArray);
console.log(flattenedArray);
//32
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
  
    return n * factorial(n - 1);
}

console.log(factorial(5)); 
console.log(factorial(0)); 
console.log(factorial(1));
//33
function allPositive(arr) {
    return arr.every(num => num > 0);
}

console.log(allPositive([1, 2, 3, 4])); 
console.log(allPositive([-1, 2, 3, 4])); 
console.log(allPositive([0, 1, 2])); 
console.log(allPositive([5, 10, 15]));
//34
function filterByProperty(arr, property, value) {
    return arr.filter(obj => obj[property] === value);
}


const data = [
    { name: 'Abdu', age: 25 },
    { name: 'Rauf', age: 30 },
    { name: 'asd', age: 25 },
    { name: 'Asdf', age: 40 }
];

const result1 = filterByProperty(data, 'age', 25);
console.log(result1);
//35
function sortByProperty(arr, property) {
    return arr.sort((a, b) => {
        if (a[property] < b[property]) {
            return -1; 
        }
        if (a[property] > b[property]) {
            return 1; 
        }
        return 0; 
    });
}
//36
function deepEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }
    if (obj1 == null || obj2 == null || typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (const key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true; 
}


const objA = { a: 1, b: { c: 2 } };
const objB = { a: 1, b: { c: 2 } };
const objC = { a: 1, b: { c: 3 } };

console.log(deepEqual(objA, objB));
console.log(deepEqual(objA, objC));
//37
function mostFrequentChar(str) {
    const charCount = {};
    
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let maxChar = '';
    let maxCount = 0;

    for (const [char, count] of Object.entries(charCount)) {
        if (count > maxCount) {
            maxCount = count;
            maxChar = char;
        }
    }

    return maxChar;
}

console.log(mostFrequentChar("hello world")); 
console.log(mostFrequentChar("character"));  
console.log(mostFrequentChar("mississippi"));  
//38
function uniqueValues(arr14, arr24) {
    // Combine the two arrays
    const combined = [...arr14, ...arr24];
    
    // Use a Set to get unique values
    return [...new Set(combined)];
}

// Example usage:
const array14 = [1, 2, 3, 4];
const array24 = [3, 4, 5, 6];

const uniqueResult = uniqueValues(array14, array24);
console.log(uniqueResult); 
//39
function countCharacter(str, char) {
    let count = 0;
    
    for (const c of str) {
        if (c === char) {
            count++;
        }
    }
    
    return count;
}


console.log(countCharacter("hello world", "l")); 
console.log(countCharacter("character", "c"));    
console.log(countCharacter("banana", "a"));      
console.log(countCharacter("example", "z"));
//40
function isPrime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true; 
}

function getPrimesUpTo100() {
    const primes = [];
    for (let i = 1; i <= 100; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

const primeNumbers = getPrimesUpTo100();
console.log(primeNumbers);






 


