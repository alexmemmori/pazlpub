// Плавная прокрутка до якоря
var scroll = new SmoothScroll();

var smoothScrollWithoutHash = function (selector, settings) {
  var clickHandler = function (event) {
    var toggle = event.target.closest( selector );
    if ( !toggle || toggle.tagName.toLowerCase() !== 'a' ) return;
    var anchor = document.querySelector( toggle.hash );
    if ( !anchor ) return;
    // event.preventDefault(); // Prevent default click event
    scroll.animateScroll( anchor, toggle, settings || {} );
  };

  window.addEventListener('click', clickHandler, false );
};

smoothScrollWithoutHash('a[data-scroll]');

// Тип анимации фансибокса

$.fancybox.defaults.animationEffect = 'fade';

// Копирование реквизитов

$('.payment-copy').tooltip({
  trigger: 'click',
  placement: 'bottom'
});

function setTooltip(btn, message) {
  $(btn).tooltip('hide')
    .attr('data-original-title', message)
    .tooltip('show');
}

function hideTooltip(btn) {
  setTimeout(function() {
    $(btn).tooltip('hide');
  }, 1000);
}

var clipboard = new ClipboardJS('.payment-copy');

clipboard.on('success', function(e) {
  e.clearSelection();
  setTooltip(e.trigger, 'Скопировано!');
  hideTooltip(e.trigger);
});

clipboard.on('error', function(e) {
  e.clearSelection();
  setTooltip(e.trigger, 'Ошибка копирования!');
  hideTooltip(e.trigger);
});