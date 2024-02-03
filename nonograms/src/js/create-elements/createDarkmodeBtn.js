import sun from '/svg/darkmodeSun.svg';
import moon from '/svg/darkmodeMoon.svg';
import initDarkMode from '../game-process/initDarkMode';

const dataDarkmode = [
  {
    name: 'Sun',
    image: sun,
  },
  {
    name: 'Moon',
    image: moon,
  },
];

export default function createDarkMode(container) {
  let count = 0;

  const [darkmode, darkmodeImg] = [
    document.createElement('div'),
    document.createElement('img'),
  ];

  container.append(darkmode);
  darkmode.append(darkmodeImg);

  darkmode.className = `header__darkmode_btn`;
  darkmodeImg.className = `header__image_${dataDarkmode[0].name.toLowerCase()} darkmode_image`;

  const handleChangeImg = (counter) => {
    const { name, image } = dataDarkmode[counter];
    darkmodeImg.setAttribute('src', image);
    darkmodeImg.setAttribute('alt', name);
  };

  const clickChangeLocalstorage = (counter) => {
    if (counter === 1) {
      localStorage.setItem('darkmode', true);
    } else {
      localStorage.setItem('darkmode', false);
    }
  };

  const clickChangeImg = () => {
    if (count === 0) {
      count += 1;
    } else {
      count -= 1;
    }
    darkmodeImg.innerHTML = '';
    handleChangeImg(count);
    clickChangeLocalstorage(count);
  };

  handleChangeImg(count);

  const isDarkmode = JSON.parse(localStorage.getItem('darkmode'));
  if (isDarkmode === null) {
    localStorage.setItem('darkmode', false);
  }

  document.addEventListener('DOMContentLoaded', () => {
    darkmode.removeEventListener('click', () => {
      clickChangeImg();
      initDarkMode();
    });

    darkmode.addEventListener('click', () => {
      clickChangeImg();
      initDarkMode();
    });

    if (isDarkmode === true) {
      clickChangeImg();
      initDarkMode();
    }
  });
}
