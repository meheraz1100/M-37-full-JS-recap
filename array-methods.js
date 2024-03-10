const products = [
    {name: 'laptop', price: 32000, brand: 'lenovo', color: 'cilver'},
    {name: 'phone', price: 7000, brand: 'iphone', color: 'golden'},
    {name: 'watch', price: 3000, brand: 'samsung', color: 'yellow'},
    {name: 'sunglass', price: 300, brand: 'rayban', color: 'black'},
    {name: 'camera', price: 9000, brand: 'canon', color: 'gray'}
];

const brands = products.map(product => product.brand);
// console.log(brands);
const prices = products.map(product => product.price);
// console.log(prices);
const names = products.map(product => product.name);
// console.log(names);
const colors = products.map(product => product.color);
// console.log(colors);

// products.forEach(product => console.log(product));
// products.forEach(product => console.log(product.color));

products.forEach(product => {

})

// filter
const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap);

const specificNames = products.filter(product => product.name.includes('n'));
// console.log(specificNames);


// find 
const special = products.find(product => product.name.includes('n'));
// console.log(special);

