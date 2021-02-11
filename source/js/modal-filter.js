'use strict';
(function() {

  var body = document.querySelector('.body');
  var modalFilter = document.querySelector('.modal-filter');
  var buttonOpenFilter = document.querySelector('.filters__tablet-button');
  var buttonCloseFilter = document.querySelector('.modal-filter__button-close');
  var modalOverlay = document.querySelector('.modal-overlay');
  var filters = document.querySelectorAll('.modal-filter__fieldset-wrapper legend');

  if (modalFilter) {
    modalFilter.classList.remove('modal-filter--nojs');
  }

  if (buttonOpenFilter) {
    buttonOpenFilter.addEventListener('click', onButtonOpenFilterClick);
  }

  //  Фу-ия открытия модального окна
  function onButtonOpenFilterClick(evt) {
    evt.preventDefault();
    modalFilter.classList.add('modal-filter--show');
    modalOverlay.classList.add('modal-overlay--show');

    body.classList.add('body--overflow-hidden');

    buttonCloseFilter.addEventListener('click', onButtonCloseModalClick);
    modalOverlay.addEventListener('click', onModalOverlayClick);
    window.addEventListener('keydown', onEscapeClick);
  }


  // Фу-ия скрытия модального окна
  function removeModal() {
    if (modalFilter) {
      modalFilter.classList.remove('modal-filter--show');
    }
    modalOverlay.classList.remove('modal-overlay--show');

    body.classList.remove('body--overflow-hidden');
  }

  // Фу-ия удаления обработчиков
  function closeEventListeners() {
    buttonCloseFilter.addEventListener('click', onButtonCloseModalClick);
    modalOverlay.removeEventListener('click', onModalOverlayClick);
    window.removeEventListener('keydown', onEscapeClick);
  }

  function onButtonCloseModalClick() {
    removeModal();
    closeEventListeners();
  }

  function onModalOverlayClick(evt) {
    if (evt.target === modalOverlay) {
      removeModal();
      closeEventListeners();
    }
  }

  function onEscapeClick(evt) {
    if (evt.keyCode === 27) {
      removeModal();
      closeEventListeners();
    }
  }

  if (filters) {
    filters.forEach(function (item) {
      item.addEventListener('click', function() {
        item.classList.toggle('modal-filter__legend--hidden');
      });
    });
  }

})();
