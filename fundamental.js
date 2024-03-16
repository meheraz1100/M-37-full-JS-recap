// How to declare a variable using let and const
// Condition : if, else, else if
// 6 basic condition 
// <, >, ===, !==, <=, >=, 
// Multiple condition : && and ||
// Array [ ] <= empty array
// Array index, array length, pop, push
// Loop
// For loop 
// While loop
// do while loop
// Functions 
function multiply (){
	const result = num1 * num2;
	return result;
}
// multiply();
// Object { }
// 3 ways to access property by name
const student = {
	name : 'meheraz',
	age : 18,
	projects : ['github users', 'alpha clash pro']
}
const myVariable = 'age';

console.log(student.age); // direct by property
console.log(student['age']); // access via property name string
console.log(student[myVariable]); // access via property name in a variable