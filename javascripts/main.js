/*jshint esversion: 6 */

const $ = require('jquery');
const factory = require('./factory');
const format = require('./formatter');
require('./DOMInteraction');

let acmeData = [];

factory.getCategories()
.then((categories) => {
    acmeData.push(categories);
    return factory.getTypes();
})
.then((types) => {
    acmeData.push(types);
    return factory.getProducts();
})
.then((products) => {
    acmeData.push(products);
    format.formatData(acmeData);
})
.catch((err) => {
    console.log(`There was a problem: ${err.status}`);
});
