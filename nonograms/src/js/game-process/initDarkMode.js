export default function initDarkMode() {
  const [title, copyright, darkmodeBtn, sound, modals] = [
    document.querySelector('.header__title'),
    document.querySelector('.footer__title'),
    document.querySelector('.header__darkmode_btn'),
    document.querySelector('.sound__btn'),
    document.querySelectorAll('.modal-content'),
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
}
