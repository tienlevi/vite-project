import classes from "./main.module.css";
const products = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
];
console.log(products);
document.querySelector(
  "#app"
).innerHTML = `<div class="${classes.red}">Hello world</div>`;
