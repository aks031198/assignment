import data from '../products/products.json';
const p=JSON.stringify(data);
const prod=JSON.parse(p);
const l=prod["array"].length;
let html="";
for(let i=0;i<l;i++)
{
    html+=` <p class="product">${prod["array"][i]["name"]}</p>
    <div class="flex-container">
      <div class="flex-item">
        <img
          src="${prod["array"][i]["img"]}"
          alt="${prod["array"][i]["alt"]}"
          width="400"
          height="300"
        />
        <p class="price">Price=$${prod["array"][i]["price"]}</p>
      </div>
      <div id="${prod["array"][i]["id"]}" class="description">
        <p>
        ${prod["array"][i]["description"]}
        </p>
    
        <input
          type="checkbox"
          onclick="added('${prod["array"][i]["id"]}')"
          id="${prod["array"][i]["value"]}"
          class="btn"
          value="${prod["array"][i]["value"]}"
        />
        <label for="${prod["array"][i]["value"]}" class="cart">Add to Cart</label>
      </div>
    </div>`    
}
var xz = document.getElementById("device");
xz!.querySelector(".products")!.innerHTML=html;




