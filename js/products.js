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
console.log(prod["array"][1]["name"]);
for (var i = 0; i < l; i++) {
    html += " <p class=\"product\">" + prod["array"][i]["name"] + "</p>\n    <div class=\"flex-container\">\n      <div class=\"flex-item\">\n        <img\n          src=\"" + prod["array"][i]["img"] + "\"\n          alt=\"" + prod["array"][i]["alt"] + "\"\n          width=\"400\"\n          height=\"300\"\n        />\n        <p class=\"price\">" + prod["array"][i]["price"] + "</p>\n      </div>\n      <div id=\"" + prod["array"][i]["id"] + "\" class=\"description\">\n        <p>\n        " + prod["array"][i]["description"] + "\n        </p>\n    \n        <input\n          type=\"checkbox\"\n          onclick=\"added('" + prod["array"][i]["id"] + "')\"\n          id=\"" + prod["array"][i]["value"] + "\"\n          class=\"btn\"\n          value=\"" + prod["array"][i]["value"] + "\"\n        />\n        <label for=\"" + prod["array"][i]["value"] + "\" class=\"cart\">Add to Cart</label>\n      </div>\n    </div>";
}
var xz = document.getElementById("device");
xz.querySelector(".products").innerHTML = html;
console.log("success");
