import squareMp3 from '/audio/square.mp3';
import crossMp3 from '/audio/cross.mp3';
import emptyMp3 from '/audio/empty.mp3';

const squareAudio = new Audio(squareMp3);
const crossAudio = new Audio(crossMp3);
const emptyAudio = new Audio(emptyMp3);

export default class CreatePlayground {
  constructor(size, time) {
    this.ground = document.createElement('section');
    this.columns = [];
    this.matrix = [];
    this.time = time;

    this.initPlayground(size);
    this.addClick();
  }

  updatePlayground(size) {
    this.initPlayground(size);
    this.addClick();
  }

  initPlayground(size) {
    this.ground.innerHTML = '';
    this.ground.className = `main__section-playground`;

    for (let i = 0; i < size + 1; i += 1) {
      const row = document.createElement('div');
      this.ground.append(row);
      row.className = `row`;

      if (i === 0) {
        row.className = `first__row`;
      }

      for (let j = 0; j < size + 1; j += 1) {
        const column = document.createElement('div');
        row.append(column);
        column.className = `column`;

        if (i === 0) {
          column.className = `hint hint__top hint__background`;
        }

        if (j === 0) {
          column.className = `hint hint__left hint__background`;
        }

        // Вставлю в блок инициализированое Время.
        if (i === 0 && j === 0) {
          const span = document.createElement('span');
          this.time.span = span;
          span.innerHTML = this.time.time;
          column.append(span);
          span.className = `section__time`;
          column.className = `zero hint__background`;
        }

        this.columns.push(column);
      }
    }
  }

  addClick() {
    this.columns.forEach((column) => {
      const elem = column;

      if (column.classList.contains('column')) {
        elem.addEventListener('click', () => {
          if (!this.time.isRunning()) {
            this.time.start();
          }
          if (column.innerHTML === '' && !column.classList.contains('cross')) {
            // Добавление звуков Добавления и удаления квадратиков
            const isSound = JSON.parse(localStorage.getItem('sound'));

            if (isSound === true && !column.classList.contains('black')) {
              squareAudio.play();
            } else if (isSound === true && column.classList.contains('black')) {
              emptyAudio.play();
            }
            // -----------

            column.classList.toggle('black');
          } else {
            column.classList.remove('black');
          }
        });

        elem.addEventListener('contextmenu', (event) => {
          event.preventDefault();
          const isSound = JSON.parse(localStorage.getItem('sound'));

          if (!this.time.isRunning()) {
            this.time.start();
          }
          if (column.innerHTML === '' && !column.classList.contains('black')) {
            // Добавление звуков Добавления и удаления квадратиков

            if (isSound === true && !column.classList.contains('cross')) {
              crossAudio.play();
            }
            // -----------

            elem.classList.toggle('cross');
            elem.innerHTML = `
              <svg viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                  <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-469.000000, -1041.000000)" fill="#000000">
                    <path d="M487.148,1053.48 L492.813,1047.82 C494.376,1046.26 494.376,1043.72 492.813,1042.16 C491.248,1040.59 488.712,1040.59 487.148,1042.16 L481.484,1047.82 L475.82,1042.16 C474.257,1040.59 471.721,1040.59 470.156,1042.16 C468.593,1043.72 468.593,1046.26 470.156,1047.82 L475.82,1053.48 L470.156,1059.15 C468.593,1060.71 468.593,1063.25 470.156,1064.81 C471.721,1066.38 474.257,1066.38 475.82,1064.81 L481.484,1059.15 L487.148,1064.81 C488.712,1066.38 491.248,1066.38 492.813,1064.81 C494.376,1063.25 494.376,1060.71 492.813,1059.15 L487.148,1053.48" id="cross" sketch:type="MSShapeGroup">
                    </path>
                  </g>
                </g>
              </svg>
            `;
          } else {
            elem.classList.remove('cross');
            elem.innerHTML = '';
            if (isSound === true) {
              emptyAudio.play();
            }
          }
        });

        // let touchStart;
        // const touchHold = 500;

        // elem.addEventListener(
        //   'touchstart',
        //   () => {
        //     touchStart = new Date().getTime();
        //   },
        //   { passive: true }
        // );

        // elem.addEventListener('touchend', () => {
        //   const touchEndTime = new Date().getTime();
        //   const touchDuration = touchEndTime - touchStart;

        //   if (touchDuration > touchHold) {
        //     if (!this.time.isRunning()) {
        //       this.time.start();
        //     }
        //     if (
        //       column.innerHTML === '' &&
        //       !column.classList.contains('black')
        //     ) {
        //       elem.classList.toggle('cross');
        //       elem.innerHTML = `
        //         <svg viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
        //           <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
        //             <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-469.000000, -1041.000000)" fill="#000000">
        //               <path d="M487.148,1053.48 L492.813,1047.82 C494.376,1046.26 494.376,1043.72 492.813,1042.16 C491.248,1040.59 488.712,1040.59 487.148,1042.16 L481.484,1047.82 L475.82,1042.16 C474.257,1040.59 471.721,1040.59 470.156,1042.16 C468.593,1043.72 468.593,1046.26 470.156,1047.82 L475.82,1053.48 L470.156,1059.15 C468.593,1060.71 468.593,1063.25 470.156,1064.81 C471.721,1066.38 474.257,1066.38 475.82,1064.81 L481.484,1059.15 L487.148,1064.81 C488.712,1066.38 491.248,1066.38 492.813,1064.81 C494.376,1063.25 494.376,1060.71 492.813,1059.15 L487.148,1053.48" id="cross" sketch:type="MSShapeGroup">
        //               </path>
        //             </g>
        //           </g>
        //         </svg>
        //       `;
        //     } else {
        //       elem.classList.remove('cross');
        //       elem.innerHTML = '';
        //     }
        //   }
        // });
      }
    });
  }

  getElement() {
    return this.ground;
  }
}
