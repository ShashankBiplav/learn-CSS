let backdrop = document.querySelector('.backdrop');

let modal = document.querySelector('.modal');

let cancelButton = document.querySelector('.modal__action--negative');

let selectPlanButtons = document.querySelectorAll('.plan .button');

let toggleButton = document.querySelector('.toggle-button');

let mobileNav = document.querySelector('.mobile-nav');

if (selectPlanButtons) {
  for (let index = 0; index < selectPlanButtons.length; index++) {
    selectPlanButtons[index].addEventListener('click', openModal);
  }
}
if (cancelButton) {
  cancelButton.addEventListener('click', closeModal);
}

backdrop.addEventListener('click', function () {
  // mobileNav.style.display = 'none';
  mobileNav.classList.remove('open');
  closeModal();
});

function openModal() {
  // modal.style.display = 'block';
  // backdrop.style.display = 'block';
  modal.classList.add('open');
  backdrop.classList.add('open');
}

function closeModal() {
  // modal.style.display = 'none';
  // backdrop.style.display = 'none';
  if (modal) {
    modal.classList.remove('open');
  }
  backdrop.classList.remove('open');
}

toggleButton.addEventListener('click', function () {
  // mobileNav.style.display = 'block';
  // backdrop.style.display = 'block';
  mobileNav.classList.add('open');
  backdrop.classList.add('open');
});
