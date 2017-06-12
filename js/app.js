$(function () {
  var $topPanel = $('.top-panel');
  $topPanel.removeClass('top-panel--no-js');

  $topPanel.find('.top-panel__menu-toggler').click(function () {
    $topPanel
      .toggleClass('top-panel--menu-opened')
      .toggleClass('top-panel--menu-closed');
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

