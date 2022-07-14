/*==================== SHOW CART ====================*/
let cart = document.querySelector(".cart__container");
//cart icon in the navbar
let cartButton = document.querySelector("#cart-button");

cartButton.addEventListener("click", () => {
  cart.classList.toggle("cart__container-active");
});

/*==================== ADDING ITEMS ====================*/
//"add to cart" buttons on every shop swiper card
let addButtons = document.querySelectorAll("#shop__button");

addButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    //get the buttons parent - shop swiper card
    let shopItem = event.target.parentElement.parentElement;
    //unique shop card ID
    let itemID = shopItem.id;
    //shop items price
    let price = shopItem.querySelector(".shop_item-price").innerText;
    //shop items img source path
    let img = shopItem.querySelector(".shop__img").src;

    //add item to the cart
    addToCart(price, img, itemID);
    //update total price
    updateCartTotal();
    //add event listeners for quantity input change and removing items
    listenForQuantityChange();
    listenForRemoveButton();
  });
});

//adding items to cart
function addToCart(price, img, itemID) {
  //list of items in the cart (li element in HTML)
  let cartContentList = document.getElementById("cart__content-list");

  //get all current cart items
  let cartItems = cartContentList.getElementsByClassName("cart__item");

  //check if the item is already in the cart
  for (let i = 0; i < cartItems.length; i++) {
    const cartItem = cartItems[i];
    if (cartItem.id === itemID) {
      //if item is already in the cart - alert user and exit the function
      alert("This item is already added to the cart");
      return;
    }
  }

  //create new list item
  let cartItem = document.createElement("li");
  //assign styling class to the new element
  cartItem.classList.add("cart__item");
  //inner HTML for new cart list item - including img icon and items price
  let cartItemHTML = `
        <img src="${img}" alt="" class="cart__item-img">
        <input type="number" class="cart__item-quantity" id="cart__item-quantity" value="1" min="0"></input>
        <span class="cart__item-price">${price}</span>
        <a href="" class="cart__remove" id="remove__button">REMOVE</a>
    `;
  cartItem.innerHTML = cartItemHTML;
  //assign ID to the new element same as parent shop card ID
  cartItem.id = itemID;
  //append new item to the list of cart items
  cartContentList.append(cartItem);
}

/*==================== REMOVING ITEMS ====================*/
function listenForRemoveButton() {
  //get all remove buttons from the cart
  let removeButtons = document.querySelectorAll("#remove__button");

  removeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      //when clicked - remove the item and update the total price
      event.target.parentElement.remove();
      updateCartTotal();
    });
  });
}

/*==================== CHANGE QUANTITY ====================*/
function listenForQuantityChange() {
  //get all quantity inputs
  let itemQuantities = document.querySelectorAll("#cart__item-quantity");
  itemQuantities.forEach((quantity) => {
    //add event listener for change of any input value
    quantity.addEventListener("change", (event) => {
      if (quantity.value > 0) {
        updateCartTotal();
      } else {
        //if quantity equals to 0, remove the item from the cart
        event.target.parentElement.remove();
      }
    });
  });
}

/*==================== UPDATE TOTAL ====================*/

function updateCartTotal() {
  //cart items - element od the list
  let cartItems = document.getElementsByClassName("cart__item");
  //total element at the bottom of the cart
  let totalItem = document.querySelector(".cart__total");
  //default total price equals to 0
  let total = 0;

  //for each item in the cart
  for (let i = 0; i < cartItems.length; i++) {
    let item = cartItems[i];
    //get items price and cut out the dollar sign
    let itemPrice = item
      .getElementsByClassName("cart__item-price")[0]
      .innerHTML.replace("$", "");
    //get quantity of this item
    let itemQuantity = item.getElementsByClassName("cart__item-quantity")[0]
      .value;

    //total price sum of price * quantity for each item
    total += itemPrice * itemQuantity;
    //round to 0,01
    total = Math.round(total * 100) / 100;
  }
  //display text in the "total" element
  totalItem.innerHTML = "Total: $" + total;
}

