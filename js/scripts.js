var modalClosingButtons = document.querySelectorAll('.button--close');
var contactModal = document.querySelector('.modal--contact');
var contactForm = contactModal.querySelector('.contact-form');
var nameInput = contactForm.querySelector('#name-input');
var emailInput = contactForm.querySelector('#email-input');
var messageTextarea = contactForm.querySelector('#message-textarea');
var mapOpener = document.querySelector('.map-link');
var contactOpener = document.querySelector('.button--contact');

// Закрытие модальных окон
for (var i = 0; i < modalClosingButtons.length; i++) {
  modalClosingButtons[i].addEventListener('click', function() {
    this.parentElement.classList.remove('modal--shown');
    this.parentElement.classList.remove('modal--error');
  });
}

var closeAllModals = function() {
  var modals = document.querySelectorAll('.modal');
  for (var i = 0; i < modals.length; i++) {
    modals[i].classList.remove('modal--shown');
    modals[i].classList.remove('modal--error');
  }
};

// Показать карту
mapOpener.addEventListener('click', function(e) {
  e.preventDefault();
  closeAllModals();
  var mapModal = document.querySelector('.modal--map');
  mapModal.classList.add('modal--shown');
  mapModal.querySelector('.button--close').focus();
});

// Показать форму
contactOpener.addEventListener('click', function(e) {
  e.preventDefault();
  closeAllModals();
  contactModal.classList.add('modal--shown');
  nameInput.focus();
});

contactForm.addEventListener('submit', function(evt) {
  if (!nameInput.value || !emailInput.value || !messageTextarea.value) {
    contactModal.classList.remove('modal--error');
    evt.preventDefault();
    contactModal.classList.add('modal--error');
  }
});