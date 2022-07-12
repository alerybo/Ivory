/*==================== ADD ITEMS ====================*/
let addButtons = document.querySelectorAll("#shop__button");

addButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    let shopItem = event.target.parentElement.parentElement;
    // let title = shopItem.querySelector(".shop_item-name").innerText;
    let price = shopItem.querySelector(".shop_item-price").innerText;
    let img = shopItem.querySelector(".shop__img").src;
    addToCart(price, img);
    updateCartTotal();
    listenForQuantityChange();
    listenForRemoveButton();
  });
});

function addToCart(price, img) {
  let cartContentList = document.getElementById("cart__content-list");
  let cartItem = document.createElement("li");
  cartItem.classList.add("cart__item");
  let cartItemHTML = `
        <img src="${img}" alt="" class="cart__item-img">
        <input type="number" class="cart__item-quantity" id="cart__item-quantity" value="1"></input>
        <span class="cart__item-price">${price}</span>
        <a href="" class="cart__remove" id="remove__button">REMOVE</a>
    `;
  cartItem.innerHTML = cartItemHTML;
  cartContentList.append(cartItem);
}

/*==================== REMOVING ITEMS ====================*/
function listenForRemoveButton() {
  let removeButtons = document.querySelectorAll("#remove__button");

  removeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.target.parentElement.remove();
      updateCartTotal();
    });
  });
}

/*==================== CHANGE QUANTITY ====================*/
function listenForQuantityChange() {
  let itemQuantities = document.querySelectorAll("#cart__item-quantity");
  itemQuantities.forEach((quantity) => {
    quantity.addEventListener("change", (event) => {
      if (quantity.value > 0) {
        updateCartTotal();
      } else {
        event.target.parentElement.remove();
      }
    });
  });
}

/*==================== UPDATE TOTAL ====================*/

// let cart = document.getElementById("#cart__content-list");

function updateCartTotal() {
  let cartItems = document.getElementsByClassName("cart__item");
  let totalItem = document.querySelector(".cart__total");
  let total = 0;

  for (let i = 0; i < cartItems.length; i++) {
    let item = cartItems[i];
    let itemPrice = item.getElementsByClassName("cart__item-price")[0];
    let itemQuantity = item.getElementsByClassName("cart__item-quantity")[0];

    let price = itemPrice.innerHTML.replace("$", "");
    let quantity = itemQuantity.value;

    total += price * quantity;
    total = Math.round(total * 100) / 100;
  }
  totalItem.innerHTML = "Total: $" + total;
}
