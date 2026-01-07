"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let response = '43';
let stringLength = response.length;
console.log(stringLength);
let userData = '{"name":"ratul"}';
let userObject = JSON.parse(userData);
console.log(userObject.name); // access name easyly 
let value = 'hello';
value = [1, 2, 3, 4, 5, 6];
value = 3.5;
value = '99';
if (value === 'string') {
    value.toUpperCase();
}
// normal type handel
try {
}
catch (error) {
    console.log(error.message);
}
// type gard
try {
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
}
// force fully type data
let data = 'ratul';
let name = data;
//# sourceMappingURL=moreTypes.js.map