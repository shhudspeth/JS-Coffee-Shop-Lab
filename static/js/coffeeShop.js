"use strict";
// Adds a menu item to the cart
const addItemToCart = (itemName) => {
  console.log(itemName)
  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>
  `);
};

// resets cart total to zero and deletes all cart items
const resetCart = () => {
  $('#cart-total').html('0.00');
  $('#cart-items').empty();

};

// adds a price to the total objects on website
const incrementCartTotal = (price) => {
  const cartTotal = $('#cart-total');

  let total = Number(cartTotal.html());
  total += Number(price);

  cartTotal.html(total.toFixed(2));
};

// increases the number of coffee sold over the lifetime of the site?
const incrementCoffeeSold = (amountSold) => {
  let coffeeSold = Number($('#coffee-sold-counter').html());
  coffeeSold += amountSold;

  $('#coffee-sold-counter').html(coffeeSold);
};

const setProgressAndStatus = (progressVal, statusMsg) => {
  $('#order-progress').attr('value', progressVal);
  $('#order-status-message').html(statusMsg);
};


//
// Add your event handlers below.
//

$('.add-to-order').on('click', () => {
  // console.log($('.add-to-order').attr('name'));
  // console.log($('.add-to-order').attr('price'));
  addItemToCart($('.add-to-order').attr('name'));
  incrementCartTotal($('.add-to-order').attr('price'));
  setProgressAndStatus(50, "Order underway")
  incrementCoffeeSold(1)
});

$('#place-order').on('click', () => {
  setProgressAndStatus(100, "Order Completed! Thank you!");
  resetCart();
  console.log($('.add-to-order'))
  $('.add-to-order').prop("disabled",true);
  
});

$('#reset-order').on('click', () => {
  setProgressAndStatus(0, "Please place an order");
  $('.add-to-order').prop("disabled",false);
 
});