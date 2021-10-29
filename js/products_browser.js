(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
for (var i = 0; i < l; i++) {
    html += " <p class=\"product\">" + prod["array"][i]["name"] + "</p>\n    <div class=\"flex-container\">\n      <div class=\"flex-item\">\n        <img\n          src=\"" + prod["array"][i]["img"] + "\"\n          alt=\"" + prod["array"][i]["alt"] + "\"\n          width=\"400\"\n          height=\"300\"\n        />\n        <p class=\"price\">Price=$" + prod["array"][i]["price"] + "</p>\n      </div>\n      <div id=\"" + prod["array"][i]["id"] + "\" class=\"description\">\n        <p>\n        " + prod["array"][i]["description"] + "\n        </p>\n    \n        <input\n          type=\"checkbox\"\n          onclick=\"added('" + prod["array"][i]["id"] + "')\"\n          id=\"" + prod["array"][i]["value"] + "\"\n          class=\"btn\"\n          value=\"" + prod["array"][i]["value"] + "\"\n        />\n        <label for=\"" + prod["array"][i]["value"] + "\" class=\"cart\">Add to Cart</label>\n      </div>\n    </div>";
}
var xz = document.getElementById("device");
xz.querySelector(".products").innerHTML = html;

},{"../products/products.json":2}],2:[function(require,module,exports){
module.exports={
  "array": [
    {
      "id": "i13",
      "name": "Iphone 13:",
      "img": "images/iphone_13.jpg",
      "alt": "iphone-13",
      "price": "799",
      "description": "Introduced on September 14, the iPhone 13 and iPhone 13 mini are Apple's newest flagship iPhones on the more affordable end, and are being sold alongside the more expensive iPhone 13 Pro and iPhone 13 Pro Max. The iPhone 13 and iPhone 13 mini are ideal for those who don't need pro-level camera features. The 5.4-inch iPhone 13 mini is the successor to the iPhone 12 mini, while the 6.1-inch iPhone 13 is the replacement for the iPhone 12. Both of the new iPhone 13 models are nearly identical in design to the iPhone 12 models, featuring flat edges, an aerospace-grade aluminum enclosure, a glass back, and a slight increase in thickness (7.65mm). The iPhone 13 models are available in Pink, Blue, Midnight (black), Starlight (silver/gold), and (PRODUCT)RED.",
      "value": "iphone13"
    },
    {
      "id": "i11",
      "name": "Iphone 11:",
      "img": "images/iphone_11.jpg",
      "alt": "iphone-11",
      "price": "699",
      "description": "iPhone 11 is one of the top selling smartphones that is available at a starting price of Rs 49,999. You can buy this smartphone in Green, Red, Black, White, Yellow, and Purple color options in different storage options. This lightweight and easy to carry phone weighs approximately 194 grams. The dimensions of the phone measure 150.9 mm x 75.7 mm x 8.3 mm (height x width x thickness). iPhone 11 RAM and Processor: This highly popular smartphone from Apple can be bought in different storage variants - 4GB of RAM + 64GB internal storage, 4GB of RAM + 128GB internal storage, and 4GB of RAM + 256GB internal storage. Hence, you need not worry about space issues while storing various files like songs, pictures, videos, documents, games, and more. Also, you can easily switch between multiple apps without any lag. In addition to this, iPhone 11 is powered by Hexa-core Apple A13 Bionic processor that gives you a faster and glitch-free performance.",
      "value": "iphone11"
    },
    {
      "id": "s21g",
      "name": "Samsung Galaxy s21:",
      "img": "images/s21.jpg",
      "alt": "s21",
      "price": "699",
      "description": "The Galaxy S21 has a 6.2-inch full-HD+ display with a 120Hz refresh rate.. It has Corning Gorilla Glass Victus on the display and a metal frame but the back is made out of plastic. The smartphone packs in a 4000mAh battery and does not get a charger in the box. The Galaxy S21 is powered by the Exynos 2100 5G SoC and gets 8GB of RAM. You can choose between 128GB and 256GB of storage but it isn’t expandable. You get Android 11 out of the box with Samsung's One UI 3.0 on top. The Galaxy S21 offers good performance but the smaller battery capacity doesn’t let it last as long as the Galaxy S21+.",
      "value": "s21"
    },
    {
      "id": "foldg",
      "name": "Samsung Galaxy Fold:",
      "img": "images/fold.jpg",
      "alt": "fold",
      "price": "1099",
      "description": "Samsung Galaxy Fold mobile was launched in February 2019. The phone comes with a 7.30-inch touchscreen primary display with a resolution of 1536x2152 pixels at a pixel density of 326 pixels per inch (ppi). It also features a 4.60-inch touchscreen as its second display, with a resolution of 720x1680 pixels at a pixel density of 399 pixels per inch (ppi). Samsung Galaxy Fold is powered by a 2.84GHz octa-core Qualcomm Snapdragon 855 processor. It comes with 12GB of RAM. The Samsung Galaxy Fold runs Android Pie and is powered by a 4380mAh non-removable battery. The Samsung Galaxy Fold supports wireless charging, as well as Quick Charge 2.0 fast charging.",
      "value": "fold"
    }
  ]
}

},{}]},{},[1]);
