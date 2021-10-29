import data from "../products/products.json";
const p = JSON.stringify(data);
var prod = JSON.parse(p);
const l = prod["array"].length;
let html = "";
var cart = JSON.parse(window.localStorage.getItem("cart") || "{}");
console.log(cart);
let msg = "";
var total: number = 0;
if (cart.length == 0) {
  console.log("Uh-oh Ur Cart looks empty");
  msg = '<h2>Uh-oh Your Cart looks empty<h2>'; //if no items added in cart
} else {
  for (let i = 0; i < l; i++) {
    if (cart.indexOf(prod["array"][i]["id"]) >= 0) {
      msg += `
      <div id="${prod["array"][i]["alt"]}r">
      <article class="remove-item">
      <div class="flex-container-cart">
        <div class="flex-item-cart">
          <img src="../${prod["array"][i]["img"]}" alt="${prod["array"][i]["alt"]}" width="200" height="200" />
        </div>
        <div id="${prod["array"][i]["id"]}" class="description_cart">
          <p class="checkout">${prod["array"][i]["name"]} </p>
          <p class="price_cart">
          Price=$${prod["array"][i]["price"]}
          </p>
          <div id="${prod["array"][i]["id"]}">
          <input
            type="checkbox"
            onclick="remove('${prod["array"][i]["alt"]}r','${prod["array"][i]["id"]}')"
            id="${prod["array"][i]["value"]}"
            class="btn btn-small"
            value="${prod["array"][i]["value"]}"
          />
          <label for="${prod["array"][i]["value"]}" class="cart cart-small">Remove Item</label>
        </div>
         </div>
      </div>
      </article>
      </div>`;
      total += parseInt(prod["array"][i]["price"]);
    }
  }
}

let x1 = document.getElementById("shopping-cart");
x1!.querySelector(".cart")!.innerHTML = msg;
console.log("total= " + total);

var y1 = document.getElementById("total");
var sum = "Your Total: $" + total;
y1!.querySelector(".total")!.innerHTML = sum;
