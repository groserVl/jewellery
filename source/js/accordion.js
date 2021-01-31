'use strict';
(function () {

  var questions = document.querySelector('.questions');
  var question = document.querySelectorAll('.questions__item');
  var filters = document.querySelector('.filters');
  var filter = document.querySelectorAll('.filters__fieldset-wrapper legend');

  if (questions) {
    questions.classList.remove('questions--nojs');
  }

  if (filters) {
    filters.classList.remove('filters--nojs');
  }

  question.forEach(function (item) {
    item.addEventListener('click', function() {
      item.classList.toggle('questions__item--active');
    });
  });

  filter.forEach(function (item) {
    item.addEventListener('click', function() {
      item.classList.toggle('filters__list--hidden');
    });
  });

})();
