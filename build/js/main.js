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

  question.forEach(function (item) {
    item.addEventListener('keydown', function(evt) {
      if (evt.keyCode === 13) {
        item.classList.toggle('questions__item--active');
      }
    });
  });

  filter.forEach(function (item) {
    item.addEventListener('click', function() {
      item.classList.toggle('filters__legend--hidden');
    });
  });

  filter.forEach(function (item) {
    item.addEventListener('keydown', function(evt) {
      if (evt.keyCode === 13) {
        item.classList.toggle('filters__legend--hidden');
      }
    });
  });

})();

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
  var dotsNumdersMobile = document.querySelector('.slider__dots-numder-mobile');
  var viewport = 1024;
  var numbersItemsSliderDesktop = 4;
  var numbersItemsSliderTablet = 2;
  var marginItems = 30;
  var count = 0;
  var numbersItemsSlider;
  var width;


  function init() {
    if (body) {
      if (body.offsetWidth < viewport) {
        numbersItemsSlider = numbersItemsSliderTablet;
      } else { numbersItemsSlider = numbersItemsSliderDesktop;
      }
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

  function onButtonsControlsClick() {
    if (sliderList) {
      sliderList.style.transform = 'translate(-' + count * (width + marginItems) + 'px)';
      dotMobile.textContent = count + 1;
    }
  }

  // Dots
  function initDotsMobile() {
    if (dotsNumdersMobile) {
      var numItems = sliderItem.length / numbersItemsSliderTablet;
    dotsNumdersMobile.textContent = numItems;
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

  // TOUCH
  var startX = 0;
  var dist = 0;
  var swipeX = 10;

  if (sliderList) {
    sliderList.addEventListener('touchstart', function(evt) {
      var touchobj = evt.changedTouches[0];
      startX = parseInt(touchobj.clientX, 10);
    });

    sliderList.addEventListener('touchmove', function(evt) {
      var touchobj = evt.changedTouches[0];
      dist = parseInt(touchobj.clientX, 10) - startX;
    });

    sliderList.addEventListener('touchend', function(evt) {
      if (dist < -swipeX) {
        count++;
        if (count >= sliderItem.length / numbersItemsSlider) {
          count = 0;
        }
        onButtonsControlsClick();
        activeDot(count);
      }

      if (dist > swipeX) {
        count--;
        if (count < 0) {
          count = sliderItem.length / numbersItemsSlider - 1;
        }
        onButtonsControlsClick();
        activeDot(count);
      }
    });
  }


})();
