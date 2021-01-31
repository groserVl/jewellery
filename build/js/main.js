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

'use strict';
(function() {

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

    document.body.style.overflow = 'hidden';


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

    document.body.style.overflow = 'visible';
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
        item.classList.toggle('modal-filter__list--hidden');
      });
    });
  }

})();

'use strict';
(function() {

  var modalLogin = document.querySelector('.modal-login');
  var modalAddToCart = document.querySelector('.modal-add-to-cart');
  var modalOverlay = document.querySelector('.modal-overlay');
  var buttonCloseModal = document.querySelector('.button-close');
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

    document.body.style.overflow = 'visible';
  }

  // Фу-ия удаления обработчиков
  function closeEventListeners() {
    buttonCloseModal.removeEventListener('click', onButtonCloseModalClick);
    modalOverlay.removeEventListener('click', onModalOverlayClick);
    window.removeEventListener('keydown', onEscapeClick);
  }

  function onButtonAddToCartClick(evt) {
    evt.preventDefault();
    modalAddToCart.classList.add('modal-add-to-cart--show');
    modalOverlay.classList.add('modal-overlay--show');

    document.body.style.overflow = 'hidden';

    buttonCloseModal.addEventListener('click', onButtonCloseModalClick);
    modalOverlay.addEventListener('click', onModalOverlayClick);
    window.addEventListener('keydown', onEscapeClick);
  }

  function onButtonLoginClick(evt) {
    evt.preventDefault();
    modalLogin.classList.add('modal-login--show');
    modalOverlay.classList.add('modal-overlay--show');

    document.body.style.overflow = 'hidden';

    userEmail.focus();

    try {
      userEmail.value = localStorage.getItem('email');

    } catch (err) {
      userEmail.focus();
    }
    buttonCloseModal.addEventListener('click', onButtonCloseModalClick);
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

'use strict';
// var pageHeader = document.querySelector('.page-header');
// var headerToggle = document.querySelector('.page-header__toggle');

// pageHeader.classList.remove('page-header--nojs');

// headerToggle.addEventListener('click', function () {
//   if (pageHeader.classList.contains('page-header--closed')) {
//     pageHeader.classList.remove('page-header--closed');
//     pageHeader.classList.add('page-header--opened');
//   } else {
//     pageHeader.classList.add('page-header--closed');
//     pageHeader.classList.remove('page-header--opened');
//   }
// });

'use strict';
(function () {

  var body  = document.querySelector('body');
  var sliderItem = document.querySelectorAll('.slider__item');
  var sliderList = document.querySelector('.slider__list');
  var slider = document.querySelector('.slider');
  var sliderDot = document.querySelectorAll('.slider__dot');
  var buttonNext = document.querySelector('.slider__button--next');
  var buttonPrev = document.querySelector('.slider__button--prev');
  var dotMobile = document.querySelector('.slider__dot-mobile');
  var dotsNumderMobile = document.querySelector('.slider__dots-numder-mobile');
  var viewport = 1024;
  var numbersItemsSliderDesktop = 4;
  var numbersItemsSliderTablet = 2;
  var marginItems = 30;
  var count = 0;
  var numbersItemsSlider;
  var width;


  function init() {
    if (body.offsetWidth < viewport) {
      numbersItemsSlider = numbersItemsSliderTablet;
    } else { numbersItemsSlider = numbersItemsSliderDesktop;
    }

    if (slider) {
      width = slider.offsetWidth;
    }

    if (sliderList) {
      sliderList.style.width = width * (sliderItem.length / numbersItemsSlider) +'px';
    }



    sliderItem.forEach(function(item) {
      item.style.width = (width - ((numbersItemsSlider - 1) * marginItems)) / numbersItemsSlider + 'px';
      item.style.height = 'auto';
    });
    onButtonsControlsClick();
  }

  window.addEventListener('resize', init);

  init();

  if (buttonPrev) {
    buttonPrev.addEventListener('click', function () {
      count--;
      if (count < 0) {
        count = sliderItem.length / numbersItemsSlider - 1;
      }
      onButtonsControlsClick();
      activeDot(count);
    });
  }

  if (buttonNext) {
    buttonNext.addEventListener('click', function () {
      count++;
      if (count >= sliderItem.length / numbersItemsSlider) {
        count = 0;
      }
      onButtonsControlsClick();
      activeDot(count);
    });
  }



  // sliderList.addEventListener('touchmove', function () {
  //   count++;
  //   if (count >= sliderItem.length / numbersItemsSlider) {
  //     count = 0;
  //   }
  //   onButtonsControlsClick();
  //   activeDot(count);
  // });

  function onButtonsControlsClick() {
    if (sliderList) {
      sliderList.style.transform = 'translate(-' + count * (width + marginItems) + 'px)';
      dotMobile.textContent = count + 1;
    }
  }

  // Dots
  function initDotsMobile() {
    if (dotsNumderMobile) {
      var numItems = sliderItem.length / numbersItemsSliderTablet;
    dotsNumderMobile.textContent = numItems;
    }
  }

  sliderDot.forEach(function(item, indexDot) {
    item.addEventListener('click', function() {
      count = indexDot;
      onButtonsControlsClick();
      activeDot(count);
    });
  });

  function activeDot(num) {
    for (var i = 0; i < sliderDot.length; i++) {
      sliderDot[i].classList.remove('slider__dot--active');
    }
    sliderDot[num].classList.add('slider__dot--active');
  }

  initDotsMobile();

})();
