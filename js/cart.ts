import data from "../products/products.json";
const p = JSON.stringify(data);
const prod = JSON.parse(p);
const l = prod["array"].length;
let html = "";
let cart = JSON.parse(window.localStorage.getItem("cart") || "{}");
console.log(cart);
let msg = "";
let total:number=0;
if (cart.length == 0) {
  console.log("Uh-oh Ur Cart looks empty");
  msg = "Uh-oh Your Cart looks empty";
} else {
  for (let i = 0; i < l; i++) {
      if(cart.indexOf(prod["array"][i]["id"])>=0)
      {
          console.log(`id-${prod["array"][i]["id"]} index=`+cart.indexOf(prod["array"][i]["id"]));
        msg += `<div class="flex-container-cart">
        <div class="flex-item-cart">
          <img src="../${prod["array"][i]["img"]}" alt="${prod["array"][i]["alt"]}" width="200" height="200" />
        </div>
        <div id="${prod["array"][i]["id"]}" class="description_cart">
          <p class="checkout">${prod["array"][i]["name"]} </p>
          <p class="price_cart">
          ${prod["array"][i]["price"]}
          </p>
         </div>
      </div>`;
      total += parseInt(prod["array"][i]["price"].substr(7));
      }
  }
}

let x1 = document.getElementById("shopping-cart");
x1!.querySelector(".cart")!.innerHTML = msg;
console.log(total);

let y1 = document.getElementById("total");
let sum = "Your Total: $" + total;
y1!.querySelector(".total")!.innerHTML = sum;
