const products = [
  { name: "Smartphone", price: 800, category: "electronics" },
  { name: "Headphones", price: 150, category: "electronics" },
  { name: "Coffee Maker", price: 100, category: "home appliances" },
  { name: "Blender", price: 250, category: "home appliances" },
  { name: "Laptop", price: 1200, category: "electronics" },
  { name: "T-shirt", price: 50, category: "clothing" },
  { name: "Sneakers", price: 300, category: "clothing" },
];

//Case 1

//Uses .filter to specify that I only want to see products with a value of 200 or less.
const cheapProducts = products.filter((product) => product.price < 200);
console.table(cheapProducts);

//map. Logs the names of all products.
const allProductNames = products.map((product) => product.name);
console.log("all product names:", allProductNames);

///I use filter. to filter out the products that belong to the electronics category,
//then with map. I specify that I want to get the names of the items
const electronicsNames = products
  .filter((product) => product.category === "electronics")
  .map((product) => product.name);
console.table("electronics:", electronicsNames);

//Returns a message indicating whether there are items with a value over 1000 or not,
const hasExpensiveItems = products.some((product) => product.price > 1000);
console.log(
  hasExpensiveItems
    ? "there are expensive items available"
    : "there are no expensive items available."
);

//Adds up the values from all products to print out a total value.
const totalValue = products.reduce((sum,products) => sum + products.price, 0);
console.log(`this is the value of the products`, totalValue);

//Case 2





