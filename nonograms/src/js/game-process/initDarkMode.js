export default function initDarkMode() {
  const [
    title,
    copyright,
    darkmodeBtn,
    sound,
    modals,
    hints,
    hintZero,
    btns,
    sizeSelect,
    imageSelect,
  ] = [
    document.querySelector('.header__title'),
    document.querySelector('.footer__title'),
    document.querySelector('.header__darkmode_btn'),
    document.querySelector('.sound__btn'),
    document.querySelectorAll('.modal-content'),
    document.querySelectorAll('.hint'),
    document.querySelector('.zero'),
    document.querySelectorAll('.btn'),
    document.querySelector('.main__options-select'),
    document.querySelector('.image__section'),
  ];

  // смена бэкграунда
  document.body.classList.toggle('darkmode__background');

  // смена тайтла
  title.classList.toggle('darkmode__title');
  copyright.classList.toggle('darkmode__title');

  // кнопка даркмода
  darkmodeBtn.classList.toggle('darkmode__active');

  // кнопка саунда
  sound.classList.toggle('darkmode__sound');

  // модалки
  modals.forEach((modal) => modal.classList.toggle('darkmode__modal'));

  // подсказки в таблице
  hints.forEach((hint) => hint.classList.toggle('darkmode__hint'));
  hintZero.classList.toggle('darkmode__hint');

  // кнопки меню
  btns.forEach((btn) => btn.classList.toggle('darkmode__buttons'));

  // селекты и опшены
  sizeSelect.classList.toggle('darkmode__size');
  imageSelect.classList.toggle('darkmode__image');
}
