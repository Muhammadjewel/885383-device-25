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