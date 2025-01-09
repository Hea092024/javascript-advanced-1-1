const products = [
  { name: "Smartphone", price: 800, category: "electronics" },
  { name: "Headphones", price: 150, category: "electronics" },
  { name: "Coffee Maker", price: 100, category: "home appliances" },
  { name: "Blender", price: 250, category: "home appliances" },
  { name: "Laptop", price: 1200, category: "electronics" },
  { name: "T-shirt", price: 50, category: "clothing" },
  { name: "Sneakers", price: 300, category: "clothing" },
];

// const totalValue = products.reduce((sum,products) => sum + products.price, 0);
// console.log(`this is the value of the products`, totalValue);

// const cheapProducts = products.filter((product) => product.price < 200);
// console.table(cheapProducts);

// const allProductNames = products.map((product) => product.name);
// console.log("all product names:", allProductNames);

const electronicsNames = products
  .filter((product) => product.category === "electronics")
  .map((product) => product.name);
console.table("electronics:", electronicsNames);

// const hasExpensiveItems = products.some((product) => product.price > 1000);
// console.log(
//   hasExpensiveItems
//     ? "there are expensive items available"
//     : "there are no expensive items available."
// );
