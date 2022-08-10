"use strict";
var _a;
let sale = 123456789;
let course = 'TypeScript';
let is_published = true;
let level;
let numbers = [];
numbers[0] = 1;
numbers[1] = 2;
numbers.forEach(n => console.log('===', n.toString()));
let user = [1, 'Charith'];
user.push(2, 'PQR');
console.log('***', user.slice);
let mySize = 3;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
console.log(calculateTax(10000));
let employee = {
    id: 1,
    name: 'Charith',
    retire: (date) => {
        console.log('======== ', date);
    }
};
console.log(employee.id);
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
console.log(kgToLbs(10));
console.log(kgToLbs('20kg'));
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
let metric = 'inch';
function greet(name) {
    if (name)
        console.log('Hi ', name.toUpperCase());
    else
        console.log('Hello..!');
}
greet("Charith");
greet(null);
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log1 = null;
log1 === null || log1 === void 0 ? void 0 : log1('a');
let log2 = (message) => console.log(message);
log2 === null || log2 === void 0 ? void 0 : log2('a');
//# sourceMappingURL=index.js.map