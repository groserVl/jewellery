'use strict';
(function() {

  var header = document.querySelector('.header');
  var buttonToggleNav = document.querySelector('.nav__toggle');

  if (header) {
    header.classList.remove('header--nojs');
  }

  if (buttonToggleNav) {
    buttonToggleNav.addEventListener('click', function() {
      header.classList.toggle('header--mobile');
    });
  }
})();
