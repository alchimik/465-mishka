$(function () {
  $('.top-panel__menu-toggler').click(function () {
    $('.top-panel__menu').toggle();
  });

  $('.featured-product__order-button').click(function () {
    $('.modal-cart-from').show();
    return false;
  });

  $(document).keydown(function(eventObject){
    if (eventObject.which === 27)
      $('.modal-cart-from').hide();
  });
});

