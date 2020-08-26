'use strict';

var navToggle = document.querySelector('.page-header__toggle');
var navMain = document.querySelector('.main-nav');

navMain.classList.remove('main-nav--no-js');
navToggle.classList.remove('page-header__toggle--no-js');

navToggle.addEventListener('click', function () {
  navToggle.classList.toggle('page-header__toggle--close');
  navMain.classList.toggle('main-nav--open');
});
