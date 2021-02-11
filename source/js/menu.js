'use strict';
(function() {

  var body = document.querySelector('.body');
  var header = document.querySelector('.header');
  var buttonToggleNav = document.querySelector('.nav__toggle');

  if (header) {
    header.classList.remove('header--nojs');
  }

  if (buttonToggleNav) {
    buttonToggleNav.addEventListener('click', function() {
      body.classList.toggle('body--overflow-hidden');
      header.classList.toggle('header--mobile');
    });
  }
})();
