// Закрытие модальных окон
var modalClosingButtons = document.querySelectorAll('.button--close');
for (var i = 0; i < modalClosingButtons.length; i++) {
  modalClosingButtons[i].addEventListener('click', function() {
    this.parentElement.classList.remove('shown');
  });
}

var closeAllModals = function() {
  var modals = document.querySelectorAll('.modal');
  for (var i = 0; i < modals.length; i++) {
    modals[i].classList.remove('shown');
  }
};

// Показать карту
var mapOpener = document.querySelector('.map-link');
mapOpener.addEventListener('click', function(e) {
  e.preventDefault();
  closeAllModals();
  var mapModal = document.querySelector('.modal--map');
  mapModal.classList.add('shown');
  mapModal.querySelector('.button--close').focus();
});

// Показать форму
var formOpener = document.querySelector('.button--form');
formOpener.addEventListener('click', function(e) {
  e.preventDefault();
  closeAllModals();
  var formModal = document.querySelector('.modal--contact');
  formModal.classList.add('shown');
  formModal.querySelector('.button--close').focus();
});