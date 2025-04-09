'use strict';

jQuery(function ($) {
  $(document).ready(function () {
    popup();
    stickySidebar();
  });

  function popup() {
    var $body = $("body"),
        $popup = $(".popup");
    $(window).mouseout(function (o) {
      o.pageY - $(window).scrollTop() < 1 && 0 == $popup.attr("data-popup-visible") && ($popup.attr("data-popup-visible", 1), $body.addClass("no-scroll"));
    }), $(".popup__cross").click(function (o) {
      $popup.hide(), $body.removeClass("no-scroll");
    }), $(".mask").click(function (o) {
      $(o.target).closest(".popup__container").length || ($popup.hide(), $body.removeClass("no-scroll"), o.stopPropagation());
    });
  }

  function stickySidebar() {
    var sideCases = document.getElementById('sideCases');
    var articleContainer = document.querySelector('.section-article__container');

    if (articleContainer) {
      window.addEventListener('scroll', function () {
        var rect = articleContainer.getBoundingClientRect();
        var viewportH = window.innerHeight;

        if (rect.bottom > viewportH && rect.top < 0) {
          sideCases.style.position = 'fixed';
          sideCases.style.top = '20px';
          sideCases.style.width = sideCases.parentElement.offsetWidth + 'px';
        } else {
          sideCases.style.position = 'static';
          sideCases.style.width = 'auto';
        }
      });
    }
  }
});