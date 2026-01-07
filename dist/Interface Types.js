"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// very poor way
// code is duplicate
function products1(product) {
    console.log(product);
}
let product1 = {
    name: 'book',
    price: 200,
    stockStatus: true
};
products1(product1);
;
function products(product) {
    console.log(product);
}
let product = {
    name: 'book',
    price: 200,
    stockStatus: true
};
products(product);
//# sourceMappingURL=Interface%20Types.js.map