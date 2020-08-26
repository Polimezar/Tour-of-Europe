'use strict';

(function () {
  var tourList = document.querySelector('.route__list');
  var tour = document.querySelectorAll('.route__tour');
  var button = document.querySelectorAll('.choice-tour__button');

  function closeTourDescription() {
    for (var i = 0; i < tourList.children.length; i++) {
      tourList.children[i].classList.remove('route__tour--show');
    }
  }

  function setSuggestedToursHandler(tour, button) {
    button.addEventListener('click', function (evt) {
      evt.preventDefault();
      tour.classList.toggle('route__tour--show');
    });
  }

  function showTourDescription() {
    for (i = 0; i < tour.length; i++) {
      closeTourDescription();
      setSuggestedToursHandler(tour[i], button[i]);
    }
  }
})();
