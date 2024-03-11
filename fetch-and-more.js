// 1. JSON => stringified => parse json
const student = {
  name: "meheraz",
  age: 18,
  projects: ["github users", "alpha clash pro"],
};

const studentJson = JSON.stringify(student);
const studentParse = JSON.parse(studentJson);
console.log(student);
console.log(studentJson);
console.log(studentParse);

// 2. fetch
fetch()
  .then((res) => res.json())
  .then((data) => console.log(data));

// keys and values
const keys = Object.keys(student);
const values = Object.values(student);

// for
const numbers = [23, 54, 67, 87, 23, 78];
numbers.forEach((num) => console.log(num));
numbers.map((num) => num * 2);

// for of on array like object
// loop on an object using for in

// add or remove from array
const products = [
  { name: "laptop", price: 32000, brand: "len", color: "silver" },
  { name: "phone", price: 7000, brand: "htc", color: "golden" },
  { name: "watch", price: 3000, brand: "samsung", color: "yellow" },
  { name: "sunglass", price: 300, brand: "rayban", color: "black" },
  { name: "camera", price: 9000, brand: "canon", color: "gray" },
];

const newPeoduct = { name: "webcam", price: 700, brand: "canon" };

// copy products array and then add newProduct
const newProducts = [...products, newPeoduct];
// create  a new array without one specific item
//remove phone means create a new array without the phone

const remaining = products.filter(product => product.name !== 'phone');
