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

  // TOUCH
  var startX = 0;
  var dist = 0;
  var swipeX = 10;

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

})();
