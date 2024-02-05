export default function changeDarkmodePlayground() {
  const [hints, hintZero, sizeSelect, imageSelect] = [
    document.querySelectorAll('.hint'),
    document.querySelector('.zero'),
    document.querySelector('.main__options-select'),
    document.querySelector('.image__section'),
  ];

  const isDarkmode = JSON.parse(localStorage.getItem('darkmode'));

  hints.forEach((hint) => {
    if (!hint.classList.contains('darkmode__hint')) {
      hint.classList.add('darkmode__hint');
    } else {
      hint.classList.remove('darkmode__hint');
    }
  });

  if (!hintZero.classList.contains('darkmode__hint')) {
    hintZero.classList.add('darkmode__hint');
  } else {
    hintZero.classList.remove('darkmode__hint');
  }

  if (!sizeSelect.classList.contains('darkmode__size')) {
    sizeSelect.classList.add('darkmode__size');
  } else if (isDarkmode !== true) {
    sizeSelect.classList.remove('darkmode__size');
  }

  if (!imageSelect.classList.contains('darkmode__image')) {
    imageSelect.classList.add('darkmode__image');
  } else {
    imageSelect.classList.remove('darkmode__image');
  }
}
