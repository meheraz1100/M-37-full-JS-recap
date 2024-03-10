const numbers = [89, 35, 98, 12];
const student = {
    name: 'Meheraz',
    age: 18,
    movies: ['batman', 'man of steel']
}

// teplate string
const about = `My name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies}`;
console.log(about);


// arrow functions
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 === 0;  
const addThree = (x, y, z) => x + y + z;     // muiltiple parameters
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return;
}

// spread operator
const newNumbers = [...numbers];    // coping numbers array
// create a new array from an older array and add an element
const currentNumbers = [...numbers, 55];

numbers.push(99);
numbers.push(99);
numbers.push(99);


console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);