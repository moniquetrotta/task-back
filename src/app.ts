import { getAllProducts } from "products/get";

const products = await getAllProducts("token");

console.log(products);
