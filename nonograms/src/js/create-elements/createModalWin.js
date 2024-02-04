import winMp3 from '/audio/win.mp3';

const winAudio = new Audio(winMp3);

const [modal, modalContent, closeButton] = [
  document.createElement('div'),
  document.createElement('div'),
  document.createElement('span'),
];

modal.classList.add('modal');
modalContent.classList.add('modal-content');
closeButton.classList.add('close');

closeButton.innerHTML = `
<svg viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
    <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-469.000000, -1041.000000)" fill="#000000">
      <path d="M487.148,1053.48 L492.813,1047.82 C494.376,1046.26 494.376,1043.72 492.813,1042.16 C491.248,1040.59 488.712,1040.59 487.148,1042.16 L481.484,1047.82 L475.82,1042.16 C474.257,1040.59 471.721,1040.59 470.156,1042.16 C468.593,1043.72 468.593,1046.26 470.156,1047.82 L475.82,1053.48 L470.156,1059.15 C468.593,1060.71 468.593,1063.25 470.156,1064.81 C471.721,1066.38 474.257,1066.38 475.82,1064.81 L481.484,1059.15 L487.148,1064.81 C488.712,1066.38 491.248,1066.38 492.813,1064.81 C494.376,1063.25 494.376,1060.71 492.813,1059.15 L487.148,1053.48" id="cross" sketch:type="MSShapeGroup">
      </path>
    </g>
  </g>
</svg>
`;

document.body.appendChild(modal);
modal.appendChild(modalContent);
modalContent.appendChild(closeButton);

export default function openModalWin(solutionTime) {
  modalContent.innerHTML = '';
  modalContent.appendChild(closeButton);

  const [spanDiv, title, subtitle] = [
    document.createElement('div'),
    document.createElement('p'),
    document.createElement('p'),
  ];

  modalContent.appendChild(spanDiv);
  spanDiv.appendChild(title);
  spanDiv.appendChild(subtitle);

  spanDiv.className = `modal__content_win`;
  title.className = `modal__title`;
  title.textContent = `Congratulations, you WON!!!`;

  subtitle.className = `modal__subtitle`;
  subtitle.textContent = `Time to solve the task: ${solutionTime}`;

  modal.style.display = 'flex';

  const isSound = JSON.parse(localStorage.getItem('sound'));

  if (isSound === true) {
    winAudio.play();
  }
}

function closeModal() {
  modal.style.display = 'none';
}

function closeModalOutsideClick(event) {
  if (event.target === modal) {
    closeModal();
  }
}

document.removeEventListener('click', closeModalOutsideClick);
closeButton.removeEventListener('click', closeModal);

document.addEventListener('click', closeModalOutsideClick);
closeButton.addEventListener('click', closeModal);
