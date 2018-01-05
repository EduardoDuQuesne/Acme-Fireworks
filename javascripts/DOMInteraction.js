/*jshint esversion: 6 */

const $ = require('jquery');

let select = $("#select");

$("#select").change(function() {
    $(".flex-wrap > *").hide();
    $(`#${select.val()}`).show();
});