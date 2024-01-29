export function continueGame() {
  // const matrix = JSON.parse(localStorage.getItem('saveGame'));
  // console.log('continue: ', matrix.image);
  // console.log(matrix)
  // const optionCont = document.querySelector('.options__container');
  // optionCont.innerHTML = ''
  // const sel = document.querySelector('.image__section')
  // sel.value = 'Alien'
  // const columns = []
  // const ground = document.createElement('section');
  // ground.innerHTML = '';
  // ground.className = `main__section-playground`;
  // for (let i = 0; i < matrix.size + 1; i += 1) {
  //   const row = document.createElement('div');
  //   ground.append(row);
  //   row.className = `row`;
  //   if (i === 0) {
  //     row.className = `first__row`;
  //   }
  //   for (let j = 0; j < matrix.size + 1; j += 1) {
  //     const column = document.createElement('div');
  //     row.append(column);
  //     column.className = `column`;
  //     if (i === 0) {
  //       column.className = `hint hint__top hint__background`;
  //     }
  //     if (j === 0) {
  //       column.className = `hint hint__left hint__background`;
  //     }
  //     if (i === 0 && j === 0) {
  //       column.className = `zero hint__background`;
  //     }
  //     columns.push(column);
  //   }
  // }
  // console.log(ground)
  // todo: Сгенерировать поле по матрице...
}

export function setResults(time) {
  console.log('записано в таблицу: ', time.getTime());

  // todo: Сделать функцию заполнения таблицы результатов...
}

export function getResults() {
  console.log('results: ');

  // todo: Cделать список результатов с сортировкой по времени...
}
