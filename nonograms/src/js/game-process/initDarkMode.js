export default function initDarkMode() {
  const [title, copyright, darkmodeBtn] = [
    document.querySelector('.header__title'),
    document.querySelector('.footer__title'),
    document.querySelector('.header__darkmode_btn'),
  ];

  // смена бэкграунда
  document.body.classList.toggle('darkmode__background');

  // смена тайтла
  title.classList.toggle('darkmode__title');
  copyright.classList.toggle('darkmode__title');

  // кнопка даркмода
  darkmodeBtn.classList.toggle('darkmode__active');
}
