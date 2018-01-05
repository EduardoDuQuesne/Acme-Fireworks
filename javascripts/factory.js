/*jshint esversion: 6 */

const $ = require('jquery');

module.exports.getCategories = () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "../data/categories.json"
        })
        .done((data) => {
            resolve(data.categories);
        })
        .fail((error) => {
            reject(error);
        });
    }); 
};

module.exports.getProducts = () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "../data/products.json"
        })
        .done((data) => {
            resolve(data.products);
        })
        .fail((error) => {
            reject(error);
        });
    }); 
};

module.exports.getTypes = () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "../data/types.json"
        })
        .done((data) => {
            resolve(data.types);
        })
        .fail((error) => {
            reject(error);
        });
    }); 
};

// PROMISE ALL
//great for unrelated but need all data
// let promArr = [
//     factory.getCategories(),
//     factory.getProducts(),
//     factory.getTypes()
// ];
// Promise.all()