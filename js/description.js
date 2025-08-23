$(document).ready(function () {
  $('.discount').hide();
  // Initial values
  let quantity = 1;
  let price = 2499.00;
  let discount = 0;  

  function updatePrices() {
    let subtotal = price * quantity;
    let total = subtotal - discount; 

    $('#quantity').text(quantity);
    $('#subtotal').text('RS ' + subtotal.toFixed(2));
    $('#total').text('RS ' + total.toFixed(2));
  }

  $('.addbtn').click(function () {
    quantity++;
    updatePrices();
    showMessage("Increased quantity");
  });

  $('.subbtn').click(function () {
    if (quantity > 1) {
      quantity--;
      updatePrices();
      showMessage("Decreased quantity");
    }
  });

  removeItem = function () {
    $('.cart-product').hide();
    quantity = 0;
    $('#quantity').text("0");
    $('#subtotal').text("RS 0.00");
    $('#total').text("RS 0.00");
    $('.discount').hide();
    showMessage("Item removed");
  };

  applyPromo = function () {
    let code = $('#promoInput').val().toLowerCase();
    if (code === "lux20") {
      discount = 500;
      $('.discount').show().text("Discount: -RS " + discount.toFixed(2));
      showMessage("Promo applied");
    } else {
      discount = 0;
      $('.discount').hide();
      showMessage("Invalid promo");
    }
    updatePrices();
  };

  proceedToCheckout = function () {
    if (quantity > 0) {
      $(toast).text("Order confirmed!").css({
        "display": "block","font-size": "20px"
      }).hide().fadeIn(1000).delay(3000).fadeOut(400);

      setTimeout(()=>{
        window.location.href ="./index.html"
      },2000);

    } else {
      $(toast).text("Your cart is empty!").css({
        "display":"block"
      });
    }
  };

  function showMessage(text) {
    $('#successMessage span').text(text);
    $('#successMessage').fadeIn();
    setTimeout(() => {
      $('#successMessage').fadeOut();
    }, 2000);
  }

  updatePrices();
});
