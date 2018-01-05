/*jshint esversion: 6 */
const $ = require('jquery');

module.exports.printToDom = (prod) => {
    $(`#${prod.cat_name}`).append(
        `<h2>${prod.name}</h2>
        <h4>${prod.cat_name}</h4>
        <h4>${prod.type_name.toUpperCase().slice(0, 1) + prod.type_name.slice(1)}</h4>`
    );
};
