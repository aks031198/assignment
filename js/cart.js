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
    msg = "Uh-oh Your Cart looks empty";
}
else {
    for (var i = 0; i < l; i++) {
        if (cart.indexOf(prod["array"][i]["id"]) >= 0) {
            console.log("id-" + prod["array"][i]["id"] + " index=" + cart.indexOf(prod["array"][i]["id"]));
            msg += "<div class=\"flex-container-cart\">\n        <div class=\"flex-item-cart\">\n          <img src=\"../" + prod["array"][i]["img"] + "\" alt=\"" + prod["array"][i]["alt"] + "\" width=\"200\" height=\"200\" />\n        </div>\n        <div id=\"" + prod["array"][i]["id"] + "\" class=\"description_cart\">\n          <p class=\"checkout\">" + prod["array"][i]["name"] + " </p>\n          <p class=\"price_cart\">\n          " + prod["array"][i]["price"] + "\n          </p>\n         </div>\n      </div>";
            total += parseInt(prod["array"][i]["price"].substr(7));
        }
    }
}
var x1 = document.getElementById("shopping-cart");
x1.querySelector(".cart").innerHTML = msg;
console.log(total);
var y1 = document.getElementById("total");
var sum = "Your Total: $" + total;
y1.querySelector(".total").innerHTML = sum;
