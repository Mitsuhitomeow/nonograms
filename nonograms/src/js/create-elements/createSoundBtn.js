const isDarkmode = JSON.parse(localStorage.getItem('darkmode'));
let mode = isDarkmode === null || isDarkmode === false ? '#2b2b2b' : '#fff';

const dataSound = [
  {
    class: 'sound__on',
    imageHTML: `
      <?xml version="1.0" encoding="utf-8"?>
      <svg width="30" height="30" viewBox="-20 0 190 190" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M109.235 130.989C120.797 116.713 120.581 93.5461 108.36 79.5901L115.325 73.1741C130.587 90.6141 130.815 119.585 116.293 137.363L109.235 130.989ZM102.794 125.173L95.998 119.036C102.017 111.331 101.821 99.0421 95.299 91.6211L102.005 85.4441C111.455 96.2201 111.66 114.094 102.794 125.173ZM55.783 85.2681L84.79 65.5911L85.367 146.142L55.092 125.659L55.783 85.2681ZM30.383 117.566C30.383 114.158 30.239 99.4881 30.239 92.4051C30.239 86.3011 33.304 84.2981 38.206 84.2981C42.759 84.2981 47.243 84.7521 47.243 84.7521L47.529 126.563C47.529 126.563 41.78 127.244 38.434 127.244C32.879 127.243 30.383 124.291 30.383 117.566Z" fill="${mode}"/>
      </svg>
    `,
  },
  {
    class: 'sound__off',
    imageHTML: `
      <?xml version="1.0" encoding="utf-8"?>
      <svg width="30" height="30" viewBox="-20 0 190 190" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M109.235 130.989C120.797 116.713 120.581 93.5461 108.36 79.5901L115.325 73.1741C130.587 90.6141 130.815 119.585 116.293 137.363L109.235 130.989ZM102.794 125.173L95.998 119.036C102.017 111.331 101.821 99.0421 95.299 91.6211L102.005 85.4441C111.455 96.2201 111.66 114.094 102.794 125.173ZM55.783 85.2681L84.79 65.5911L85.367 146.142L55.092 125.659L55.783 85.2681ZM30.383 117.566C30.383 114.158 30.239 99.4881 30.239 92.4051C30.239 86.3011 33.304 84.2981 38.206 84.2981C42.759 84.2981 47.243 84.7521 47.243 84.7521L47.529 126.563C47.529 126.563 41.78 127.244 38.434 127.244C32.879 127.243 30.383 124.291 30.383 117.566Z" fill="${mode}"/>
      </svg>
    `,
  },
];

const checkMode = (counter) => {
  mode = counter === 1 ? '#2b2b2b' : '#fff';
};

export default function createSound(container) {
  const countSound = 0;
  let countDark = isDarkmode === false ? 1 : 0;

  const sound = document.createElement('div');
  sound.className = `sound__btn`;

  const handleChangeMode = () => {
    sound.innerHTML = dataSound[countSound].imageHTML;
    container.append(sound);
  };

  const changeMode = (countD, countS) => {
    checkMode(countD);

    let { imageHTML } = dataSound[countS];

    if (countS === 0) {
      imageHTML = `
        <?xml version="1.0" encoding="utf-8"?>
        <svg width="30" height="30" viewBox="-20 0 190 190" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M109.235 130.989C120.797 116.713 120.581 93.5461 108.36 79.5901L115.325 73.1741C130.587 90.6141 130.815 119.585 116.293 137.363L109.235 130.989ZM102.794 125.173L95.998 119.036C102.017 111.331 101.821 99.0421 95.299 91.6211L102.005 85.4441C111.455 96.2201 111.66 114.094 102.794 125.173ZM55.783 85.2681L84.79 65.5911L85.367 146.142L55.092 125.659L55.783 85.2681ZM30.383 117.566C30.383 114.158 30.239 99.4881 30.239 92.4051C30.239 86.3011 33.304 84.2981 38.206 84.2981C42.759 84.2981 47.243 84.7521 47.243 84.7521L47.529 126.563C47.529 126.563 41.78 127.244 38.434 127.244C32.879 127.243 30.383 124.291 30.383 117.566Z" fill="${mode}"/>
        </svg>
      `;
    } else {
      imageHTML = `
        <?xml version="1.0" encoding="utf-8"?>
        <svg width="30" height="30" viewBox="-20 0 190 190" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M109.235 130.989C120.797 116.713 120.581 93.5461 108.36 79.5901L115.325 73.1741C130.587 90.6141 130.815 119.585 116.293 137.363L109.235 130.989ZM102.794 125.173L95.998 119.036C102.017 111.331 101.821 99.0421 95.299 91.6211L102.005 85.4441C111.455 96.2201 111.66 114.094 102.794 125.173ZM55.783 85.2681L84.79 65.5911L85.367 146.142L55.092 125.659L55.783 85.2681ZM30.383 117.566C30.383 114.158 30.239 99.4881 30.239 92.4051C30.239 86.3011 33.304 84.2981 38.206 84.2981C42.759 84.2981 47.243 84.7521 47.243 84.7521L47.529 126.563C47.529 126.563 41.78 127.244 38.434 127.244C32.879 127.243 30.383 124.291 30.383 117.566Z" fill="${mode}"/>
        </svg>
      `;
    }

    sound.innerHTML = imageHTML;
  };

  const clickChangeMode = () => {
    if (countDark === 0) {
      countDark += 1;
    } else {
      countDark -= 1;
    }
    sound.innerHTML = '';

    changeMode(countDark, countSound);
  };

  handleChangeMode(countSound);

  document.addEventListener('DOMContentLoaded', () => {
    const darkmode = document.querySelector('.header__darkmode_btn');

    darkmode.removeEventListener('click', clickChangeMode);
    darkmode.addEventListener('click', clickChangeMode);
  });

  console.log(isDarkmode, mode, dataSound[countSound].imageHTML);
}
