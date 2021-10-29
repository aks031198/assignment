"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var products_json_1 = __importDefault(require("../products/products.json"));
var p = JSON.stringify(products_json_1.default);
var prod = JSON.parse(p);
var l = prod["array"].length;
var html = "";
var cart = JSON.parse(window.localStorage.getItem("cart") || "{}");
console.log(cart);
var msg = "";
var total = 0;
if (cart.length == 0) {
    console.log("Uh-oh Ur Cart looks empty");
    msg = '<h2>Uh-oh Your Cart looks empty<h2>'; //if no items added in cart
}
else {
    for (var i = 0; i < l; i++) {
        if (cart.indexOf(prod["array"][i]["id"]) >= 0) {
            msg += "\n      <div id=\"" + prod["array"][i]["alt"] + "r\">\n      <article class=\"remove-item\">\n      <div class=\"flex-container-cart\">\n        <div class=\"flex-item-cart\">\n          <img src=\"../" + prod["array"][i]["img"] + "\" alt=\"" + prod["array"][i]["alt"] + "\" width=\"200\" height=\"200\" />\n        </div>\n        <div id=\"" + prod["array"][i]["id"] + "\" class=\"description_cart\">\n          <p class=\"checkout\">" + prod["array"][i]["name"] + " </p>\n          <p class=\"price_cart\">\n          Price=$" + prod["array"][i]["price"] + "\n          </p>\n          <div id=\"" + prod["array"][i]["id"] + "\">\n          <input\n            type=\"checkbox\"\n            onclick=\"remove('" + prod["array"][i]["alt"] + "r','" + prod["array"][i]["id"] + "')\"\n            id=\"" + prod["array"][i]["value"] + "\"\n            class=\"btn btn-small\"\n            value=\"" + prod["array"][i]["value"] + "\"\n          />\n          <label for=\"" + prod["array"][i]["value"] + "\" class=\"cart cart-small\">Remove Item</label>\n        </div>\n         </div>\n      </div>\n      </article>\n      </div>";
            total += parseInt(prod["array"][i]["price"]);
        }
    }
}
var x1 = document.getElementById("shopping-cart");
x1.querySelector(".cart").innerHTML = msg;
console.log("total= " + total);
var y1 = document.getElementById("total");
var sum = "Your Total: $" + total;
y1.querySelector(".total").innerHTML = sum;
