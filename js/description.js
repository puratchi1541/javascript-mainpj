$(document).ready(function () {
  $('.discount').hide();
  // Initial values
  let quantity = 1;
  let price = 2499.00;
  let discount = 500.00;
  let tax = 159.92;


  function updatePrices() {
    let subtotal = price * quantity;
    let total = subtotal - discount + tax;

    $('#quantity').text(quantity);
    $('#subtotal').text('$' + subtotal.toFixed(2));
    $('#total').text('$' + total.toFixed(2));
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
    $('#subtotal').text("$0.00");
    $('#total').text("$0.00");
    showMessage("Item removed");
  };


  applyPromo = function () {
    let code = $('#promoInput').val().toLowerCase();
    if (code === "lux20") {
      discount = 500;
      $('.discount').show();
      showMessage("Promo applied");
    } else {
      discount = 0;
      showMessage("Invalid promo");
    }
    updatePrices();
  };

 
  proceedToCheckout = function () {
    if (quantity > 0) {
      // alert("Order confirmed...");
      $(toast).text("Order confirmed...").css({
        "display":"block"
      });
      
        setTimeout(()=>{
       window.location.href ="./index.html"
        },2000);
    
    } else {
      // alert("Your cart is empty!");
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
