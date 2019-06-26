var createSlider = function(togglerClass, togglerParentClass, slidesListClass) {
  var togglers = document.querySelectorAll(togglerClass);
  var togglerParent = document.querySelectorAll(togglerParentClass);
  var slidesList = document.querySelectorAll(slidesListClass);

  togglers.forEach(function(toggler) {
    toggler.addEventListener('click', function(event) {
      event.preventDefault();

      togglerParent.forEach(function(item) {
        item.classList.remove('active');
      });

      this.parentElement.classList.add('active');

      slidesList.forEach(function(slide) {
        slide.classList.remove('active');
      });

      var activeSlideOrder = parseInt(this.dataset.slideTo);
      slidesList[activeSlideOrder].classList.add('active');
    })
  });
};

createSlider('.slider__indicator button', '.slider__indicator', '.slides-item');
createSlider('.services-list__item button', '.services-list__item', '.services__item');

// Закрытие модальных окон
var modalClosingButtons = document.querySelectorAll('.button--close');
modalClosingButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    this.parentElement.classList.remove('shown');
  });
});

var closeAllModals = function() {
  var modals = document.querySelectorAll('.modal');
  modals.forEach(function(modal) {
    modal.classList.remove('shown');
  });
};

// Показать карту
var mapOpener = document.querySelector('.map-link');
mapOpener.addEventListener('click', function(e) {
  e.preventDefault();
  closeAllModals();
  var mapModal = document.querySelector('.modal--map');
  mapModal.classList.add('shown');
});

// Показать форму
var formOpener = document.querySelector('.button--form');
formOpener.addEventListener('click', function(e) {
  e.preventDefault();
  closeAllModals();
  var formModal = document.querySelector('.modal--contact');
  formModal.classList.add('shown');
});