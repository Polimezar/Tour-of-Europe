'use strict';

(function () {
  var popup = document.querySelector('.popup');
  var tourLink = document.querySelectorAll('.tour__link');
  var tariffLink = document.querySelectorAll('.tariff__link');
  var close = document.querySelector('.popup__close');

  function setBuyTourHandler() {
    tourLink.forEach(function (element) {
      element.addEventListener('click', function (evt) {
        evt.preventDefault();
        popup.classList.add('popup--show');
      });
    });
    tariffLink.forEach(function (element) {
      element.addEventListener('click', function (evt) {
        evt.preventDefault();
        popup.classList.add('popup--show');
      });
    });
  }

  function closePopupHandler() {
    close.addEventListener('click', function (evt) {
      evt.preventDefault();
      popup.classList.remove('popup--show');
    });
  }

  function escPressClosePopupHandler(evt) {
    if (evt.keyCode === 'Escape') {
      evt.preventDefault();
      popup.classList.remove('popup--show');
    }
  }

  window.popup = {
    setBuyTourHandler: setBuyTourHandler,
    closePopupHandler: closePopupHandler,
    escPressClosePopupHandler: escPressClosePopupHandler
  };

})();
