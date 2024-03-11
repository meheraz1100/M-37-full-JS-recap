// 1. array destructure
const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

// const [x, y]= [42, 65]

const [x, y] = numbers;

function boxify(num1, num2) {
  const nums = [num1, num2];
  return nums;
}

// const [first, second] = [90, 34];
const [first, second] = boxify(90, 34);

// console.log(boxify(90, 34));

const student = {
  name: "meheraz",
  age: 18,
  projects: ["github users", "alpha clash pro"],
};

const [firstProject, secondProject] = student.projects;

// console.log(x, y);

// object destructuring
// const { name, age } = { name: 'alu', age: 18 };
// const { id, names, ages } = { id: 12, name: 'alu', age: 18 };

// console.log(name, age);
// console.log(names, ages);

const employee = {
  ide: "VS code",
  designation: "developer",
  machine: "Mac",
  languages: ["html", "css", "js"],
  specification: {
    height: 66,
    weight: 67,
    address: "kumarkhali",
    drink: "water",
    watch: {
      color: "black",
      price: 500,
      brand: 'rolex'
    }
  },
};

const { machine, ide } = employee;
const { weight, address } = employee.specification;
const { brand } = employee?.specification?.watch;
