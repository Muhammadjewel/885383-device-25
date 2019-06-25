// Применение динамики слайдеру
var slides = document.querySelectorAll('.slides-item');
var sliderItems = document.querySelectorAll('.slider__indicator');
var sliderIndicators = document.querySelectorAll('.slider__indicator a');
sliderIndicators.forEach(function(indicator) {
  indicator.addEventListener('click', function(e) {
    e.preventDefault();
    // Удаляем статус активности у всех элементов списка
    sliderItems.forEach(function(item) {
      item.classList.remove('active');
    });

    // Добавляем статус активности нажатому элементу
    this.parentElement.classList.add('active');

    // Прячем все слайды
    slides.forEach(function(slide) {
      slide.classList.remove('active');
    });

    // Показываем нужный слайд
    var activeSlideOrder = parseInt(this.dataset.slideTo);
    slides[activeSlideOrder].classList.add('active');
  });
});

// Слайдер сервисов
var servicesListItem = document.querySelectorAll('.services-list__item');
var servicesListIndicators = document.querySelectorAll('.services-list__item a');
var servicesItems = document.querySelectorAll('.services__item');
servicesListIndicators.forEach(function(indicator) {
  indicator.addEventListener('click', function(e) {
    e.preventDefault();

    servicesListItem.forEach(function(item) {
      item.classList.remove('active');
    });

    this.parentElement.classList.add('active');

    servicesItems.forEach(function(service) {
      service.classList.remove('active');
    });

    var activeSlideOrder = parseInt(this.dataset.slideTo);
    servicesItems[activeSlideOrder].classList.add('active');
  });
});

// Закрытие модальных окон
var modalClosingButtons = document.querySelectorAll('.button--close');
modalClosingButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    this.parentElement.classList.remove('shown');
  });
});

// Показать карту
var mapOpener = document.querySelector('.map-link');
mapOpener.addEventListener('click', function(e) {
  e.preventDefault();
  var mapModal = document.querySelector('.modal--map');
  mapModal.classList.add('shown');
});

// Показать форму
var formOpener = document.querySelector('.button--form');
formOpener.addEventListener('click', function(e) {
  e.preventDefault();
  var formModal = document.querySelector('.modal--contact');
  formModal.classList.add('shown');
});