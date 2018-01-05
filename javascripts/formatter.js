/*jshint esversion: 6 */

const $ = require('jquery');
const print = require('./DOMOutputter');

let checkCat = (prod, cat) => {
    for (let i = 0; i < cat.length; i++) {
        if (prod.cat_num === cat[i].id) {
            prod.cat_name = cat[i].name;
        }
    }
    print.printToDom(prod);
};

let checkTypes = (prod, data, cat) => {
    for (let i = 0; i < data.length; i++) {
        if ( data[i].id === prod.type ) {
           prod.type_name = data[i].name;
           prod.cat_num = data[i].category;
        }
        // if (i < cat.length && prod.cat_num === cat[i].id) {
            //     console.log("cat count");
            //     prod.cat_name = cat[i].name;
            // }
        }
        checkCat(prod, cat);
};

module.exports.formatData = (data) => {
    let prods = data[2];
    for (var prop in prods) {
        let prod2 = prods[prop];
        for (var prop2 in prod2) {           
            let prodType = prod2[prop2];
            checkTypes(prodType, data[1], data[0]);
        }
    }
};


// compare type.category === category[i].id
//