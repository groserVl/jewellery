'use strict';
(function() {

  var body = document.querySelector('.body');
  var modalLogin = document.querySelector('.modal-login');
  var modalAddToCart = document.querySelector('.modal-add-to-cart');
  var modalOverlay = document.querySelector('.modal-overlay');
  var buttonCloseModalLogin = document.querySelector('.modal-login__button-close');
  var buttonCloseModalAddCart = document.querySelector('.modal-add-to-cart__button-close');
  var buttonAddToCart = document.querySelector('.card-info__button');
  var buttonLogin = document.querySelector('.user-navigation__link-login');
  var userEmail = document.querySelector('#user-email');
  var modalLoginForm = document.querySelector('.modal-login form');

  if (modalLogin) {
    modalLogin.classList.remove('modal-login--nojs');
  }

  if (modalAddToCart) {
    modalAddToCart.classList.remove('modal-add-to-cart--nojs');
  }

  if (buttonAddToCart) {
    buttonAddToCart.addEventListener('click', onButtonAddToCartClick);
  }

  if (buttonLogin) {
    buttonLogin.addEventListener('click', onButtonLoginClick);
  }

  // Фу-ия скрытия модального окна
  function removeModal() {
    if (modalAddToCart) {
      modalAddToCart.classList.remove('modal-add-to-cart--show');
    }
    if (modalLogin) {
      modalLogin.classList.remove('modal-login--show');
    }
    modalOverlay.classList.remove('modal-overlay--show');

    body.classList.remove('body--overflow-hidden');
  }

  // Фу-ия удаления обработчиков
  function closeEventListeners() {
    buttonCloseModalAddCart.removeEventListener('click', onButtonCloseModalClick);
    buttonCloseModalLogin.removeEventListener('click', onButtonCloseModalClick);
    modalOverlay.removeEventListener('click', onModalOverlayClick);
    window.removeEventListener('keydown', onEscapeClick);
  }

  function onButtonAddToCartClick(evt) {
    evt.preventDefault();
    modalAddToCart.classList.add('modal-add-to-cart--show');
    modalOverlay.classList.add('modal-overlay--show');

    body.classList.add('body--overflow-hidden');
    buttonCloseModalAddCart.focus();

    buttonCloseModalAddCart.addEventListener('click', onButtonCloseModalClick);
    modalOverlay.addEventListener('click', onModalOverlayClick);
    window.addEventListener('keydown', onEscapeClick);
  }

  function onButtonLoginClick(evt) {
    evt.preventDefault();
    modalLogin.classList.add('modal-login--show');
    modalOverlay.classList.add('modal-overlay--show');

    body.classList.add('body--overflow-hidden');

    userEmail.focus();

    try {
      userEmail.value = localStorage.getItem('email');

    } catch (err) {
      userEmail.focus();
    }
    buttonCloseModalLogin.addEventListener('click', onButtonCloseModalClick);
    modalOverlay.addEventListener('click', onModalOverlayClick);
    window.addEventListener('keydown', onEscapeClick);
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

  if (modalLoginForm) {
    modalLoginForm.addEventListener('submit', function () {
      localStorage.setItem('email', userEmail.value);
    });
  }

})();
